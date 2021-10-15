<template>
  <section id="project" class="project section">
    <div class="project__bg">
      <div class="project__container container grid">
        <div class="project__data">
          <h2 class="project__title">{{ discountSection.titulo }}</h2>
          <p class="project__description">
            {{ discountSection.descricao }}
          </p>
          <a href="#contact" class="button button--flex button--white">
            Entre em contato
            <i class="uil uil-message button__icon project__icon"></i>
          </a>
        </div>

        <img
          :src="`${url}${discountSection.imagem.url}`"
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
      return process.env.strapiUrl
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