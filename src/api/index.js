import request from '@/utils/request'
export function login(data) {
    return request({
      url: '/admin/api/login',
      method: 'post',
      data
    })
}