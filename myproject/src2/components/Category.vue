<template>
  <div class="sb">
        <h3>这是{{title}}词条</h3>
        <slot :games="games">
            
        </slot>
    </div>
</template>

<script>
export default {
    name:'category',
    props:['title'],
    data() {
        return {
            games: ['功夫熊猫', '长津湖', '肖申克', '阿甘正传']
        }
    },
}
</script>

<style>

</style>