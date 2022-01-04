<template>
  <div>
    <count></count>
    <person></person>
  </div>
</template>

<script>
  import axios from 'axios';
  import count from './components/Count.vue'
  import Person from './components/Person.vue';
  export default {
    name: 'app',
    components: {
      count,
      Person
    }
  }
</script>

<style>
  .ac {
    display: flex;
    justify-content: space-between;
  }
</style>