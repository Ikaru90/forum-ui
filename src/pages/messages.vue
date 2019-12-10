<template>
  <div  class="default-text">
    <div>
      <input type="text" v-model="message" placeholder="type text" />
      <button type="button" @click="handleSend">Send</button>
    </div>
    <p v-for="message in messages" v-bind:key="message.id">
      ({{ message.id }})
      {{ message.text }}
      <button type="button" @click="() => handleDelete(message.id)">X</button>
    </p>
  </div>
</template>

<script>
import { api } from 'utils/api';

export default {
  name: 'messages',
  data() {
    return {
      message: null,
      messages: [],
    }
  },
  methods: {
    messagesFetch() {
      api.GET('/api/message').then(result => this.messages = result.body);
    },
    handleSend() {
      this.$http.post('/api/messages', {text: this.message}).then(() => {
        this.message = null;
        this.messagesFetch();
      });
    },
    handleDelete(id) {
      this.$http.delete(`/api/messages/${id}`).then(() => {
        this.messagesFetch();
      });
    }
  },
  created() {
    this.messagesFetch();
  },
}
</script>

<style>
.default-text {
  font-size: 15px;
}
</style>