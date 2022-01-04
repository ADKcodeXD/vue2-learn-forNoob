<template>
    <ul>
        <li :style="{opacity}">欢迎学习vue</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name: 'News',
        data() {
            return {
                opacity: 1
            }
        },
        beforeDestroy() {
            clearInterval(this.timmer)
        },
        activated(){
            this.timmer = setInterval(() => {
                console.log("激活");
                this.opacity -= 0.01;
                if (this.opacity <= 0) this.opacity = 1
            }, 15)
        },
        deactivated(){
            clearInterval(this.timmer)
        }
    }
</script>

<style>

</style>