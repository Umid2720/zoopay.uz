<template>
  <div class="container">
    <div class="row">
      <div class="col-3" v-for="ads of adslist" :key="ads._id">
        <AdsItem :ads="ads" />
      </div>
    </div>
  </div>
</template>

<script>
import AdsItem from "./AdsItem.vue";
export default {
  computed: {
    adsList() {
      return this.$store.getters.getAdsList;
    },
  },
  components: { AdsItem },
};
</script>

<style></style>
