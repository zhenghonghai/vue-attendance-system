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
import axios from 'axios'
import qs from 'qs'
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
  methods: {
    login() {
      var params = {
        username: this.form.username,
        password: this.form.password
      }
      systemManage.login(params).then(response => {
        console.log(response)
        console.log(response.data)
        let list = response.data
        list.forEach(item => {
          console.log(item)
          console.log(item.username)
        })
      })
    }
  }
}
</script>

<style>
/* html {
  height: 100%;
}
body {
  background: url('../../assets/images/bg.jpg') no-repeat center/cover;
}
.form {
  width: 500px;
  height: 600px;
  margin: 30px auto;
}
.form_register,
.form_login {
  width: 500px;
  background-color: rgba(0, 188, 212, 0.7);
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc;
  overflow: hidden;
  transition: height 1s;
}
.form_register {
  height: 548px;
}

.form form {
  padding: 25px 40px;
}
.form .form_item {
  display: flex;
  margin: 25px 0;
  vertical-align: middle;
}
.form input {
  outline: none;
  text-indent: 10px;
  flex: 1;
  width: auto;
  border: none;
  border-radius: 3px;
  height: 36px;
}
.form form label {
  width: 90px;
  float: left;
  line-height: 36px;
}
h1 {
  text-align: center;
  padding: 0;
  margin: 30px 0 30px 0;
}
.form form input[type='submit'] {
  background-color: rgba(244, 22, 7, 0.7);
  color: aliceblue;
  height: 45px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
}
.form .info {
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
}
.form .info span {
  color: crimson;
  margin-left: 3px;
}
.form .info span:hover {
  cursor: pointer;
  border-bottom: 1px solid crimson;
} */
</style>
