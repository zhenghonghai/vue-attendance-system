<template>
  <!--注册表单-->
  <div id="register"
    class="form">
    <h1>注册表单</h1>
    <div class="form_item">
      <label>用户名：</label>
      <input type="text"
        v-model="form.username"
        placeholder="请输入用户名"
        required />
    </div>
    <div class="form_item">
      <label>密码：</label>
      <input type="password"
        v-model="form.password"
        placeholder="请输入密码名"
        required />
    </div>
    <div class="form_item">
      <label>电子邮箱：</label>
      <input type="email"
        v-model="form.email"
        placeholder="请输入电子邮件"
        required />
    </div>
    <div class="form_item">
      <label>电话：</label>
      <input type="tel"
        v-model="form.tel"
        placeholder="请输入手机号码"
        required />
    </div>
    <div class="form_item">
      <button @click="register">注册</button>
    </div>
    <div class="info">已有账号？点击
      <router-link to='/'>登录</router-link>
    </div>
  </div>
</template>

<script>
import systemManage from '../api'
import axios from 'axios'
export default {
  name: 'register',
  data() {
    return {
      form: {
        username: '',
        password: '',
        email: '',
        tel: ''
      }
    }
  },
  methods: {
    register() {
      // axios
      //   .get('/user', {
      //     params: {
      //       ID: 12345
      //     }
      //   })
      //   .then(function(response) {
      //     console.log(response)
      //   })
      //   .catch(function(error) {
      //     console.log(error)
      //   })
      axios
        .post('api/register', {
          params: this.form
        })
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>

<style>
</style>
