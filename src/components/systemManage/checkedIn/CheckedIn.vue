<template>
  <div>
    <el-button>签到</el-button>
    <el-calendar>
      <template slot="dateCell"
        slot-scope="{date, data}">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-').slice(2).join('-') }} {{ data.isSelected ? '✔️' : ''}}
        </p>
      </template>
    </el-calendar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // value: new Date()
    }
  },
  created() {
    console.log(new Date())
  }
}
</script>