<template>
  <div class="search">
    <div class="container">
      <div class="search__form">
        <input
          type="text"
          v-model="title"
          @input="search()"
          class="search__input"
          placeholder="Поиск"
        />
        <button class="search__btn">
          <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
        <div class="search__result" v-show="results.length > 0">
          <router-link to="/" v-for="result of results" :key="result._id">{{
            result.title
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  computed: {
    results() {
      return this.$store.getters.getResults;
    },
  },
  methods: {
    search() {
      if (this.title.length > 0) this.$store.dispatch("search", this.title);
      else
        this.$store.dispatch('clear')
    },
  },
};
</script>

<style lang="scss">
@import "../styles/components/searchbox.scss";
</style>
