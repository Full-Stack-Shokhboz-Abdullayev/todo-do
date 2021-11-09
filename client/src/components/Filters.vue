<template>
  <div class="btn-group">
    <button
      class="btn"
      :class="{
        'btn-primary': selectedFilter === action,
        'btn-outline-primary': selectedFilter !== action,
      }"
      :key="'filter' + index"
      v-for="(action, index) in actions"
      @click="select(action)"
    >
      {{ titleCased(action) }}
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapMutations, mapState } from "vuex";
import { FilterOptions } from "../types/filter.enum";

interface IData {
  actions: FilterOptions[];
}

export default defineComponent({
  data: (): IData => ({
    actions: [
      FilterOptions.ALL,
      FilterOptions.ACTIVE,
      FilterOptions.COMPLETED,
      FilterOptions.IMPORTANT,
    ],
  }),
  computed: {
    ...mapState(["selectedFilter"]),
  },
  methods: {
    ...mapMutations(["SET_FILTER"]),
    titleCased(val: string) {
      return val[0].toUpperCase() + val.slice(1, val.length);
    },
    select(filter: FilterOptions) {
      this.SET_FILTER(filter);
    },
  },
});
</script>
