<script setup lang="ts">
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';
import { getTodos, addTodos, delTodos, toggleTodos } from '@/utils/api';

import {   onMounted,  ref } from 'vue';

const todos = ref([])
// const todos = ref([
//   { id:1, content: "把冰箱發霉的檸檬拿去丟", status: false },
//   { id:2, content: "打電話叫媽媽匯款給我", status: true },
// ])

const token = document.cookie.replace(/(?:^|.*;\s*)vue3-todolist-token\s*=\s*([^;]*).*$/i, "$1");
// provide('token', token);

const handleGettodos = async() =>{
  try {
    const res = await getTodos(token)
    todos.value = res.data.data
  } catch (error) {
    alert(error.response.data.message)
  }
}

onMounted( ()=>{
  handleGettodos();
  }
)

const addTodo = async (content)=>{
  if(content.trim() !==''){
    await addTodos(content, token)
    handleGettodos();
  }
}

const removeTodo = async (id)=>{
    const res = await delTodos(id, token)
    console.log('view = ',res.data)
  todos.value = todos.value.filter(x=> x.id !== id)
}

const changeTodo = async (id)=>{
  try {
    const res = await toggleTodos(id, token);
    // console.log(res.data)
    handleGettodos();
  } catch (error) {
    alert(error.response.data.message)
  }
}

</script>

<template>
<div id="todoListPage" class="bg-half" >
  <nav>
    <h1><a href="#">ONLINE TODO LIST</a></h1>

    <ul>
      <li class="todo_sm"><a href="#"><span>王小明的代辦</span></a></li>
      <li>
        <router-link to="/login">登出</router-link>
        <!-- <a href="#/login"></a> -->
      </li>
    </ul>
  </nav>
  <div class="conatiner todoListPage vhContainer">
    <div class="todoList_Content">
      <TodoForm @add-todo="addTodo" />
      <TodoList v-if="todos.length" :todos="todos"
        @toggle-todo="changeTodo"
        @remove-todo="removeTodo"/>
        <!-- @remove-todo="removeTodo" -->
        <!-- @change-todo="changeTodo" -->

      <p v-else>尚無代辦事項</p>
    </div>
  </div>
   <!-- <ul>
      <li v-for="item in todos" :key="item.id">
        {{ item }}
      </li>
    </ul> -->
</div>

</template>

