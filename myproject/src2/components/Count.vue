<template>
    <div>
        <h1>当前求和为{{sum}}</h1>
        <h4>当前求和*10为{{bigsum}}</h4>
        <h5>我在{{school}}学习{{subject}}</h5>
        <h3>下面组件的人数是 {{personList.length}}</h3>
        <select name="" id="" v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="add(n)">+</button>
        <button @click="dec(n)">-</button>
        <button @click="oddadd(n)">当前和为奇数再加</button>
        <button @click="waitadd(n)">等等再加</button>
    </div>
</template>

<script>
    import {
        mapActions,
        mapGetters,
        mapMutations,
        mapState
    } from 'vuex';
    export default {
        name: 'count',
        data() {
            return {
                n: 1,
            }
        },
        methods: {
            // add() {
            //     this.$store.commit('JIA', this.n)
            // },
            // dec() {
            //     this.$store.commit('JIAN', this.n)
            // },
            ...mapMutations('countAbout',{
                add: 'JIA',
                dec: 'JIAN'
            }),

            // oddadd() {
            //      this.$store.dispatch('oddjia', this.n)
            // },
            // waitadd() {
            //     this.$store.dispatch('waitjia', this.n)
            // }
            ...mapActions('countAbout',{
                oddadd: 'oddjia',
                waitadd: 'waitjia'
            })
        },
        computed: {
            // ...mapState({sum1:'sum',school:'school',subject:'subject'})
            ...mapState('countAbout',['sum','school','subject']),
            ...mapState('personAbout',['personList']),
            ...mapGetters('countAbout',['bigsum']),

        },

    }
</script>

<style>

</style>