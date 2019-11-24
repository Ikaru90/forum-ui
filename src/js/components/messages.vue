<template>
  <div  class="default-text">
    <p v-for="message in messages" v-bind:key="message.id">message: {{ message.text }}</p>
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
    this.$http.get('/api/message').then(result => this.messages = result.body);
  }
}
</script>

<style>
.default-text {
  font-size: 15px;
}
</style>