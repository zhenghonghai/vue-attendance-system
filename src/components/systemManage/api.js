/**
 * 系统管理接口
 * @type {{ login: ((params?)) }}
 */
// 引入拦截器
import Ajax from '@/utils/fetch'
import Qs from 'qs'

const systemManage = {
  // 登录功能
  login(obj) {
    let data = obj
    return Ajax({
      url: '/api/login',
      method: 'post',
      params: data
    })
  },
  // 以后把所有方法放这里
}

export default systemManage
