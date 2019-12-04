<template>
  <div class="modal fade" id="profile-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Profile</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ user && user.firstName }} {{ user && user.lastName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data() {
    return {
      firstName: null,
      lastName: null,
    }
  },
  props: ['user'],
  created() {
    if (this.user && this.user.username) {
      this.$http.post('/api/auth/userInfo', { 'username': this.user.username }).then((result) => {
        this.firstName = result.body.firstName;
        this.lastName = result.body.lastName;
      });
    }
  },
}
</script>