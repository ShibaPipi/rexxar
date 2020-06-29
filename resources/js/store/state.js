let defaultIsLoggedIn = '';
let defaultName = '';

try {
  localStorage.isLoggedIn && (defaultIsLoggedIn = localStorage.isLoggedIn);
  localStorage.name && (defaultName = localStorage.name)
} catch (e) {
}

export default {
  name: defaultName,
  // 管理员信息
  adminInfo: null,
  // 是否登录
  isLoggedIn: defaultIsLoggedIn
}
