const state = {
  settings: {
    show12HourTimeFormat: false
  }
};
// not async. Only mutate state instantly
const mutations = {
  setShow12HourTimeFormat(state, value) {
    state.settings.show12HourTimeFormat = value;
  }
};
// async, good for data fetching
const actions = {
  setShow12HourTimeFormat({ commit }, value) {
    commit('setShow12HourTimeFormat', value)
  }
};
// get data from the state -> use it in the components
const getters = {
  settings: state => {
    return state.settings
  }
};

export default {
  namespaced: true, //allowes to have multiple stores
  state,
  mutations,
  actions,
  getters
};
