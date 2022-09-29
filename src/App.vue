<template>
  <header-comp />
  <router-view />
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
export default {
  components: {
    HeaderComp,
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
@import "./styles/grid.scss";
</style>
