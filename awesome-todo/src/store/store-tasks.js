import Vue from "vue";
import { uid } from "quasar";

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
  },
  search: ""
};
// not async. Only mutate state instantly
const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task);
  },
  setSearch(state, value) {
    state.search = value;
  }
};
// async, good for data fetching
const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
  addTask({ commit }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    };
    commit("addTask", payload);
  },
  setSearch({commit}, value) {
    commit('setSearch', value)
  }
};
// get data from the state -> use it in the components
const getters = {
  tasksTodo: state => {
    let tasks = {};
    Object.keys(state.tasks).forEach(key => {
      let task = state.tasks[key];
      if (!task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },

  tasksCompleted: state => {
    let tasks = {};
    Object.keys(state.tasks).forEach(key => {
      let task = state.tasks[key];
      if (task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  }
};

export default {
  namespaced: true, //allowes to have multiple stores
  state,
  mutations,
  actions,
  getters
};
