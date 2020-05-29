import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import User from '../pages/User/User'
import Role from '../pages/Role/Role'
import Permission from '../pages/Permission/Permission'
import Post from '../pages/Post/Post'
import Topic from '../pages/Topic/Topic'
import Notice from '../pages/Notice/Notice'

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/users',
    name: 'User',
    component: User
  },{
    path: '/roles',
    name: 'Role',
    component: Role
  },{
    path: '/permissions',
    name: 'Permission',
    component: Permission
  },{
    path: '/posts',
    name: 'Post',
    component: Post
  },{
    path: '/topics',
    name: 'Topic',
    component: Topic
  },{
    path: '/notices',
    name: 'Notice',
    component: Notice
  }],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
