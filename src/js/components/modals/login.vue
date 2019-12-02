<template>
  <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Log In</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="username"><b>Username</b></label>
              <input required type="text" class="form-control" id="username" placeholder="Enter Username" autocomplete="off">
            </div>
            <div class="form-group">
              <label for="password"><b>Password</b></label>
              <input required type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-block btn-primary">Log in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>