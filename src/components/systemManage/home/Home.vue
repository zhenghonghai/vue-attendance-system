<template>
  <div id="home">
    <el-container>
      <el-header>考勤系统</el-header>
      <el-container>
        <el-aside class="el-aside">
          <el-menu>
            <el-submenu index="1">
              <span slot="title">个人信息</span>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <router-link :to="{name:'PersonMessage'}"
                    class="a">查看个人信息</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link :to="{name:'ChangePassword'}"
                    class="a">修改密码</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <span slot="title">签到管理</span>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <router-link :to="{name:'CheckedIn'}"
                    class="a">签到</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">请假信息</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">课程表</span>
            </el-menu-item>
            <el-submenu index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">导航五</span>
              <el-menu-item-group>
                <el-menu-item index="5-1">选项1</el-menu-item>
                <el-submenu index="5-2">
                  <span slot="title">选项2</span>
                  <el-menu-item-group>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- <el-main>232323</el-main> -->
        <el-main class="el-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// import PersonalInfo from '@/components/systemManage/personalInfo/personalInfo'
export default {
  name: 'home',
  data() {
    return {
      username: this.$store.getters.getAuth.username,
      password: this.$store.getters.getAuth.password,
      isCollapse: false,
      authList: []
    }
  },
  // created() {
  //   console.log(this.username)
  //   console.log(this.password)
  // },
  methods: {}
}
</script>

<style>
.a {
  text-decoration: none;
  color: #000;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  line-height: 200px;
  height: 750px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  height: 750px;
}
</style>

