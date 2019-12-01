<template>
  <div class="container-fluid">
    <v-menu v-bind:username="username" />
    <router-view />
  </div>
</template>

<script>
import menu from "./components/menu";

export default {
  name: 'app',
  components: {
    "v-menu": menu
  },
  data() {
    return {
      username: null,
    }
  },
  created() {
    // this.username = localStorage.getItem('username');
  }
}
</script>