import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  _defaultMapView: '',
  // _defaultView: '4444',   //测试用
  _defaultMapTreeVisible: false, //地图目录树显示
};
const getters = {
  _getDefaultMapView() {
    return state._defaultMapView;
  },
  _getDefaultMapTreeVisible() {
    return state._defaultMapTreeVisible;
  }
};
const mutations = {
  _setDefaultMapView(state, value) {
    state._defaultMapView = value;
  },
  _setDefaultMapTreeVisible(state, value) {
    state._defaultMapTreeVisible = value;
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations
});
export default store;
