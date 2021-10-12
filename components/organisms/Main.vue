<template>
  <main class="main">
    <Home />
    <About />
    <Skills />
    <Qualification />
    <Services />
  </main>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'
import Skills from './Skills.vue'
import Qualification from './Qualification.vue'
import Services from './Services.vue'

export default {
  components: {
    Home,
    About,
    Skills,
    Qualification,
    Services
  }
}
</script>
