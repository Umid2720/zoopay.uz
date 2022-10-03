<template>
  <div class="home">
    <search-box />
    <category-list />
    <ads-list />
  </div>
</template>

<script>
import AdsList from "@/components/AdsList.vue";
import SearchBox from "@/components/SearchBox.vue";
import CategoryList from "@/components/CategoryList.vue";

export default {
  name: "HomeView",
  components: {
    CategoryList,
    SearchBox,
    AdsList
  },
  created (){
    this.$store.dispatch('getNewAds')
  }
};
</script>
