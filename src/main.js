// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import {
  store
} from './store/store'
import 'element-ui/lib/theme-chalk/index.css'; // 布局样式

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,

  components: {
    App
  },
  template: '<App/>'
})
