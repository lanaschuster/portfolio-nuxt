<template>
  <section id="services" class="services section">
    <SectionHeader :title="servicesSection.titulo" :subtitle="servicesSection.subtitulo" />

    <div class="services__container container grid">
      <div 
        v-for="(servico, i) in servicesSection.services"
        :key="`service_${i}`"
        class="services__content"
      >
        <div>
          <i class="uil services__icon" :class="[ servico.icone ]"></i>
          <h3 class="services__title">
            {{ servico.titulo }}
          </h3>
        </div>

        <span
          class="
            button button--flex button--small button--link
            services__button
          "
          @click="openModal(`modal${i}`)"
        >
          Ver mais <i class="uil uil-arrow-right button__icon"></i>
        </span>

        <ServiceModal
          :id="`modal${i}`"
          :ref="`modal${i}`"
          :title="servico.titulo"
          :items="servico.topicos.split(';')"
        />
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'
import SectionHeader from '../molecules/SectionHeader'
import ServiceModal from '../molecules/ServiceModal'

export default {
  components: {
    SectionHeader,
    ServiceModal,
  },
  data() {
    return {
      servicesSection: {},
    }
  },
  methods: {
    openModal(modalId) {
      const modal = document.getElementById(modalId)
      modal.classList.remove('services__modal-hidden')
    }
  },
  apollo: {
    servicesSection: {
      query: gql`
        query {
          servicesSection{
            titulo,
            subtitulo,
            services{
              titulo,
              icone,
              topicos
            }
          }
        }
      `,
    }
  },
}
</script>
