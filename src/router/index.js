import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/systemManage/login/Login'
import Register from '@/components/systemManage/login/Register'
import Home from '@/components/systemManage/home/index'
import PersonalInfo from '@/components/systemManage/personalInfo/personalInfo'
import ChangePassword from '@/components/systemManage/personalInfo/changepassword'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
          path: 'personalInfo',
          component: PersonalInfo,
          name: 'personalInfo',
          props: {
            // username: this.$route.params.username
          },
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'changePassword',
          name: 'changePassword',
          component: ChangePassword,
        }
      ]
    },
  ]
})
