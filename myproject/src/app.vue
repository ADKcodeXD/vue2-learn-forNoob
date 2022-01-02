<template>
  <div>
      <school></school>
      <student></student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from '../src2/components/Student.vue'
export default {
   name:'app',
   components:{
       School,
       Student
   }

}
</script>

<style>

</style>