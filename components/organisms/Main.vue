<template>
  <main class="main">
    <Home />
    <About />
    <Skills />
  </main>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'
import Skills from './Skills.vue'

export default {
  components: {
    Home,
    About,
    Skills
  }
}
</script>
