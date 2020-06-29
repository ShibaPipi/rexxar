/**
 * 配置编译环境和线上环境之间的切换
 *
 * BASE_URL_PREFIX: api 地址前缀
 * ROUTER_MODE: 路由模式
 * IMG_BASE_URL_PREFIX: 图片所在域名地址
 *
 */

let BASE_URL_PREFIX = '/api/v2/admin/';
let ROUTER_MODE = 'hash';
let IMG_BASE_URL_PREFIX = '';

export {
  BASE_URL_PREFIX,
  ROUTER_MODE,
  IMG_BASE_URL_PREFIX
}
