let defaultToken = '';
let defaultName = '';

try {
  localStorage.token && (defaultToken = localStorage.token);
  localStorage.name && (defaultName = localStorage.name)
} catch (e) {
}

export default {
  token: defaultToken,
  name: defaultName
}
