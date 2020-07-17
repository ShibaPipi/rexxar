/**
 * 配置编译环境和线上环境之间的切换
 *
 * ADMIN_BASE_URL_PREFIX: api 地址前缀
 * ROUTER_MODE: 路由模式
 * IMG_ADMIN_BASE_URL_PREFIX: 图片所在域名地址
 *
 */

let ADMIN_BASE_URL_PREFIX = '/api/v2/admin/';
let ROUTER_MODE = 'hash';
let IMG_ADMIN_BASE_URL_PREFIX = '';

export {
  ADMIN_BASE_URL_PREFIX,
  ROUTER_MODE,
  IMG_ADMIN_BASE_URL_PREFIX
}
