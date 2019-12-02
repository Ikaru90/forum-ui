<template>
  <div class="row">
    <div class="col">
      <ul v-if="username" class="nav justify-content-end">
        <li class="nav-item">
          <router-link to="/profile">
            <a class="nav-link active" href="#">{{ username }}</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/logout">
            <a class="nav-link active" href="#">Log out</a>
          </router-link>  
        </li>
      </ul>
      <ul v-else class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="#" data-toggle="modal" data-target="#signup-modal">Sign up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" data-toggle="modal" data-target="#login-modal">Log in</a>
        </li>  
      </ul>
    </div>
    <v-login />
    <v-signup />
  </div>
</template>

<script>
import login from "./modals/login";
import signup from "./modals/signup";

export default {
  name: 'menu',
  props: ['username'],
  components: {
    "v-login": login,
    "v-signup": signup
  }
}
</script>