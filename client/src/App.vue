<template>
  <div class="container">
    <navbar></navbar>
    <div class="centerer d-flex flex-column w-100 align-items-center mt-5">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    Navbar,
  },

  async created() {
    await this.$store.dispatch("GET_TASKS");
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
