<template>
  <div class="row">
    <div class="col">
      <ul v-if="user" class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="/" data-toggle="modal" data-target="#profile-modal">{{ user.username }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/" @click="onLogout">Log out</a>
        </li>
      </ul>
      <ul v-else class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="/" data-toggle="modal" data-target="#signup-modal">Sign up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/" data-toggle="modal" data-target="#login-modal">Log in</a>
        </li>  
      </ul>
    </div>
    <LoginModal v-bind:onLogin="onLogin" />
    <SignupModal v-bind:onSignup="onSignup" />
    <ProfileModal v-bind:user="user" />
  </div>
</template>

<script>
import login from "./modals/login";
import signup from "./modals/signup";
import profile from "./modals/profile";

export default {
  name: 'menu',
  props: [
    'user',
    'onSignup',
    'onLogin',
    'onLogout',
    'onLogout'
  ],
  components: {
    "LoginModal": login,
    "SignupModal": signup,
    "ProfileModal": profile,
  }
}
</script>