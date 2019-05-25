/**
 * 系统管理接口
 * @type {{ login: ((params?)) }}
 */
// 引入拦截器
import Ajax from '@/utils/fetch'

const systemManage = {

  /**
   * 以后把所有方法放这里
   */

  // 登录功能
  login(obj) {
    let data = obj
    return Ajax({
      url: '/api/login',
      method: 'post',
      params: data
    })
  },
  // 注册
  register(obj) {
    let data = obj
    return Ajax({
      url: '/api/register',
      method: 'post',
      params: data
    })
  },
  // ----------
  // 个人信息模块
  loadDataPersonalInfo(obj) {
    let data = obj
    return Ajax({
      url: '/api/personalInfo',
      method: 'post',
      params: data
    })
  }
}

export default systemManage
