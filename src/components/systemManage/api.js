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
  queryPersonMessage(obj) {
    let data = obj
    return Ajax({
      url: '/api/home/personMessage',
      method: 'post',
      params: data
    })
  },
  // 修改密码
  changePassword(obj) {
    let data = obj
    return Ajax({
      url: '/api/home/changePassword',
      method: 'post',
      params: data
    })
  }
}

export default systemManage
