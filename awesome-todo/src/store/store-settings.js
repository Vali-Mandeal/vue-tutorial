const state = {
  settings: {
    show12HourTimeFormat: false
  }
};
// not async. Only mutate state instantly
const mutations = {

};
// async, good for data fetching
const actions = {
 
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
