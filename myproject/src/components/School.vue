<template>
    <div class="demo">
        <div ref="title"></div>
        <button @click="showdom">点我点我</button>
        <h1>学校名称{{schoolname}}</h1>
        <h2>学校地址{{address}}</h2>
    </div>
</template>

<script>
export default {
    name:"school",
    data() {
        return {
            schoolname:"foda",
            address:"humen"
        }
    },methods: {
        showdom(){
            this.$refs.title
        }
    },
}
</script>

<style>
    .demo{
        height: 50vw;
        width: 50vw;
        background-color: aquamarine;
    }
</style>