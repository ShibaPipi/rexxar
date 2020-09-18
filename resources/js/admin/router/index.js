import Router from 'vue-router'

// 路由懒加载
const login = () => import('../pages/Login/Login');
const home = () => import('../components/Home/Home');
const index = () => import('../pages/Index/Index');
const adminUser = () => import('../pages/AdminUser/AdminUser');
const adminUserRole = () => import('../pages/AdminUser/AdminUserRole');
const adminRole = () => import('../pages/AdminRole/AdminRole');
const adminRolePermission = () => import('../pages/AdminRole/AdminRolePermission');
const adminPermission = () => import('../pages/AdminPermission/AdminPermission');
const user = () => import('../pages/User/User');
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
      path: '/admin_users',
      name: 'admin_users',
      component: adminUser
    }, {
      path: '/admin_users/:id/admin_roles',
      name: 'admin_users.admin_roles',
      component: adminUserRole
    }, {
      path: '/admin_roles',
      name: 'admin_roles',
      component: adminRole
    }, {
      path: '/admin_roles/:id/admin_role_permissions',
      name: 'admin_roles.admin_role_permissions',
      component: adminRolePermission
    }, {
      path: '/admin_permissions',
      name: 'admin_permissions',
      component: adminPermission
    }, {
      path: '/users',
      name: 'users',
      component: user
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
