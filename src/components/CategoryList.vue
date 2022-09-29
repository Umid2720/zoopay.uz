<template>
  <div class="category">
    <div class="container">
      <ul class="category__list">
        <li v-for="(cat, index) of category" :key="cat._id">
          <router-link :to="`/category/${cat._id}`">
            <span
              class="category__box"
              :style="{ backgroundColor: colors[index] }"
            >
              <img :src="`${this.uri}/${cat.img}`" :alt="cat.name" />
            </span>
            <span class="category__title">
              {{ cat.name }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "#dce0d9",
        "#ffae03",
        "#06bee1",
        "#b4e1ff",
        "#41337a",
        "#e8998d",
        "#a1683a",
        "#6c9a8b",
        "#6f73d2",
        "#d84727",
        "#3454d1",
        "#e39774",
        "#5c9ead",
        "#e67f0d",
        "#a3c9a8",
        "#50808e",
      ],
    };
  },
  computed: {
    uri() {
      return this.$store.getters.getUri;
    },
    category() {
      return this.$store.getters.getCategories;
    },
  },
  created() {
    this.$store.dispatch("allCategory");
  },
};
</script>

<style lang="scss">
@import "../styles/components/categorylist.scss";
</style>
