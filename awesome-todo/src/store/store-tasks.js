const state = {
    tasks: [
        {
          id: 1,
          name: "Go to shop",
          completed: false,
          dueDate: "2020/07/13",
          dueTime: "20:53"
        },
        {
          id: 2,
          name: "Get banans",
          completed: false,
          dueDate: "2020/07/15",
          dueTime: "08:19"
        },
        {
          id: 3,
          name: "Get apples",
          completed: false,
          dueDate: "2020/07/16",
          dueTime: "00:25"
        }
      ]
}
// not async. Only mutate state instantly
const mutations = {

}
// async, good for data fetching
const actions = {

}
// get data from the state -> use it in the components
const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default{
    namespaced: true, //allowes to have multiple stores
    state,
    mutations,
    actions,
    getters
}