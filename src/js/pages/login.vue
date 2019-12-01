<template>
  <div class="row justify-content-center">
    <div class="col-xl-3 col-lg-4 col-md-5 col-sm-8">
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
</template>