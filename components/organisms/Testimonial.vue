<template>
  <section id="testimonial" class="testimonial section">
    <SectionHeader :title="testimonialSection.titulo" :subtitle="testimonialSection.subtitulo" />

    <div class="testimonial__container container swiper">
      <div class="swiper-wrapper">
        <div 
          v-for="(item, i) in testimonialSection.testimonials"
          :key="`testimonial_${i}`"
          class="testimonial__content swiper-slide"
        >
          <div class="testimonial__data">
            <div class="testimonial__header">
              <img :src="`${item.imagem.url}`" alt="Foto do cliente" class="testimonial__img" />
              <div>
                <h3 class="testimonial__name">{{ item.nome }}</h3>
                <span class="testimonial__client">{{ item.tipo }}</span>
              </div>
            </div>
            <div>
              <i 
                v-for="j of item.numeroEstrelas"
                :key="`star_${i}_${j}`"
                class="uil uil-star testimonial__icon-star"
              ></i>
            </div>
          </div>

          <p class="testimonial__description">{{ item.descricao }}</p>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-testimonial"></div>
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
      testimonialSection: {},
    }
  },
  computed: {
    url() {
      let strapiUrl = process.env.strapiUrl
      if (strapiUrl.charAt(strapiUrl.length - 1) === '/') {
        strapiUrl = strapiUrl.replace(/\/([^/]*)$/, '$1')
      }
      return strapiUrl
    }
  },
  mounted() {
    if (!this.swiper) {
      this.swiper = new Swiper('.testimonial__container', {
        grabCursor: true,
        spaceBetween: 48,
        pagination: {
          el: '.swiper-pagination-testimonial',
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          568: {
            slidesPerView: 2,
          },
        },
      })
    }
  },
  apollo: {
    testimonialSection: {
      query: gql`
        query {
          testimonialSection {
            titulo,
            subtitulo,
            testimonials{
              nome,
              tipo,
              descricao,
              numeroEstrelas,
              imagem{
                url
              }
            }
          }
        }
      `,
    },
  },
}
</script>
<style scoped>
.swiper {
  width: inherit;
  height: inherit;
}
</style>
