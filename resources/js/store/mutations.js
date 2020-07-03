import { LOGOUT, RECORD_ADMIN, SET_ADMIN_INFO } from './mutation-types';
import { removeStore, setStore } from '../utils/localStorage';

export default {
  [RECORD_ADMIN](state, token) {
    console.log(2,token)

    state.isLoggedIn = true;
    setStore('token', token);
    setStore('isLoggedIn', true)
  },

  [LOGOUT](state) {
    state.isLoggedIn = false;
    removeStore('token');
    removeStore('isLoggedIn')
  },

  [SET_ADMIN_INFO](state, adminInfo) {
    state.adminInfo = adminInfo
  },

}
