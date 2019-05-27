import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/systemManage/login/Login'
import Register from '@/components/systemManage/login/Register'
import Home from '@/components/systemManage/home/Home'
import PersonMessage from '@/components/systemManage/personmessage/PersonMessage'
import ChangePassword from '@/components/systemManage/personmessage/ChangePassword'
import CheckedIn from '@/components/systemManage/checkedIn/checkedIn'

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
      component: Home,
      children: [{
        path: 'personMessage',
        name: 'PersonMessage',
        component: PersonMessage
      }, {
        path: 'changePassword',
        name: 'ChangePassword',
        component: ChangePassword
      }, {
        path: 'checkedIn',
        name: 'CheckedIn',
        component: CheckedIn
      }]
    }
  ],
  mode: 'history'
})
