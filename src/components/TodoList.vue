<template>
  <div class="todoList_list">
        <ul class="todoList_tab">
          <li><a href="#" @click.prevent="filterStatus='all'"
            :class="{active : filterStatus==='all'}" >全部</a></li>
          <li><a href="#" @click.prevent="filterStatus='incomplete'"
            :class="{active : filterStatus==='incomplete'}" >待完成</a></li>
          <li><a href="#" @click.prevent="filterStatus='completed'"
            :class="{active : filterStatus==='completed'}" >已完成</a></li>
        </ul>

        <div class="todoList_items">
          <ul class="todoList_item">
            <TodoItem v-for="todo in filterTodos" :key="todo.id"
            :todo="todo"
            @toggle-todo="emit('toggle-todo', $event)"
            @remove-todo="emit('remove-todo', $event)" />
            <!-- @change-todo="emit('change-todo', $event)" -->
          </ul>
          <div class="todoList_statistics">
            <p> {{ incompleteStatus.length }} 個已未完成項目</p>
          </div>
        </div>
      </div>
      <!-- <ul>
        <li v-for="item in filterTodos" :key="item.id">
          {{ item }}
        </li>
      </ul> -->

</template>
<script setup>
import { computed, ref } from 'vue';
import TodoItem from './TodoItem.vue';
const props = defineProps({
  todos:{
    type: Array, required: true,
  },
})

const emit = defineEmits(['remove-todo', 'toggle-todo' ])

const filterStatus = ref('all')

const filterTodos = computed(()=>{
  switch (filterStatus.value) {
    case 'incomplete':
      return props.todos.filter(x=>x.status === false)
    case 'completed':
      return props.todos.filter(x=>x.status === true)
    default:
      return props.todos
  }
})

const incompleteStatus = computed(()=> props.todos.filter(x=>!x.status))
</script>
