import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  count:0,
}

const actions={

}

const mutations={
  add(state){
    state.count++
  },
  sub(state){
    state.count--
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
