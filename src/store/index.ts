/*
 * @Description: 
 * @version: 
 * @Author: xiaowen
 * @Date: 2022-06-09 15:42:52
 */
import { createStore } from 'vuex'

const defaultState = {
    count: 0
  }

export default createStore({
    state() {
      return defaultState
    },
    mutations: {
      increment(state: typeof defaultState) {
        state.count++
      }
    },
    actions: {
      increment(context) {
        context.commit('increment')
      }
    },
    getters: {
      double(state: typeof defaultState) {
        return 2 * state.count
      }
    }
  })