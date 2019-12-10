<template>
  <div class="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Log In</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit="handleSignup">
            <div v-if="error" class="error">{{ error }}</div>
            <div class="form-group">
              <label for="username"><b>Username</b></label>
              <input required type="text" minlength="4" class="form-control" v-model="username" placeholder="Enter Username" autocomplete="off">
            </div>
            <div class="form-group">
              <label for="firstName"><b>FirstName</b></label>
              <input required type="text" class="form-control" v-model="firstName" placeholder="Enter firstName" autocomplete="off">
            </div>
            <div class="form-group">
              <label for="lastName"><b>LastName</b></label>
              <input required type="text" class="form-control" v-model="lastName" placeholder="Enter lastName" autocomplete="off">
            </div>
            <div class="form-group">
              <label for="password"><b>Password</b></label>
              <input required type="password" minlength="4" class="form-control" v-model="password" placeholder="Password">
            </div>
            <div class="form-group">
              <label for="confirmPassword"><b>Confirm Password</b></label>
              <input required type="password" minlength="4" class="form-control" v-model="confirmPassword" placeholder="Confirm Password">
            </div>
            <button type="submit" class="btn btn-block btn-primary" data-dismiss="signup-modal">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { api } from 'utils/api';

export default {
  name: 'signup',
  data() {
    return {
      error: null,
      username: null,
      firstName: null,
      lastName: null,
      password: null,
      confirmPassword: null
    }
  },
  props: ['onSignup'],
  methods: {
    handleSignup(e) {
      e.preventDefault();
      e.stopPropagation();

      if (this.password === this.confirmPassword) {
        const data = {
          username: this.username,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
        }

        
        api.POST('/api/auth/registration', data).then((result) => {
          if (result.data) {
            this.$notify({
              group: 'auth',
              type: 'success',
              text: 'User created successfully'
            });

            this.onSignup(result.data);
            $('#signup-modal').modal('hide');

            this.error = null;
            this.username = null;
            this.firstName = null;
            this.lastName = null;
            this.password = null;
            this.confirmPassword = null;
          }
        }).catch(() => {
          this.error = "Username is taken";
        });
      } else {
        this.error = "Passwords do not match";
      }
    },
  }
}
</script>

<style>
.error {
  color: red;
}
</style>