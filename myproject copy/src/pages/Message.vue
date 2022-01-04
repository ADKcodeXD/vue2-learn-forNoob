<template>
    <div>
        <ul>
            <li v-for="item in messageList" :key="item.id">
                <!-- 跳转路由携带参数，对象写法
                <router-link :to="{
                    name:'detailname',
                    params:{
                        id:item.id,
                        title:item.title
                    }
                }">{{item.title}}</router-link>&nbsp;&nbsp; -->
                <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{item.title}}</router-link>
                <button @click="pushShow(item)">push查看</button>
                <button @click="replace(item)">replace查看</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Message',
    data() {
        return {
            messageList:[
                {id:'001', title:'msg1'},
                {id:'002', title:'msg2'},
                {id:'003', title:'msg3'}
            ]
        }
    },methods: {
        pushShow(item){
            this.$router.push({
                name:'detailname',
                query:{
                    id:item.id,
                    title:item.title
                }
            })
        },
        replace(item){
            this.$router.replace({
                name:'detailname',
                query:{
                    id:item.id,
                    title:item.title
                }
            })
        }
    },
}
</script>

<style>

</style>