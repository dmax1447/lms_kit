import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    fetchGoods(ctx) {
      return axios.get('https://dummyjson.com/products').then(({data, headers}) => {
        return data.products
      })
    }
  },
  modules: {
  }
})
