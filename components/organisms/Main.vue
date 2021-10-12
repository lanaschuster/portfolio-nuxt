<template>
  <main class="main">
    <Home />
    <About />
    <Skills />
    <Qualification />
    <Services />
    <Portfolio />
    <FutureWork />
  </main>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'
import Skills from './Skills.vue'
import Qualification from './Qualification.vue'
import Services from './Services.vue'
import Portfolio from './Portfolio.vue'
import FutureWork from './FutureWork.vue'

export default {
  components: {
    Home,
    About,
    Skills,
    Qualification,
    Services,
    Portfolio,
    FutureWork
  }
}
</script>
