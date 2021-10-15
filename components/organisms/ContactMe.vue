<template>
  <section id="contact" class="contact section">
    <SectionHeader :title="contactSection.titulo" :subtitle="contactSection.subtitulo" />

    <div class="contact__container container grid">
      <div>
        <div 
          v-for="(item, i) in contactSection.contacts"
          :key="`contato_${i}`"
          class="contact__information"
        >
          <i class="uil contact__icon" :class="[ item.icone ]"></i>

          <div>
            <h3 class="contact__title">{{ item.titulo }}</h3>
            <span class="contact__subtitle">{{ item.conteudo }}</span>
          </div>
        </div>
      </div>

      <form action="" class="contact__form grid">
        <div class="contact__inputs grid">
          <div class="contact__content">
            <label for="" class="contact__label">Nome</label>
            <input type="text" class="contact__input" />
          </div>
          <div class="contact__content">
            <label for="" class="contact__label">E-mail</label>
            <input type="email" class="contact__input" />
          </div>
        </div>
        <div class="contact__content">
          <label for="" class="contact__label">Projeto</label>
          <input type="text" class="contact__input" />
        </div>
        <div class="contact__content">
          <label for="" class="contact__label">Mensagem</label>
          <textarea
            id=""
            name=""
            cols="0"
            rows="7"
            class="contact__input"
          ></textarea>
        </div>
        <div>
          <a href="#" class="button button--flex">
            Enviar mensagem
            <i class="uil uil-message button__icon"></i>
          </a>
        </div>
      </form>
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
      contactSection: {},
    }
  },
  apollo: {
    contactSection: {
      query: gql`
        query {
          contactSection{
            titulo,
            subtitulo,
            contacts{
              icone,
              titulo,
              conteudo
            }
          }
        }
      `,
    },
  },
}
</script>
