<template>
  <div>
    <Header />
    <Main />
    <Footer />
    <a id="scroll-up" href="#home" class="scrollup">
      <i class="uil uil-angle-double-up scrollup__icon"></i>
    </a>
  </div>
</template>

<script>
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
      listener: null,
      listener2: null,
    }
  },
  mounted() {
    if (!this.listener) {
      this.listener = window.addEventListener('scroll', this.scrollHeader)
    }
    if (!this.listener2) {
      this.listener2 = window.addEventListener('scroll', this.scrollTop)
    }
  },
  beforeDestroy() {
    if (this.listener) 
      window.removeEventListener('scroll', this.scrollHeader)
    if (this.listener2) 
      window.removeEventListener('scroll', this.scrollTop)
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
