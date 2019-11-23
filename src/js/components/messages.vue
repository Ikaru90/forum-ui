<template>
  <div  class="default-text">
    <p>messages: {{ messages }}</p>
  </div>
</template>

<script>
export default {
  name: 'messages',
  data() {
    return {
      messages: [],
    }
  },
  created() {
    this.$http.get('/api/message').then(result => console.log(result));
  }
}
</script>

<style>
.default-text {
  font-size: 15px;
}
</style>