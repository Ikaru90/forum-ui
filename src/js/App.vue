<template>
  <div>
    <v-menu />
    <router-view />
  </div>
</template>

<script>
import menu from "./components/menu";

  export default {
    name: 'app',
    components: {
      "v-menu": menu
    }
  }
</script>