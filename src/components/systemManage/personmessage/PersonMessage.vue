<template>
  <el-form :label-position="labelPosition"
    label-width="80px"
    :model="form">
    <el-form-item label="账号">
      <el-input v-model="form.username"
        disabled=""></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"
        type="password"
        disabled=""></el-input>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="form.email"
        disabled=""></el-input>
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="form.tel"
        disabled=""></el-input>
    </el-form-item>
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
      id: this.$store.getters.getAuth.id,
      labelPosition: 'right',
      form: {
        username: '',
        password: '',
        email: '',
        tel: ''
      }
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      var params = {
        id: this.id
      }
      systemManage.queryPersonMessage(params).then(response => {
        this.form.username = response.data.username
        this.form.password = response.data.password
        this.form.email = response.data.email
        this.form.tel = response.data.tel
      })
    }
  },
  beforeMount() {
    this.loadData
  },
  computed: {
    // info() {
    //   return this.$store.state.info
    // },
    // getInfo() {
    //   return this.$store.getters.getInfo
    // }
  }
}
</script>
<style>
</style>
