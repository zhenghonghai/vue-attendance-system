<template>
  <el-form :label-position="labelPosition"
    label-width="80px"
    :model="form">
    <el-form-item label="账号">
      <el-input v-model="form.username"
        disabled="">{{ info.username }}</el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"
        type="password"
        disabled="">{{ info.password }}</el-input>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="form.email"
        disabled=""></el-input>
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="form.tel"
        disabled=""></el-input>
    </el-form-item>
    <button @click="saveInfo">
      按钮
    </button>
    <ul>
      <!-- <li v-for="info in info"
        :key="info.username"> -->
      <span>{{getInfo.username}} 123</span>
      <span>{{getInfo.password}}432</span>
      <!-- </li> -->
    </ul>
  </el-form>
</template>
<script>
import systemManage from '../api'

export default {
  // props: ['username1'],
  props: {
    username1: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      username: this.$route.params.username,
      password: this.$route.params.password,
      labelPosition: 'right',
      form: {
        username: '',
        password: '',
        email: '',
        tel: ''
      }
    }
  },
  methods: {
    saveInfo() {
      this.$store.commit('saveInfo')
    },

    loadData() {
      console.log(this.username1 + '111')
      console.log('你好啊')
      console.log(info)
      console.log(info.username)
      alert('你来了')
      var params = {
        username: this.username,
        password: this.password
      }
      // systemManage.loadDataPersonalInfo(params).then(response => {
      //   console.log(response.data)
      //   form = response.data
      // })
    }
  },
  computed: {
    info() {
      return this.$store.state.info
    },
    getInfo() {
      return this.$store.getters.getInfo
    }
  }
}
</script>
<style>
</style>
