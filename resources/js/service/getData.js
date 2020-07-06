import fetch from '../utils/fetch'

export const login = ({ name, password }) => fetch(
  'login',
  'POST',
  { name, password }
);
export const logout = () => fetch('logout');
export const getSideBarList = () => fetch('admin_users/permissions');
export const getAdminInfo = () => fetch('admin_users/info');
export const getAdminUsers = () => fetch('admin_users');
export const storeAdminUser = ({ name, password }) => fetch(
  'admin_users',
  'POST',
  { name, password }
);
export const getAdminUserRoles = (id) => fetch(
  'admin_users/' + id + '/admin_roles'
);
export const storeAdminUserRoles = (id, { adminUserRoleList }) => fetch(
  'admin_users/' + id + '/admin_roles',
  'POST',
  { adminUserRoleList }
);
export const getAdminRoles = () => fetch('admin_roles');
export const storeAdminRole = ({ name, description }) => fetch(
  'admin_roles',
  'POST',
  { name, description }
);
export const getAdminRolePermissions = (id) => fetch(
  'admin_roles/' + id + '/admin_permissions'
);
export const storeAdminRolePermissions = (id, { adminRolePermissionList }) => fetch(
  'admin_roles/' + id + '/admin_permissions',
  'POST',
  { adminRolePermissionList }
);
export const getAdminPermissions = () => fetch('admin_permissions');
export const storeAdminPermission = ({ name, description }) => fetch(
  'admin_permissions',
  'POST',
  { name, description }
);
export const getPosts = () => fetch('posts');
export const togglePostStatus = (id, status) => fetch(
  'posts/' + id,
  'PUT',
  { status }
);
export const getNotices = () => fetch('notices');
export const storeNotice = ({ title, content }) => fetch(
  'notices',
  'POST',
  { title, content }
);
export const getTopics = () => fetch('topics');
export const storeTopic = ({ name }) => fetch(
  'topics',
  'POST',
  { name }
);
export const deleteTopic = (id) => fetch(
  'topics/' + id,
  'DELETE'
);
