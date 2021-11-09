<template>
  <div>
    <style>
      :root {
        --hue-color: {{ tema.hueCor }};
      }
    </style>
    <Header :title="tema.tituloHeader" />
    <Main />
    <Footer />
    <a id="scroll-up" href="#home" class="scrollup">
      <i class="uil uil-angle-double-up scrollup__icon"></i>
    </a>
  </div>
</template>

<script>
import gql from 'graphql-tag'

import Header from '@/components/molecules/Header.vue'
import Footer from '@/components/molecules/Footer.vue'
import Main from '@/components/organisms/Main.vue'

export default {
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      lScrollHeader: null,
      lScrollTop: null,
      tema: {}
    }
  },
  apollo: {
    tema: {
      query: gql`
        query {
          tema {
            id,
            tituloHeader,
            hueCor
          }
        }
      `,
    },
  },
  mounted() {
    if (!this.lScrollHeader) {
      this.lScrollHeader = window.addEventListener('scroll', this.scrollHeader)
    }
    if (!this.lScrollTop) {
      this.lScrollTop = window.addEventListener('scroll', this.scrollTop)
    }
  },
  beforeDestroy() {
    if (this.lScrollHeader) {
      window.removeEventListener('scroll', this.scrollHeader)
      this.lScrollHeader = null
    }
    if (this.lScrollTop) {
      window.removeEventListener('scroll', this.scrollTop)
      this.lScrollTop = null
    }
  },
  methods: {
    scrollHeader() {
      const nav = document.getElementById('header')
      if (window.scrollY >= 80)
        nav.classList.add('scroll-header')
      else
        nav.classList.remove('scroll-header')
    },
    scrollTop() {
      const scroll = document.getElementById('scroll-up')
      if (window.scrollY >= 560)
        scroll.classList.add('show-scroll')
      else
        scroll.classList.remove('show-scroll')
    }
  }
}
</script>
<style>
:root {
  --header-height: 3rem;

  /* Colors */
  --first-color: hsl(var(--hue-color), 69%, 61%);
  --first-color-second: hsl(var(--hue-color), 69%, 61%);
  --first-color-alt: hsl(var(--hue-color), 57%, 53%);
  --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
  --title-color: hsl(var(--hue-color), 8%, 15%);
  --text-color: hsl(var(--hue-color), 8%, 45%);
  --text-color-light: hsl(var(--hue-color), 8%, 65%);
  --input-color: hsl(var(--hue-color), 70%, 96%);
  --body-color: hsl(var(--hue-color), 60%, 99%);
  --container-color: #FFF;
  --scroll-bar-color: hsl(var(--hue-color), 12%, 90%);
  --scroll-thumb-color: hsl(var(--hue-color), 12%, 80%);

  /* Fonts */
  --body-font: 'Poppins', sans-serif;

  /* 
    Font size
    ex.: .5rem = 8px; 1rem = 16px; 1.5rem = 24px
  */
  --big-font-size: 2rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1.125rem;
  --normal-font-size: .938rem;
  --small-font-size: .813rem;
  --smaller-font-size: .75rem;

  /* Font weight */
  --font-medium: 500;
  --font-semi-bold: 600;

  --mb-0-25: .25rem;
  --mb-0-5: .5rem;
  --mb-0-75: .75rem;
  --mb-1: 1rem;
  --mb-1-5: 1rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;
  --mb-3: 3rem;

  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;

  @media screen and (min-width: 968px) {
    :root {
      --big-font-size: 3rem;
      --h1-font-size: 2.25rem;
      --h2-font-size: 1.5rem;
      --h3-font-size: 1.25rem;
      --normal-font-size: 1rem;
      --small-font-size: .875rem;
      --smaller-font-size: .813rem;
    }
  }
}

body.dark-theme {
  --first-color-second: hsl(var(--hue-color), 30%, 8%);
  --title-color: hsl(var(--hue-color), 8%, 95%);
  --text-color: hsl(var(--hue-color), 8%, 75%);
  --input-color: hsl(var(--hue-color), 29%, 16%);
  --body-color: hsl(var(--hue-color), 28%, 12%);
  --container-color: hsl(var(--hue-color), 29%, 16%);
  --scroll-bar-color: hsl(var(--hue-color), 12%, 48%);
  --scroll-thumb-color: hsl(var(--hue-color), 12%, 36%);
}

/* Base */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0 0 var(--header-height) 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
}

h1, h2, h3, h4 {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}
</style>