const state = () => ({
  lastId: ''
});

const SET_LAST_ID = 'SET_LAST_ID';

const mutations = {
  [SET_LAST_ID](state, id) {
    state.lastId = id
  }
};

export default {
  namespaced: true,
  state,
  mutations
}
