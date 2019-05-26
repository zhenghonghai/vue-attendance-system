<template>
  <el-form :label-position="labelPosition"
    label-width="80px"
    :model="form">
    <el-form-item label="旧密码">
      <el-input v-model="form.oldPassword"
        type="password"></el-input>
    </el-form-item>
    <el-form-item label="新密码">
      <el-input v-model="form.newPassword"
        type="text"></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="form.checkPassword"
        type="text"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
        @click="submitForm()">提交</el-button>
      <el-button @click="resetForm()">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import systemManage from '../api'
export default {
  data() {
    return {
      labelPosition: 'right',
      id: this.$store.getters.getAuth.id,
      form: {
        oldPassword: '',
        newPassword: '',
        checkPassword: ''
      }
    }
  },
  methods: {
    submitForm() {
      var params = {
        id: this.id,
        oldPassword: this.form.oldPassword,
        newPassword: this.form.newPassword,
        checkPassword: this.form.checkPassword
      }
      systemManage.changePassword(params).then(response => {
        if (response.status == 200) {
          alert(response.data)
        }
      })
    },
    resetForm() {
      this.form.oldPassword = ''
      this.form.newPassword = ''
      this.form.checkPassword = ''
    }
  }
}
</script>
<style>
</style>
