<template>
  <li>
    <label class="todoList_label">
      <input class="todoList_input" type="checkbox" value="true"
      @click="handleChange(todo.id)"
      v-model="todo.status"
      />
      <!-- @change.prevent="handleChange(todo.id)" -->
      <!-- v-model="todo.status" -->
      <span>{{ todo.content }}</span>
    </label>
    <a href="#" @click.prevent="handleRemove(todo.id)">
      <i class="fa fa-times" ></i>
    </a>
  </li>
</template>
<script setup>


defineProps({
  todo:{
    type: Object, required: true,
  },
})

// const token = document.cookie.replace(/(?:^|.*;\s*)vue3-todolist-token\s*=\s*([^;]*).*$/i, "$1");
// import { toggleTodos } from '@/utils/api';

const emit = defineEmits(['remove-todo', 'toggle-todo'])
const handleRemove = async (id)=>{
  emit('remove-todo', id)
}
//   try {
//     const res = await delTodos(id, token)
//     console.log(res.data)

//   } catch (error) {
//     alert(error.response.data.message)
//   }
// }



const handleChange = async(id)=>{
  // console.log('todoItem do change', id)
  emit('toggle-todo', id)
  // const res = await toggleTodos(id, token)
  // console.log(res.data)

}
</script>
