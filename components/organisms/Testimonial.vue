<template>
  <section id="testimonial" class="testimonial section">
    <SectionHeader title="Testimonial" subtitle="O que meus clientes falam" />

    <div class="testimonial__container container swiper">
      <div class="swiper-wrapper">
        <div class="testimonial__content swiper-slide">
          <div class="testimonial__data">
            <div class="testimonial__header">
              <img src="" alt="" class="testimonial__img">
              <div>
                <h3 class="testimonial__name">John Doe</h3>
                <span class="testimonial__client">Cliente</span>
              </div>
            </div>
            <div>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
            </div>
          </div>
          

          <p class="testimonial__description">
            loren ipsum...
          </p>
        </div>
        <div class="testimonial__content swiper-slide">
          <div class="testimonial__data">
            <div class="testimonial__header">
              <img src="" alt="" class="testimonial__img">
              <div>
                <h3 class="testimonial__name">Luiz Carlos</h3>
                <span class="testimonial__client">Marido</span>
              </div>
            </div>
            <div>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
            </div>
          </div>
          

          <p class="testimonial__description">
            ti amu s2
          </p>
        </div>
        <div class="testimonial__content swiper-slide">
          <div class="testimonial__data">
            <div class="testimonial__header">
              <img src="" alt="" class="testimonial__img">
              <div>
                <h3 class="testimonial__name">Bla Bla</h3>
                <span class="testimonial__client">bla bla bla bla</span>
              </div>
            </div>
            <div>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
            </div>
          </div>
          

          <p class="testimonial__description">
            ti amu s2
          </p>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-testimonial"></div>
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
      this.swiper = new Swiper('.testimonial__container', {
        loop: true,
        grabCursor: true,
        spaceBetween: 12,
        pagination: {
          el: ".swiper-pagination-testimonial",
          clickable: true,
          dynamicBullets: true
        },
        breakpoints: {
          568: {
            slidesPerView: 2
          }
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
