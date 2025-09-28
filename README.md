### 使用 .env 與 utils/api.js 接 API
- 安裝 axios
```
npm install axios
```

- .env 要放在 src/外面，因為使用 VITE開發，所以一定要VITE開頭

```
VITE_API_URL=https://todolist-api.hexschool.io
```

- 建立 api 變數，方便之後寫 API 的 CRUD
```
import axios from 'axios'
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})
```
- 之後的API就可以寫在 api.js，例如：註冊
```
export const register = async (email, password, nickname) => {
  return api.post('/users/sign_up',{
    email,
    password,
    nickname
  })
}
```
- 使用 註冊API
```
import { register } from '@/utils/api';
const handleRegister = async()=>{
  try {
    await register(email.value, password.value, nickname.value)
    alert('註冊成功')
    router.push('/login')
  } catch (error) {
    alert(error.response.data.message)
  }
}
```
- 儲存 token 到 cookie
```
document.cookie = `vue3-todolist-token=${token}; expire=${exp};`
```

- 取得 token
```
const token = document.cookie.replace(/(?:^|.*;\s*)vue3-todolist-token\s*=\s*([^;]*).*$/i, "$1");
```


