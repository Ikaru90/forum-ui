<template>
  <div class="container-fluid">
    <v-menu
      v-bind:user="user"
      v-bind:username="username"
      v-bind:onSignup="handleSignup"
      v-bind:onLogin="handleLogin"
      v-bind:onLogout="handleLogout"
    />
    <notifications group="auth" position="top left" />
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
      user: null,
      username: null,
    }
  },
  created() {
    this.username = localStorage.getItem('username');
  },
  methods: {
    handleSignup(username) {
      localStorage.setItem('username', username);
      this.username = username;
    },
    handleLogin(user) {
      localStorage.setItem('username', username);
      this.user = user;
    },
    handleLogout() {
      localStorage.removeItem('username');
      this.username = null;

      this.$notify({
        group: 'auth',
        type: 'success',
        text: 'Logout successfully'
      });
    }
  }
}
</script>