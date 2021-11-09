<template>
  <transition-group tag="ul" class="box list-group" name="fade" appear>
    <ListItem v-for="task in tasks" :task="task" :key="task.id"></ListItem>
  </transition-group>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { ITask } from "../utils/task.interface";
import ListItem from "./ListItem.vue";

export default defineComponent({
  props: {
    tasks: Array as PropType<ITask[]>,
  },
  components: { ListItem },
});
</script>
<style lang="scss">
.list-group-item {
  display: inline-block !important;
}
.fade {
  display: inline-block !important;
  &-enter-from {
    opacity: 0;
    transform: translateX(10px);
  }
  &-move {
    transition: 0.3s all ease-in-out !important;
  }
  &-enter-active,
  &-leave-active {
    transition: 0.3s all ease-in-out !important;
  }
  &-leave-active {
    position: absolute !important;
  }
  &-leave-to {
    opacity: 0;
  }
}
</style>
