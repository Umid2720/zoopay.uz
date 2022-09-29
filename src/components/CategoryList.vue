<template>
  <div class="category">
    <div class="container">
      <ul class="category__list">
        <li v-for="cat of category" :key="cat._id">
          <router-link :to="`/category/${cat._id}`">
            <img :src="`${this.uri}/${cat.img}`" alt="" />
            {{ cat.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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

<style></style>
