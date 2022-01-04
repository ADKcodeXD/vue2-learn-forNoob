<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
        <input type="text" placeholder="enter the name you search" v-model="keyword" @keydown.enter="getUsers"/>&nbsp;
        <button @click="getUsers">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data() {
        return {
            keyword:''
        }
    },methods: {
        getUsers(){
            this.$bus.$emit('getUsers',{isFirst:false,isLoading:true,errMsg:'',users:[]})
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                response=>{
                    console.log("成功了");
                    this.$bus.$emit('getUsers',{isLoading:false,errMsg:'',users:response.data.items})
                },
                error=>{
                    console.log("失败了",error.message);
                    this.$bus.$emit('getUsers',{isLoading:false,errMsg:error.message,users:[]})
                }
            )
            
        }
    },
}
</script>

<style>

</style>