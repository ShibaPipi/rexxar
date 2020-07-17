import Router from 'vue-router'

// 路由懒加载
const zyz = () => import('../pages/ZYZ/ZYZ');
const notFound = () => import('../pages/NotFound/NotFound');

// 解决两次访问相同路由地址报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

export default new Router({
  routes: [{
    path: '/zyz',
    name: 'zyz',
    component: zyz
  }, {
    path: '*',
    component: notFound
  }]
})
