<template>
  <div class="home">
    <search-box />
    <category-list />
  </div>
</template>

<script>
import CategoryList from "@/components/CategoryList.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "HomeView",
  components: {
    CategoryList,
    SearchBox,
  },
};
</script>
