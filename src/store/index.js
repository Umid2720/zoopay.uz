import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    uri: "http://zoopay.5f.uz",
    category: [],
  },
  getters: {
    getUri(state) {
      return state.uri;
    },
    getCategories(state) {
      return state.category;
    },
  },
  mutations: {
    allCategory(state, payload) {
      state.category = payload;
    },
  },
  actions: {
    allCategory(context) {
      axios.get(`${context.state.uri}/category/catall`).then((res) => {
        if (res.status == 200) context.commit("allCategory", res.data);
      });
    },
  },
  modules: {},
});
