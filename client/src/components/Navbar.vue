<template>
  <div class="d-flex justify-content-between p-3 nav-bar">
    <h3 class="text-dark m-0">Todo Do</h3>
    <ul class="nav nav-pills">
      <router-link
        :to="{ name: 'Home' }"
        class="nav-item nav-link mx-2"
        exact
        exact-active-class="active"
      >
        Home
      </router-link>
      <router-link
        :to="{ name: 'Add' }"
        class="nav-item nav-link mx-2"
        exact
        exact-active-class="active"
      >
        Add New
      </router-link>
      <router-link
        :to="{ name: 'About' }"
        class="nav-item nav-link mx-2"
        exact
        exact-active-class="active"
      >
        About
      </router-link>
    </ul>
  </div>
</template>
