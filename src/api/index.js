import http from '../utils/request'

/**
 * 获取二维码图片地址
 * @returns Promise
 */
export function getQrCodeUrl () {
  return http.get('/api/tagList')
}
