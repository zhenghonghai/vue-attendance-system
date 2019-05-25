import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/systemManage/login/Login'
import Register from '@/components/systemManage/login/Register'
import Home from '@/components/systemManage/home/Home'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
