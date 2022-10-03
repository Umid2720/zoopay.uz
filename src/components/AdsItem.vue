<template>
  <div class="ads__box">
    <div class="ads__img"></div>
    <div class="ads__info">
      <router-link to="/">{{ ads.title }}</router-link>
      <div class="ads__date">
        {{ ads.place }}
        {{ ads.createdAt }}
      </div>
      <div class="ads__bottom">
        <span class="ads__price">{{ ads.price }}</span>
        <button class="ads__fav"><i class="fa-regular fa-heart"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ads"],
};
</script>

<style></style>
