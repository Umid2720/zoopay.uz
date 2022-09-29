<template>
  <header-comp />
  <button class="danger">Test</button>
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
