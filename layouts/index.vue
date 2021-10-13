<template>
  <div>
    <Header />
    <Main />
    <Footer />
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
  }
}
</script>
