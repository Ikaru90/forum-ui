<template>
  <div class="row">
    <div class="center">
      <div class="orange-text">
        404
      </div>
      <img v-bind:src="notFound" />
      <div>
        Page Not Found
      </div>
      <router-link to="/">
        <button type="button" class="btn btn-primary">To Main Page</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import notFound from 'resources/notFound.png';

export default {
  name: 'notFound',
  data() {
    return {
      notFound
    }
  },
}
</script>

<style>
  .center {
    width: 100%;
    text-align: center;
    font-size: 60px;
  }

  .orange-text {
    color : orange;
  }
</style>
