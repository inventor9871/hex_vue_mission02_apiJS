<template>
<div id="loginPage" class="bg-yellow" >
  <div class="conatiner loginPage vhContainer ">
    <div class="side">
      <a href="#"><img class="logoImg" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png" alt=""></a>
      <img class="d-m-n" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png" alt="workImg">
    </div>
    <div>
      <form class="formControls" action="index.html">
        <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
        <label class="formControls_label" for="email">Email</label>
        <input class="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email" required
        v-model="email">
        <span>此欄位不可留空</span>
        <label class="formControls_label" for="pwd">密碼</label>
        <input class="formControls_input" type="password" name="pwd" id="pwd" placeholder="請輸入密碼" required
        v-model="password">
        <input class="formControls_btnSubmit" type="button"  value="登入"
        @click="handleSignin">
        <!-- <a class="formControls_btnLink" href="#signUpPage">註冊帳號</a> -->
        <router-link to="/register" class="formControls_btnLink">註冊帳號</router-link>
      </form>
    </div>
  </div>
</div>
</template>

<script setup>
import { login } from '@/utils/api';
import { provide, ref } from 'vue';
import { useRouter } from 'vue-router';


const email = ref('asd@asd.com')
const password = ref('asdasd')
const router = useRouter()


const handleSignin = async() =>{
  try {
    const response = await login(email.value, password.value)
    // console.log(response.data)
    const { token, exp } = response.data

    // 儲存 token
    document.cookie = `vue3-todolist-token=${token}; expires=${exp}`
    alert('登入成功')
    router.push('/todolist');
  } catch (error) {
    alert(error.response.data.message)
  }
}

</script>
