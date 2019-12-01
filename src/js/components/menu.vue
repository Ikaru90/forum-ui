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
          <router-link to="/signup">
            <a class="nav-link active" href="#">Sign up</a>
          </router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/login">
            <a class="nav-link active" href="#">Log in</a>
          </router-link> 
        </li>  
      </ul>
    </div>
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  props: ['username'],
}
</script>