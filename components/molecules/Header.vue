<template>
  <header id="header" class="header">
    <nav class="nav container">
      <a href="#" class="nav__logo">{{ title }}</a>

      <div ref="navMenu" class="nav__menu">
        <ul class="nav__list grid">
          <NavItem
            v-for="(menu, i) in menus"
            :key="`menu_${i}`"
            :to="menu.to"
            :text="menu.text"
            :icon-class="menu.iconClass"
            @click="closeMenu"
          />
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
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      menus: [
        {
          to: '#home',
          text: 'Home',
          iconClass: 'uil-estate'
        },
        {
          to: '#about',
          text: 'Sobre',
          iconClass: 'uil-user'
        },
        {
          to: '#skills',
          text: 'Competências',
          iconClass: 'uil-file-alt'
        },{
          to: '#services',
          text: 'Serviços',
          iconClass: 'uil-briefcase-alt'
        },
        {
          to: '#portfolio',
          text: 'Portfólio',
          iconClass: 'uil-scenery'
        },
        {
          to: '#contact',
          text: 'Contato',
          iconClass: 'uil-message'
        }
      ]
    }
  },
  mounted() {
    const theme = localStorage.getItem('theme')
    const icon = localStorage.getItem('icon')
    const themeButton = document.getElementById('theme-button')

    const darkTheme = 'dark-theme'
    const iconTheme = 'uil-sun'

    if (theme) {
      document.body.classList[theme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[icon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
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
      const darkTheme = 'dark-theme'
      const iconTheme = 'uil-sun'
      const themeButton = document.getElementById('theme-button')

      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      localStorage.setItem('theme', this.getCurrentTheme())
      localStorage.setItem('icon', this.getCurrentIcon())
    },
    getCurrentTheme() {
      const darkTheme = 'dark-theme'
      return document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    },
    getCurrentIcon() {
      const iconTheme = 'uil-sun'
      return document.body.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon'
    }
  }
}
</script>
