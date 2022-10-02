import axios from "axios";
const category = {
  state: () => ({
    category: [],
    uri: "http://zoopay.5f.uz",
  }),
  getters: {
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
};

export default category;
