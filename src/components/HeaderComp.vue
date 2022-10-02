<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <ul class="header__menu">
          <li><router-link to="/">О Нас</router-link></li>
          <li><router-link to="/">Сотрудничество</router-link></li>
          <li><router-link to="/">Контакт</router-link></li>
        </ul>

        <ul class="header__socials">
          <li>
            <a href="#" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i class="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
        <a href="tel:998712004446" class="header__phone">+998 71 200 44 46</a>
      </div>
    </div>

    <div class="header__bottom">
      <div class="container">
        <router-link to="/" class="header__logo">
          <img src="@/assets/logo.png" alt="logo.png" /> zoopay.uz
        </router-link>
        <button class="header__catbtn">
          <span></span>
          Категории
        </button>
        <div class="header__links">
          <router-link to="/" class="header__link">
            <i class="fa-regular fa-message"></i>
          </router-link>
          <router-link to="/" class="header__link">
            <i class="fa-regular fa-heart"></i>
          </router-link>
          <router-link to="/" class="header__link">
            <i class="fa-regular fa-user"></i>
          </router-link>
        </div>
        <router-link to='/' class="header__add">Добавить обявление</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../styles/components/header.scss";
</style>
