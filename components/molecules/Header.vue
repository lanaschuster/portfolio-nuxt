<template>
  <header id="header" class="header">
    <nav class="nav container">
      <a href="#" class="nav__logo">Lana</a>

      <div ref="navMenu" class="nav__menu">
        <ul class="nav__list grid">
          <li class="nav__item">
            <NuxtLink to="#home" class="nav__link" @click="closeMenu">
              <i class="uil uil-estate nav__icon"></i> Home
            </NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="#about" class="nav__link" @click="closeMenu">
              <i class="uil uil-user nav__icon"></i> About
            </NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="#skills" class="nav__link" @click="closeMenu">
              <i class="uil uil-file-alt nav__icon"></i> Skills
            </NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="#services" class="nav__link" @click="closeMenu">
              <i class="uil uil-briefcase-alt nav__icon"></i> Services
            </NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="#portfolio" class="nav__link" @click="closeMenu">
              <i class="uil uil-scenery nav__icon"></i> Portfolio
            </NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="#contact" class="nav__link" @click="closeMenu">
              <i class="uil uil-message nav__icon"></i> Contact me
            </NuxtLink>
          </li>
        </ul>
        <i ref="navClose" class="uil uil-times nav__close" @click="closeMenu"></i>
      </div>
      <div class="nav__btns">
        <i id="theme-button" class="uil uil-moon change-theme" @click="changeTheme"></i>
        <div ref="navToggle" class="nav__toggle" @click="showMenu">
          <i class="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      toggle: true
    }
  },
  methods: {
    showMenu() {
      const navMenu = this.$refs.navMenu
      navMenu.classList.add('show-menu')

    },
    closeMenu() {
      const navMenu = this.$refs.navMenu
      navMenu.classList.remove('show-menu')
    },
    changeTheme() {
      // TODO
    }
  },
}
</script>
