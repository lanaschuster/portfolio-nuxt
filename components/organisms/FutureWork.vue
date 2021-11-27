<template>
  <section id="project" class="project section">
    <div class="project__bg">
      <div class="project__container container grid">
        <div class="project__data">
          <h2 class="project__title">{{ discountSection.titulo }}</h2>
          <p class="project__description">
            {{ discountSection.descricao }}
          </p>

          <Button
            text="Entre em contato"
            href="#contact"
            icon-class="uil-message"
            :classes="['button--white']"
          />
        </div>

        <img
          :src="`${discountSection.imagem.url}`"
          alt="Discount"
          class="project__img"
        />
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      discountSection: {},
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
  apollo: {
    discountSection: {
      query: gql`
        query {
          discountSection {
            titulo
            descricao
            imagem {
              url
            }
          }
        }
      `,
    },
  },
}
</script>