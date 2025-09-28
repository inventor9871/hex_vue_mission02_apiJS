import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

// 註冊
export const register = async (email, password, nickname) => {
  return api.post('/users/sign_up',{
    email,
    password,
    nickname
  })
}

// login
export const login = async (email, password) =>{
  return api.post('/users/sign_in', {
    email,
    password,
  })
}

// 取得代辦事項
export const getTodos = async(token)=>{
  return api.get('/todos', {
    headers:{
      Authorization: token,
    }
  } )
}

// 新增資料
export const addTodos = async(content, token)=>{
  return api.post('/todos/', {content} , {
    headers:{
      Authorization: token,
    }
  })
}

// 更改狀態
export const toggleTodos = async(id, token)=>{
  return api.patch(`/todos/${id}/toggle` ,{}, {
    headers:{
      Authorization: token
    },
  })
}

// 刪除資料
export const delTodos = async(id, token)=>{
  return api.delete(`/todos/${id}`, {
    headers:{
      Authorization: token
    }
  })
}
