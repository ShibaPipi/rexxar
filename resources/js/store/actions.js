import { getAdminInfo } from '../service/getData';
import { SET_ADMIN_INFO } from './mutation-types';

export default {
  async GET_ADMIN_INFO({ commit }) {
    commit(SET_ADMIN_INFO, await getAdminInfo())
  },

}
