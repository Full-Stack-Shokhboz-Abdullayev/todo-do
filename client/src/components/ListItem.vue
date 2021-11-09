<template>
  <li class="list-group-item mx-auto box">
    <div class="row align-items-center">
      <div class="col-md-2">
        <span class="text-decoration-underline">
          {{ formatDate(task?.due_date) }}
        </span>
      </div>
      <div class="col-md-6" align="left">
        <component
          :is="task.completed ? 'del' : 'span'"
          class="pointer"
          :class="{ 'text-primary h6': task.important }"
          @click="update('completed')"
        >
          {{ task?.title }}
        </component>
      </div>

      <div class="col-md-4 row">
        <div class="col-4" align="center">
          <router-link
            tag="button"
            :to="{ name: 'Add', query: { editing: task.id } }"
            class="btn btn-outline-success"
          >
            <vue-feather size="13" type="edit-3"></vue-feather>
          </router-link>
        </div>
        <div class="col-4" align="center">
          <button class="btn btn-outline-danger" @click="deleteTask">
            <vue-feather size="13" type="trash-2"> </vue-feather>
          </button>
        </div>
        <div class="col-4" align="center">
          <button class="btn btn-outline-primary" @click="update('important')">
            <vue-feather size="13" type="alert-circle"></vue-feather>
          </button>
        </div>
      </div>
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { mapActions } from "vuex";
import { ITask } from "../utils/task.interface";

export default defineComponent({
  props: {
    task: { type: Object as PropType<ITask>, required: true },
  },
  components: {},
  methods: {
    ...mapActions(["DELETE_TASK", "UPDATE_TASK"]),
    formatDate(value: string | Date) {
      const formatter = new Intl.DateTimeFormat("ru");
      return formatter.format(new Date(value));
    },
    deleteTask() {
      this.DELETE_TASK(this.task.id);
    },
    update(field: "completed" | "important") {
      this.UPDATE_TASK({ ...this.task, [field]: !this.task[field] });
    },
  },
});
</script>
<style>
.pointer {
  user-select: none;
  cursor: pointer;
}
.h6 {
  font-weight: 700 !important;
}
</style>
