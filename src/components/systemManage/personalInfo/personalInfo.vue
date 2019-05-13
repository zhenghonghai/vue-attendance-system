<template>
  <el-form :label-position="labelPosition"
    label-width="80px"
    :model="formLabelAlign">
    <el-form-item label="名称">
      <el-input v-model="formLabelAlign.name"
        disabled=""></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-input v-model="formLabelAlign.region"
        disabled=""></el-input>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input v-model="formLabelAlign.type"
        disabled=""></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  }
}
</script>
<style>
</style>
