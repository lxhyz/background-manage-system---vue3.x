import {getRouter} from "@/api"

const state = {
  token:localStorage.getItem('token') || '',
  roles:[]
}

const mutations = {
  TOKEN(state,value){
    state.token = value
    localStorage.setItem('token',value)
  },
  GET_ROLES(state,val){
    state.roles = val
    localStorage.setItem('Menu',JSON.stringify(state.roles))
  }
}

const actions = {
  getToken({commit},value){
    commit.dispatch('TOKEN',value)
  },
  async getRoles({commit},value){
    await getRouter(value).then(res => {
      commit('GET_ROLES',res)
    })

  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}
