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

      <form class="contact__form grid">
        <div class="contact__inputs grid">
          <div class="contact__content">
            <label for="" class="contact__label">Nome *</label>
            <input v-model="form.name" type="text" class="contact__input" required />
          </div>
          <div class="contact__content">
            <label for="" class="contact__label">E-mail *</label>
            <input v-model="form.email" type="email" class="contact__input" required />
          </div>
        </div>
        <div class="contact__content">
          <label for="" class="contact__label">Projeto</label>
          <input v-model="form.project" type="text" class="contact__input" />
        </div>
        <div class="contact__content">
          <label for="" class="contact__label">Mensagem *</label>
          <textarea
            id=""
            v-model="form.message"
            name=""
            cols="0"
            rows="7"
            class="contact__input"
            required
          ></textarea>
        </div>
        <div>
          <p class="contact__label">* campos de preenchimento obrigatório</p>
        </div>
        <div>
          <a class="button button--flex" @click="validate">
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
      form: {
        name: '',
        email: '',
        project: '',
        message: ''
      }
    }
  },
  methods: {
    validate() {
      if (!this.form.name) {
        alert('Preencha o campo nome')
        return
      }

      if (!this.form.email) {
        alert('Preencha o campo email')
        return
      }

      if (!this.form.message) {
        alert('Preencha a mensagem que deseja enviar')
        return
      }

      this.sendMessage()
    },
    sendMessage() {
      this.$apollo.mutate({
        mutation: gql`
          mutation(
            $name: String!
            $email: String!
            $project: String
            $message: String!
          ) {
            createMensagem(
              input: {
                data: {
                  name: $name,
                  email: $email,
                  project: $project,
                  message: $message
                }
              }
            ) {
              mensagem {
                id
              }
            }
          }
        `,
        variables: {
          name: this.form.name,
          email: this.form.email,
          project: this.form.project,
          message: this.form.message,
        }
      })
      .then(() => { 
        alert('Mensagem enviada com sucesso! :D');
      })
      .catch(() => { 
        alert('Desculpa, não foi possível enviar a sua mensagem :(')
      })
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
