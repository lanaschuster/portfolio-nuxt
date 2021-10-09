<template>
  <header id="header" class="header">
    <nav class="nav container">
      <a href="#" class="nav__logo">Lana</a>

      <div ref="navMenu" class="nav__menu">
        <ul class="nav__list grid">
          <li class="nav__item">
            <a href="#home" class="nav__link" @click="closeMenu">
              <i class="uil uil-estate nav__icon"></i> Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link" @click="closeMenu">
              <i class="uil uil-user nav__icon"></i> About
            </a>
          </li>
          <li class="nav__item">
            <a href="#skills" class="nav__link" @click="closeMenu">
              <i class="uil uil-file-alt nav__icon"></i> Skills
            </a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link" @click="closeMenu">
              <i class="uil uil-briefcase-alt nav__icon"></i> Services
            </a>
          </li>
          <li class="nav__item">
            <a href="#portfolio" class="nav__link" @click="closeMenu">
              <i class="uil uil-scenery nav__icon"></i> Portfolio
            </a>
          </li>
          <li class="nav__item">
            <a href="#contactme" class="nav__link" @click="closeMenu">
              <i class="uil uil-message nav__icon"></i> Contact me
            </a>
          </li>
        </ul>
        <i ref="navClose" class="uil uil-times nav__close" @click="closeMenu"></i>
      </div>
      <div class="nav__btns">
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
    }
  },
}
</script>
