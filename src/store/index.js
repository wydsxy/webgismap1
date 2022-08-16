import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  _defaultMapView: '',
  // _defaultView: '4444',   //测试用
};
const getters = {
  _getDefaultView() {
    return state._defaultMapView;
  }
};
const Mutations = {
  _setDefaultView(state, value) {
    state._defaultMapView = value;
  }
};

const store = new Vuex.Store({
  state,
  getters,
  Mutations
});
export default store;
