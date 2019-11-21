<template>
  <div  class="large-text">
    <p>Obi-Wan Kenobi: {{ Kenobi }}</p>
    <p>General Grievous: {{ Grievous }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Kenobi: 'Hello there',
        Grievous: 'General Kenobi',
      }
    }
  }
</script>

<style>
  .large-text {
    font-size: 50px;
  }
</style>
