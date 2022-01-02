<template>
    <li>
          <label>
            <input type="checkbox" :checked="todoitem.done" @change="handleitem(todoitem.id)"/>
            <span v-show="!todoitem.isEdit">{{todoitem.title}}</span>
            <input type="text" :value="todoitem.title" v-show="todoitem.isEdit" @blur="handleblur(todoitem)">
          </label>
          <button class="btn btn-danger" @click="deleteItemProp(todoitem.id)">删除</button>
          <button class="btn btn-edit" @click="handledit(todoitem)">编辑</button>

    </li>
</template>

<script>
export default {
    name:'Item',
    props:['todoitem','cheackTodo','deleteItem'],
    methods: {
        handleitem(id){
            this.cheackTodo(id);
        },
        deleteItemProp(id){
            if(confirm('确定删除？') ){
                this.deleteItem(id);
            }
        },
        handledit(todo){
            this.$set(todo,'isEdit',true)
        },
        handleblur(todo){
          todo.isEdit=false;
        }
    },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
    background-color: gray;
}
li:hover button{
    display: block;
}
</style>