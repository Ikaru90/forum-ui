<template>
  <div class="container-fluid">
    <NavigationMenu
      v-bind:user="user"
      v-bind:onSignup="setCredentials"
      v-bind:onLogin="setCredentials"
      v-bind:onLogout="handleLogout"
    />
    <notifications group="auth" position="top left" />
    <router-view />
  </div>
</template>

<script>
import navigationMenu from "./components/navigationMenu";

export default {
  name: 'app',
  components: {
    "NavigationMenu": navigationMenu
  },
  data() {
    return {
      user: null,
    }
  },
  created() {
    const username = JSON.parse(localStorage.getItem('username'));
    const firstName = JSON.parse(localStorage.getItem('firstName'));
    const lastName = JSON.parse(localStorage.getItem('lastName'));

    if (username && firstName && lastName) {
      this.user = { username, firstName, lastName }
    }
  },
  methods: {
    setCredentials(credentials) {
      localStorage.setItem('username', JSON.stringify(credentials.username));
      localStorage.setItem('firstName', JSON.stringify(credentials.firstName));
      localStorage.setItem('lastName', JSON.stringify(credentials.lastName));
      localStorage.setItem('token', JSON.stringify(credentials.token));

      this.user = {
        username: credentials.username,
        firstName: credentials.firstName,
        lastName: credentials.lastName
      };
    },
    handleLogout() {
      localStorage.removeItem('username');
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('token');
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
