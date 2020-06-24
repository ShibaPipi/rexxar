let defaultToken = '';

try {
  if (localStorage.token) {
    defaultToken = localStorage.token
  }
} catch (e) {
}

export default {
  token: defaultToken
}
