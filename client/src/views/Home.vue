<template>
  <div class="box">
    <search-bar></search-bar>
    <list class="mt-3" :tasks="filteredTasks"></list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import SearchBar from "@/components/SearchBar.vue";
import List from "@/components/List.vue";
import { mapState } from "vuex";
import lower from "../utils/lower";
import { FilterOptions } from "../types/filter.enum";
export default defineComponent({
  components: {
    SearchBar,
    List,
  },
  computed: {
    ...mapState(["tasks", "searchInput", "selectedFilter"]),
    filteredTasks(): any {
      return this.tasks.filter((task: any) => {
        return lower(task.title).includes(lower(this.searchInput)) &&
          this.selectedFilter === FilterOptions.ALL
          ? true
          : this.selectedFilter === FilterOptions.ACTIVE
          ? task.completed === false
          : task[this.selectedFilter] === true;
      });
    },
  },
});
</script>
<style lang="scss">
.box {
  width: var(--width);
  position: relative;
  z-index: 10;
}
html,
body {
  box-sizing: border-box;
  --width: 700px;
}
@media screen and (max-width: 770px) {
  [align="left"] {
    text-align: center !important;
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
  html,
  body {
    --width: 500px;
  }
}

@media screen and (max-width: 550px) {
  html,
  body {
    --width: 400px;
  }

  .search-bar {
    flex-wrap: wrap;
    justify-content: center;
    input {
      margin: 0 !important;
    }
    div.btn-group {
      margin-top: 10px !important;
    }
  }
}

@media screen and (max-width: 470px) {
  html,
  body {
    --width: 100%;
  }
}
@media screen and (max-width: 436px) {
  .nav-bar {
    justify-content: center !important;
    flex-wrap: wrap;
    .nav {
      margin-top: 10px !important;
    }
  }
}
</style>
