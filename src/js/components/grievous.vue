<template>
  <div  class="large-text">
    <p>General Grievous: {{ Grievous }}</p>
  </div>
</template>

<script>
  export default {
    name: 'grievous',
    data() {
      return {
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