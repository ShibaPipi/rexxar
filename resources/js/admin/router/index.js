import Router from 'vue-router'

// 路由懒加载
const login = () => import('../pages/Login/Login');
const home = () => import('../components/Home/Home');
const index = () => import('../pages/Index/Index');
const user = () => import('../pages/User/User');
const userRole = () => import('../pages/User/UserRole');
const role = () => import('../pages/Role/Role');
const rolePermission = () => import('../pages/Role/RolePermission');
const permission = () => import('../pages/Permission/Permission');
const post = () => import('../pages/Post/Post');
const topic = () => import('../pages/Topic/Topic');
const notice = () => import('../pages/Notice/Notice');
const unauthorized = () => import('../pages/Unauthorized/Unauthorized');
const notFound = () => import('../pages/NotFound/NotFound');

// 解决两次访问相同路由地址报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/',
    component: home,
    children: [{
      path: '',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: index
    }, {
      path: '/users',
      name: 'users',
      component: user
    }, {
      path: '/users/:id/roles',
      name: 'users.roles',
      component: userRole
    }, {
      path: '/roles',
      name: 'roles',
      component: role
    }, {
      path: '/roles/:id/permissions',
      name: 'roles.permissions',
      component: rolePermission
    }, {
      path: '/permissions',
      name: 'permissions',
      component: permission
    }, {
      path: '/posts',
      name: 'posts',
      component: post
    }, {
      path: '/topics',
      name: 'topics',
      component: topic
    }, {
      path: '/notices',
      name: 'notices',
      component: notice
    }, {
      path: '/403',
      name: 'unauthorized',
      component: unauthorized
    }]
  }, {
    path: '*',
    component: notFound
  }],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
