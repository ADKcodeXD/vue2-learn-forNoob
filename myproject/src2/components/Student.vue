<template>
    <div>
        <button @click="flag=!flag">显示/隐藏</button>
        <transition name="animate__animated animate__bounce"
        enter-active-class="animate__bounceInLeft"
        leave-active-class="animate__fadeOutRight"
        appear>
            <h1 v-show="flag">学生姓名{{studentname}}</h1>
        </transition>
    </div>
</template>

<script>
import 'animate.css'
export default {
    data() {
        return {
            flag:true,
            studentname:"王小美"
        }
    }
}
</script>

<style >
    h1{
        transition: 0.5s ease;
    }
    /* .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }

    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    } */
    /* @keyframes xtranslate{
        from{
            transform: translateX(-300px);
        }
        to{
            transform: translateX(0);
        }
    } */
</style>