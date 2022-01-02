<template>
    <div class="todo-footer">
        <label>
          <input type="checkbox" :checked="isAll" @click="checkall"/>
        </label>
        <span>
          <span>已完成{{donetotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todo'],
    computed:{
        total(){
            return this.todo.length;
        },
        donetotal(){
            const a=this.todo.reduce((pre,current)=> pre + (current.done ?1:0) ,0)
            return a;
        },
        isAll(){
            return this.donetotal === this.total && this.total >0
        }
    },methods: {
        checkall(){
            
        }
    },
}
</script>

<style>
    /*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>