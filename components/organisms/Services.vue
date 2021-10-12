<template>
  <section id="services" class="services section">
    <SectionHeader title="Services" subtitle="What I offer" />

    <div class="services__container container grid">
      <div class="services__content">
        <div>
          <i class="uil uil-web-grid services__icon"></i>
          <h3 class="services__title">
            Criação de <br />
            Websites
          </h3>
        </div>

        <span
          class="
            button button--flex button--small button--link
            services__button
          "
          @click="openModal1"
        >
          Ver mais <i class="uil uil-arrow-right button__icon"></i>
        </span>

        <ServiceModal
          ref="modal1"
          title="Criação de Websites"
          :items="['Desenvolvo websites responsivos']"
        />
      </div>

      <div class="services__content">
        <div>
          <i class="uil uil-web-grid services__icon"></i>
          <h3 class="services__title">
            Desenvolvimento de <br />
            Sistemas
          </h3>
        </div>

        <span
          class="
            button button--flex button--small button--link
            services__button
          "
          @click="openModal2"
        >
          Ver mais <i class="uil uil-arrow-right button__icon"></i>
        </span>
        <ServiceModal
          ref="modal2"
          title="Desenvolvimento de Sistemas"
          :items="[
            'Desenvolvo sistemas web com as regras de negócio fornecidas pelo cliente',
          ]"
        />

      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '../molecules/SectionHeader'
import ServiceModal from '../molecules/ServiceModal'

export default {
  components: {
    SectionHeader,
    ServiceModal,
  },
  methods: {
    openModal1() {
      this.$refs.modal1.$el.classList.remove('services__modal-hidden')
    },
    openModal2() {
      this.$refs.modal2.$el.classList.remove('services__modal-hidden')
    }
  }
}
</script>
