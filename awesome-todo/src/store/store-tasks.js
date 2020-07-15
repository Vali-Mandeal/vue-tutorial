import Vue from "vue";

const state = {
  tasks: {
    ID1: {
      name: "Go to shop",
      completed: false,
      dueDate: "2020/07/13",
      dueTime: "20:53"
    },
    ID2: {
      name: "Get banans",
      completed: false,
      dueDate: "2020/07/15",
      dueTime: "08:19"
    },
    ID3: {
      name: "Get apples",
      completed: false,
      dueDate: "2020/07/16",
      dueTime: "00:25"
    }
  }
};
// not async. Only mutate state instantly
const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  }
};
// async, good for data fetching
const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  }
};
// get data from the state -> use it in the components
const getters = {
  tasks: state => {
    return state.tasks;
  }
};

export default {
  namespaced: true, //allowes to have multiple stores
  state,
  mutations,
  actions,
  getters
};
