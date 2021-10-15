<template>
  <section id="portfolio" class="portfolio section">
    <SectionHeader :title="projectSection.titulo" :subtitle="projectSection.subtitulo" />

    <div class="portfolio__container container swiper">
      <div class="swiper-wrapper">
        <div 
          v-for="(p, i) in projectSection.projects"
          :key="`project_${i}`"
          class="portfolio__content grid swiper-slide"
        >
          <img :src="`${url}${p.imagem.url}`" :alt="p.nome" class="portfolio__img" />

          <div class="portfolio__data">
            <h3 class="portfolio__title">{{ p.nome }}</h3>
            <p class="portfolio__description">
              {{ p.descricao }}
            </p>
            <a
              :href="p.url"
              target="_blank"
              class="button button--flex button--small portfolio__button"
            >
              Demo
              <i class="uil uil-arrow-right button__icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev">
        <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
      </div>
      <div class="swiper-button-next">
        <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'
import SectionHeader from '../molecules/SectionHeader'
import Swiper from '@/assets/js/swiper-bundle.min.js'

export default {
  components: {
    SectionHeader,
  },
  data() {
    return {
      swiper: null,
      projectSection: {}
    }
  },
  computed: {
    url() {
      return process.env.strapiUrl
    }
  },
  mounted() {
    if (!this.swiper) {
      this.swiper = new Swiper('.portfolio__container', {
        cssMode: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });
    }
  },
  apollo: {
    projectSection: {
      query: gql`
        query {
          projectSection{
            titulo,
            subtitulo,
            projects{
              nome,
              url,
              descricao,
              imagem{
                url
              }
            }
          }
        }
      `,
    }
  },
}
</script>
<style scoped>
.portfolio__container {
  width: inherit;
  height: calc(100% + 30px);
}
.swiper-wrapper {
  padding-bottom: 2rem;
}
</style>
