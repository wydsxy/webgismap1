import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  _defaultView: '',
};
const getters = {
  _getDefaultView() {
    return state._defaultView;
  }
};
const Mutations = {
  _setDefaultView(state, value) {
    state._defaultView = value;
  }
};

const store = new Vuex.Store({
  state,
  getters,
  Mutations,
});
export default store;
