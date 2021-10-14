<template>
  <section id="qualification" class="qualification section">
    <SectionHeader :title="qualification.titulo" :subtitle="qualification.subtitulo" />

    <div class="qualification__container container">
      <div class="qualification__tabs">
        <div
          id="educationTab"
          class="qualification__button button--flex qualification__active"
          data-target="#education"
          @click.stop="showTabContent('education', 'educationTab')"
        >
          <i class="uil uil-graduation-cap qualification__icon"></i>
          Educação
        </div>

        <div
          id="workTab"
          class="qualification__button button--flex"
          data-target="#work"
          @click.stop="showTabContent('work', 'workTab')"
        >
          <i class="uil uil-briefcase-alt qualification__icon"></i>
          Trabalho
        </div>
      </div>

      <div class="qualification__sections">
        <div
          id="education"
          class="qualification__content qualification__active"
          data-content
        >
          <div
            v-for="(item, i) in educacaoList"
            :key="`qualification_${i}`"
            class="qualification__data"
          >
            <div v-if="i % 2 != 0"></div>
            <div v-if="i % 2 != 0">
              <span class="qualification__rounder"></span>
              <span v-if="i < (educacaoList.length - 1)" class="qualification__line"></span>
            </div>
            
            <div>
              <h3 class="qualification__title">{{ item.nome }}</h3>
              <span class="qualification__subtitle"
                >{{ item.instituicao }}</span
              >
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                {{ item.periodo }}
              </div>
            </div>

            <div v-if="i % 2 === 0">
              <span class="qualification__rounder"></span>
              <span 
                v-if="educacaoList.length > 1 && i < (educacaoList.length - 1)"  
                class="qualification__line"></span>
            </div>
          </div>
        </div>

        <div id="work" class="qualification__content" data-content>
          <div
            v-for="(item, i) in trabalhoList"
            :key="`qualification_${i}`"
            class="qualification__data"
          >
            <div v-if="i % 2 != 0"></div>
            <div v-if="i % 2 != 0">
              <span class="qualification__rounder"></span>
              <span v-if="i < (trabalhoList.length - 1)" class="qualification__line"></span>
            </div>
            
            <div>
              <h3 class="qualification__title">{{ item.nome }}</h3>
              <span class="qualification__subtitle"
                >{{ item.instituicao }}</span
              >
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                {{ item.periodo }}
              </div>
            </div>

            <div v-if="i % 2 === 0">
              <span class="qualification__rounder"></span>
              <span 
                v-if="trabalhoList.length > 1 && i < (trabalhoList.length - 1)" 
                class="qualification__line"></span>
            </div>
          </div>
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
      qualification: {},
    }
  },
  computed: {
    educacaoList() {
      return this.qualification.qualification_items
        .filter(it => it.tipo === 'EDUCACAO')
    },
    trabalhoList() {
      return this.qualification.qualification_items
        .filter(it => it.tipo === 'TRABALHO')
    }
  },
  methods: {
    showTabContent(targetId, tabId) {
      const tabs = document.querySelectorAll('[data-target]')
      const tabContents = document.querySelectorAll('[data-content]')

      tabs.forEach((tab) => {
        tabContents.forEach((tc) =>
          tc.classList.remove('qualification__active')
        )
        tab.classList.remove('qualification__active')
      })

      const target = document.getElementById(targetId)
      target.classList.add('qualification__active')

      const tab = document.getElementById(tabId)
      tab.classList.add('qualification__active')
    },
  },
  apollo: {
    qualification: {
      query: gql`
        query {
          qualification {
            titulo
            subtitulo
            qualification_items {
              nome
              instituicao
              periodo
              ordem
              tipo
            }
          }
        }
      `,
    }
  },
}
</script>
