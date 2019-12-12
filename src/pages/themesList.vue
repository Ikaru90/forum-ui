<template>
  <div  class="default-text">
    <p v-for="theme in themes" v-bind:key="theme.id">
      ({{ theme.initiator }})
      {{ theme.name }} - {{ theme.text }}
    </p>
  </div>
</template>

<script>
import { api } from 'utils/api';

export default {
  name: 'themesList',
  data() {
    return {
      themes: [],
    }
  },
  methods: {
    messagesFetch() {
      api.GET('/api/theme').then(result => this.themes = result.data);
    },
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