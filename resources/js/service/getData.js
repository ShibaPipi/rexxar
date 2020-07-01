import fetch from '../config/fetch'

export const login = ({ name, password }) => fetch(
  'login',
  { name, password },
  'POST'
);
export const logout = () => fetch('logout');
export const getSideBarList = () => fetch('admin_users/permissions');
export const getAdminInfo = () => fetch('admin_users/info');
export const getAdminUsers = () => fetch('admin_users');
export const getAdminRoles = () => fetch('admin_roles');
export const getAdminPermissions = () => fetch('admin_permissions');
export const getPosts = () => fetch('posts');
export const getNotices = () => fetch('notices');
export const storeNotice = ({ title, content }) => fetch(
  'notices',
  { title, content },
  'POST'
);
export const getTopics = () => fetch('topics');
export const storeTopic = ({ name }) => fetch(
  'topics',
  { name },
  'POST'
);
export const deleteTopic = (id) => fetch(
  'topics/destroy',
  { id },
  'DELETE'
);
  // ?XDEBUG_SESSION_START=18130
