import axios from "axios";

const search = {
  state: () => ({
    results: [],
    uri: "http://zoopay.5f.uz",
  }),
  getters: {
    getResults(state) {
      return state.results;
    },
  },
  mutations: {
    setResults(state, payload) {
      state.results = payload;
    },
  },
  actions: {
    search(context, payload) {
      axios.get(`${context.state.uri}/ads/search/${payload}`).then((res) => {
        if (res.data !== "error") context.commit("setResults", res.data);
        else
        context.commit('setResults', []) 
      });
    },
    clear(context) {
      context.commit("setResults", []);
    },
  },
};

export default search;
