<template>
  <div class="d-flex align-items-center w-100 search-bar">
    <input
      placeholder="Search for tasks..."
      type="search"
      class="form-control me-2"
      v-model.trim="input"
    />
    <filters></filters>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapState } from "vuex";
import Filters from "@/components/Filters.vue";
export default defineComponent({
  components: {
    Filters,
  },
  methods: {
    ...mapMutations(["SET_SEARCH"]),
  },
  computed: {
    ...mapState({ searchInput: "searchInput" as string }),
    input: {
      get(): any {
        return this.searchInput;
      },
      set(val: string) {
        this.SET_SEARCH(val);
      },
    },
  },
});
</script>
