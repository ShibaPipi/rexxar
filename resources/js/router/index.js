import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'
import Login from '../pages/Login/Login'
import Index from '../pages/Index/Index'
import User from '../pages/User/User'
import UserRole from '../pages/User/UserRole';
import Role from '../pages/Role/Role'
import RolePermission from '../pages/Role/RolePermission'
import Permission from '../pages/Permission/Permission'
import Post from '../pages/Post/Post'
import Topic from '../pages/Topic/Topic'
import Notice from '../pages/Notice/Notice'
import Unauthorized from '../pages/Unauthorized/Unauthorized'
import NotFound from '../pages/NotFound/NotFound'

// 解决两次访问相同路由地址报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    children: [{
      path: '',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Index
    }, {
      path: '/users',
      name: 'users',
      component: User
    }, {
      path: '/users/:id/roles',
      name: 'users.roles',
      component: UserRole
    }, {
      path: '/roles',
      name: 'roles',
      component: Role
    }, {
      path: '/roles/:id/permissions',
      name: 'roles.permissions',
      component: RolePermission
    }, {
      path: '/permissions',
      name: 'permissions',
      component: Permission
    }, {
      path: '/posts',
      name: 'posts',
      component: Post
    }, {
      path: '/topics',
      name: 'topics',
      component: Topic
    }, {
      path: '/notices',
      name: 'notices',
      component: Notice
    }, {
      path: '/403',
      name: 'unauthorized',
      component: Unauthorized
    }]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '*',
    component: NotFound
  }],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
