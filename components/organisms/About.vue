<template>
  <section id="about" ref="about" class="about section">
    <SectionHeader :title="about.titulo" :subtitle="about.subtitulo" />

    <div class="about__container container grid">
      <img
        :src="`${about.imagem.url}`"
        alt="Sobre mim"
        class="about__img"
      />
      <div class="about__data">
        <p class="about__description">
          {{ about.descricao }}
        </p>
        <div class="about__info">
          <div
            v-for="(item, i) in aboutIndicadores"
            :key="`about_indicador_${i}`"
          >
            <span class="about__info-title">{{ item.valor }}</span>
            <span class="about__info-name">{{ item.descricao }}</span>
          </div>
        </div>
        <div class="about__btns">
          <DownloadButton
            text="Download CV"
            target="_blank"
            download="Lana_cv.pdf"
            href="/files/curriculo_Lana_2021.pdf"
            icon-class="uil-download-alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'
import SectionHeader from '../molecules/SectionHeader'

export default {
  components: {
    SectionHeader,
  },
  data() {
    return {
      about: {},
      aboutIndicadores: [],
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
    about: {
      query: gql`
        query {
          about {
            titulo
            subtitulo
            descricao
            imagem {
              url
            }
            curriculo {
              url
            }
          }
        }
      `,
    },
    aboutIndicadores: {
      query: gql`
        query {
          aboutIndicadores {
            valor
            descricao
          }
        }
      `,
    },
  },
}
</script>
