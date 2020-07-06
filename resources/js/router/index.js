import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const login = r => require.ensure([], () => r(require('../pages/Login/Login')), 'login');
const home = r => require.ensure([], () => r(require('../components/Home/Home')), 'home');
const index = r => require.ensure([], () => r(require('../pages/Index/Index')), 'index');
const user = r => require.ensure([], () => r(require('../pages/User/User')), 'user');
const userRole = r => require.ensure([], () => r(require('../pages/User/UserRole')), 'userRole');
const role = r => require.ensure([], () => r(require('../pages/Role/Role')), 'role');
const rolePermission = r => require.ensure([], () => r(require('../pages/Role/RolePermission')), 'rolePermission');
const permission = r => require.ensure([], () => r(require('../pages/Permission/Permission')), 'permission');
const post = r => require.ensure([], () => r(require('../pages/Post/Post')), 'post');
const topic = r => require.ensure([], () => r(require('../pages/Topic/Topic')), 'topic');
const notice = r => require.ensure([], () => r(require('../pages/Notice/Notice')), 'notice');
const unauthorized = r => require.ensure([], () => r(require('../pages/Unauthorized/Unauthorized')), 'unauthorized');
const notFound = r => require.ensure([], () => r(require('../pages/NotFound/NotFound')), 'notFound');

// 解决两次访问相同路由地址报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router);

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
