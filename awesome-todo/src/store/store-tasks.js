const state = {

}
// not async. Only mutate state instantly
const mutations = {

}
// async, good for data fetching
const actions = {

}
// get data from the state -> use it in the components
const getters = {

}

export default{
    namespaced: true, //allowes to have multiple stores
    state,
    mutations,
    actions,
    getters
}