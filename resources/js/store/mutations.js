export default {
  setToken(state, token) {
    state.token = token;

    try {
      localStorage.token = token
    } catch (e) {
    }
  },
  unsetToken(state) {
    state.token = '';

    try {
      localStorage.token = ''
    } catch (e) {
    }
  }
}
