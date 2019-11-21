<template>
  <div  class="large-text">
    <p>Obi-Wan Kenobi: {{ Kenobi }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Kenobi',
    data() {
      return {
        Kenobi: 'Hello there',
      }
    }
  }
</script>

<style>
  .large-text {
    font-size: 50px;
  }
</style>