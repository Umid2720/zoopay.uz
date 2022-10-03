import axios from "axios";

const adshome = {
  state: () => ({
    addList: [],
    uri: "https://zoopay.5f.uz",
  }),
  getters: {
    getAdsList(state) {
      return state.addList;
    },
  },
  mutations: {
    setAdsList(state, payload) {
      state.addList = payload;
    },
    pushAdsList(state, payload) {
      state.addList.push(payload);
    },
  },
  actions: {
    getNewAds(context) {
      axios.get(`${context.state.uri}/ads/getnext/0`).then(res => {
          console.log(res.data);
        context.commit('setAdsList', res.data)
      });
    },
  },
};

export default adshome