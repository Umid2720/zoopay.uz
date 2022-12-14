// import axios from "axios";
import search from "./modules/search";
import { createStore } from "vuex";
import category from "./modules/category";
import adshome from "./modules/adshome";

export default createStore({
  state: {
    uri: "http://zoopay.5f.uz",
  },
  getters: {
    getUri(state) {
      return state.uri;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    category,
    search,
    adshome
  },
});
