<template>
  <table class="table table-hover text-center">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Initiator</th>
        <th scope="col">Theme</th>
        <th scope="col">Date Created</th>
      </tr>
    </thead>
    <tbody>
      <tr class="pointer" v-for="theme in themes" v-bind:key="theme.id" @click="() => toTheme(theme.id)">
        <th scope="row">{{ theme.id }}</th>
        <td>{{ theme.initiator }}</td>
        <td>{{ theme.name }}</td>
        <td>{{ theme.created }}</td>
      </tr>
    </tbody>
  </table>
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
    toTheme(id) {
      this.$router.push(`/theme/${id}`);
    }
  },
  created() {
    this.messagesFetch();
  },
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }
</style>