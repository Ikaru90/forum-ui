<template>
  <div class="row justify-content-center">
    <div class="col-xl-3 col-lg-4 col-md-5 col-sm-8">
      <form>
        <div class="form-group">
          <label for="username"><b>Username</b></label>
          <input required type="text" class="form-control" id="username" placeholder="Enter Username" autocomplete="off">
        </div>
        <div class="form-group">
          <label for="firstName"><b>FirstName</b></label>
          <input required type="text" class="form-control" id="firstName" placeholder="Enter firstName" autocomplete="off">
        </div>
        <div class="form-group">
          <label for="lastName"><b>LastName</b></label>
          <input required type="text" class="form-control" id="lastName" placeholder="Enter lastName" autocomplete="off">
        </div>
        <div class="form-group">
          <label for="password"><b>Password</b></label>
          <input required type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="confirmPassword"><b>Confirm Password</b></label>
          <input required type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password">
        </div>
        <button type="submit" class="btn btn-block btn-primary">Sign Up</button>
      </form>
    </div>
  </div>
</template>