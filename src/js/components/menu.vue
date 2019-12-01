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
  </div>
</template>

<script>
export default {
  name: 'menu',
  props: ['username'],
}
</script>