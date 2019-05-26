<template>
  <!-- 登录表单 -->
  <div id="login"
    class="form">
    <h1>登录表单</h1>
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
      <button @click="login">登录
      </button>
    </div>
    <div class="info">没有账号？
      <router-link to='register'>点击注册账号</router-link>
    </div>
  </div>

</template>

<script>
import systemManage from '../api'
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  created() {
    this.form.username = this.$route.params.username
    this.form.password = this.$route.params.password
  },
  methods: {
    login() {
      var params = {
        username: this.form.username,
        password: this.form.password
      }
      systemManage.login(params).then(response => {
        if (response.data) {
          this.$store.dispatch('saveAuth', response.data)
          this.$router.push('/home')
        } else {
          alert('账号或密码错误')
        }
      })
    }
  }
}
</script>

<style>
</style>
