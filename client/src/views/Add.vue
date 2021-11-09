<template>
  <div class="box">
    <h3>Todo Do Form</h3>
    <form @submit.prevent="submit" class="form mt-3">
      <div class="mb-3" align="left">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          v-model.trim="form.title"
          id="title"
        />
      </div>
      <div class="mb-3" align="left">
        <label for="description" class="form-label">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model.trim="form.description"
        />
      </div>
      <div class="mb-3" align="left">
        <label for="due_date" class="form-label">Due Date</label>
        <date-picker class="w-100" v-model="form.due_date"></date-picker>
      </div>
      <button type="submit" class="btn mt-3 btn-primary d-block w-100">
        Submit
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapActions, mapState } from "vuex";
import { ITask } from "../utils/task.interface";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default defineComponent({
  data: () => ({
    form: {
      title: "",
      description: "",
      due_date: "",
    } as Partial<ITask>,
  }),
  components: {
    DatePicker,
  },
  methods: {
    ...mapActions(["ADD_TASK", "UPDATE_TASK"]),
    async submit() {
      if (this.editing) {
        await this.UPDATE_TASK(this.form);
      } else {
        await this.ADD_TASK(this.form);
      }
      this.$router.push({ name: "Home" });
    },
    setTask() {
      if (this.editing) {
        const editingTask: ITask = this.tasks.find(
          (task: ITask) => task.id == this.$route.query.editing
        );
        if (editingTask) {
          if (editingTask.due_date) {
            editingTask.due_date = new Date(editingTask.due_date);
          }
          this.form = editingTask;
        }
      }
    },
  },
  mounted() {
    this.setTask();
  },
  watch: {
    "$route.query": function () {
      this.setTask();
    },
  },
  computed: {
    ...mapState(["tasks"]),

    editing() {
      return (
        this.$route.query.editing !== undefined &&
        this.$route.query.editing !== null
      );
    },
  },
});
</script>
