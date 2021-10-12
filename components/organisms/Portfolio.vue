<template>
  <section id="portfolio" class="portfolio section">
    <SectionHeader title="Portfolio" subtitle="Alguns dos meus projetos" />

    <div class="portfolio__container container swiper">
      <div class="swiper-wrapper">
        <div class="portfolio__content grid swiper-slide">
          <img src="" alt="" class="portfolio__img" />

          <div class="portfolio__data">
            <h3 class="portfolio__title">project 1</h3>
            <p class="portfolio__description">
              Sistema para gerenciamento de alguma coisa.
            </p>
            <a
              href=""
              class="button button--flex button--small portfolio__button"
            >
              Demo
              <i class="uil uil-arrow-right button__icon"></i>
            </a>
          </div>
          <!-- <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>

            </div>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <div class="swiper-scrollbar"></div>
          </div> -->
        </div>
        <div class="portfolio__content grid swiper-slide">
          <img src="" alt="" class="portfolio__img" />

          <div class="portfolio__data">
            <h3 class="portfolio__title">project 2</h3>
            <p class="portfolio__description">
              Site para asasad.
            </p>
            <a
              href=""
              class="button button--flex button--small portfolio__button"
            >
              Demo
              <i class="uil uil-arrow-right button__icon"></i>
            </a>
          </div>
        </div>
        <div class="portfolio__content grid swiper-slide">
          <img src="" alt="" class="portfolio__img" />

          <div class="portfolio__data">
            <h3 class="portfolio__title">project 3</h3>
            <p class="portfolio__description">
              Site para ere erge erger.
            </p>
            <a
              href=""
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
import SectionHeader from '../molecules/SectionHeader'
import Swiper from '@/assets/js/swiper-bundle.min.js'

export default {
  components: {
    SectionHeader,
  },
  data() {
    return {
      swiper: null
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
  }
}
</script>
<style scoped>
.swiper {
  width: inherit;
  height: inherit;
}
</style>
