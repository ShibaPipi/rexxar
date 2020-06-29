import fetch from '../config/fetch'
import { getStore } from '../config/utils'

export const login = (name, password) => fetch('login', {
  name,
  password
}, 'POST');

export const logout = () => fetch('logout');
export const getAdminInfo = () => fetch('admin_users/info');
export const getAdminUsers = () => fetch('admin_users');
export const getAdminRoles = () => fetch('admin_roles');
export const getAdminPermissions = () => fetch('admin_permissions');
export const getPosts = () => fetch('posts');
export const getTopics = () => fetch('topics');
export const getNotices = () => fetch('notices');
