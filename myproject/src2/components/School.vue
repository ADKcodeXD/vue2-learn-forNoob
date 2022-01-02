<template>
    <div class="demo">
        <div ref="title"></div>
        <button @click="showdom">点我点我</button>
        <h1>学校名称{{schoolname}}</h1>
        <h2>学校地址{{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:"school",
    data() {
        return {
            schoolname:"foda",
            address:"humen",
            pubId:''
        }
    },methods: {
        showdom(){
            this.$refs.title
        }
    },
    mounted() {
       this.pubId=pubsub.subscribe('hello',(a,b)=>{
           console.log("有人发布了消息，并且执行了"+b);
       })
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId);
    }
}
</script>

<style scoped lang="less">
    .demo{
        height: 50vw;
        width: 50vw;
        background-color: aquamarine;
    }
</style>