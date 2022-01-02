<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addtodo="addtodo"/>
        <List :todo="todo" :cheackTodo="cheackTodo" :deleteItem="deleteItem" />
        <MyFooter :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import List from './components/List.vue';
export default {
  name: 'App',
  components: {
      MyHeader,
      MyFooter,
      List
  },methods: {
    addtodo(todoobj){
      this.todo.unshift(todoobj)
    },
    cheackTodo(id){
      this.todo.forEach(element => {
          if(element.id ===id) element.done=!element.done
      });
    },
    deleteItem(id){
      this.todo=this.todo.fliter((todoobj)=>{
        return todoobj.id !==id 
      })
    }
  },data() {
    return{
        todo:JSON.parse(localStorage.getItem('todo')) || []
      }
  },
  watch:{
    todo:{
      deep:true,
      handler(value){
        localStorage.setItem('todo',JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #1ee91e;
  border: 1px solid #1df11d;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}






</style>
