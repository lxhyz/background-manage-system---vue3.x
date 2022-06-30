import { createStore } from 'vuex'
import getters from "./getters"
import user from "./moudles/user"

export default createStore({
  getters,
  modules:{
    user
  }
})
