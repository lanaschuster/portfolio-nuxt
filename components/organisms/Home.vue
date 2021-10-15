<template>
  <section id="home" class="home section">
      <div class="home__container container grid">
        <div class="home__content grid">
          <div class="home__social">
            <a 
              v-for="(link, i) in homeLinks"
              :key="`home_link_${i}`"
              :href="link.url"
              target="_blank" 
              class="home__social-icon"
            >
              <i class="uil" :class="[ link.icone ]"></i>
            </a>
          </div>
          <div class="home__img">
            <svg
              class="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image :xlink:href="`${url}${home.imagem.url}`" x="12" y="17" class="home__blob-img" />
              </g>
            </svg>
          </div>

          <div class="home__data">
            <h1 class="home__title">{{ home.titulo }}</h1>
            <h3 class="home__subtitle">{{ home.subtitulo }}</h3>
            <p class="home__description">
              {{ home.descricao }}
            </p>
            <a href="#contact" class="button button--flex">
              Entre em contato <i class="uil uil-message button__icon"></i>
            </a>
            <div class="home__scroll">
              <a class="home__scroll-button button--flex" href="#about">
                <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                <span class="home__scroll-name">Veja mais</span>
                <i class="uil uil-arrow-down home__scroll-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      home: {},
      homeLinks: []
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
    home: {
      query: gql`
        query {
          home {
            titulo,
            subtitulo,
            descricao,
            imagem{
              url
            }
          }
        }
      `,
    },
    homeLinks: {
      query: gql`
        query {
          homeLinks {
            icone,
            url
          }
        }
      `,
    },
  },
}
</script>
