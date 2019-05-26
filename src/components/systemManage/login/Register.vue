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
      var params = {
        username: this.form.username,
        password: this.form.password,
        email: this.form.email,
        tel: this.form.tel
      }
      systemManage.register(params).then(response => {
        if ((response.status = 200)) {
          alert(response.data)
          if (response.data == '注册成功') {
            this.$router.push({
              name: 'Login',
              params: {
                username: params.username,
                password: params.password
              }
            })
          }
        }
      })
    }
  }
}
</script>

<style>
</style>
