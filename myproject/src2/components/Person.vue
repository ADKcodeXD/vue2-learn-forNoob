<template>
    <div>
        <h1>人员列表</h1>
        <h4>上方组件的求和为{{sum}}</h4>
        <h5>第一个人是{{firstPersonName}}</h5>
        <input type="text" placeholder="请添加人员" v-model="name">
        <button @click="addPerson">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id" >{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {nanoid} from 'nanoid';
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            ...mapState('personAbout',['personList']),
            ...mapState('countAbout',['sum']),
            firstPersonName(){
                return this.$store.getters['personAbout/firstPersonName']
            }
        },methods: {
            addPerson(){
                const person={id:nanoid(),name:this.name}
                this.$store.commit('personAbout/ADD_PERSON',person);
                this.name=''
            }
        },
    }
</script>

<style>

</style>