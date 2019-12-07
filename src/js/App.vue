<template>
  <div class="container-fluid">
    <v-menu
      v-bind:user="user"
      v-bind:onSignup="handleSignup"
      v-bind:onLogin="handleLogin"
      v-bind:onLogout="handleLogout"
    />
    <hr>
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
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem('user'));
  },
  methods: {
    handleSignup(user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.user = user;
    },
    handleLogin(user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.user = user;
    },
    handleLogout() {
      localStorage.removeItem('user');
      this.user = null;

      this.$notify({
        group: 'auth',
        type: 'success',
        text: 'Logout successfully'
      });
    }
  }
}
</script>