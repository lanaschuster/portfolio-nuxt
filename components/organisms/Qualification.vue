<template>
  <section id="qualification" class="qualification section">
    <SectionHeader title="Qualification" subtitle="My personal journey" />

    <div class="qualification__container container">
      <div class="qualification__tabs">
        <div
          id="educationTab"
          class="qualification__button button--flex qualification__active"
          data-target="#education"
          @click.stop="showTabContent('education', 'educationTab')"
        >
          <i class="uil uil-graduation-cap qualification__icon"></i>
          Education
        </div>

        <div
          id="workTab"
          class="qualification__button button--flex"
          data-target="#work"
          @click.stop="showTabContent('work', 'workTab')">
          <i class="uil uil-briefcase-alt qualification__icon"></i>
          Work
        </div>
      </div>

      <div class="qualification__sections">
        <div
          id="education"
          class="qualification__content qualification__active"
          data-content
        >
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Ciência da Computação</h3>
              <span class="qualification__subtitle"
                >Universidade Estadual do Oeste do Paraná</span
              >
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                2014 - 2018
              </div>
            </div>

            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>

          <div class="qualification__data">
            <div></div>

            <div>
              <span class="qualification__rounder"></span>
              <!-- <span class="qualification__line"></span> -->
            </div>

            <div>
              <h3 class="qualification__title">Web design course</h3>
              <span class="qualification__subtitle">Alura</span>
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                2021 - 2021
              </div>
            </div>
          </div>
        </div>

        <div id="work" class="qualification__content" data-content>
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Gerente de Projetos</h3>
              <span class="qualification__subtitle"
                >Webfoz Internet Comunicação Ltda</span
              >
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                2021 - até o momento
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>

          <div class="qualification__data">
            <div></div>

            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>

            <div>
              <h3 class="qualification__title">Analista de Sistemas Pleno</h3>
              <span class="qualification__subtitle"
                >Webfoz Internet Comunicação Ltda</span
              >
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                2020 - 2021
              </div>
            </div>
          </div>

          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Analista de Sistemas Junior</h3>
              <span class="qualification__subtitle"
                >Parque Tecnológico Itaipu - Brasil</span
              >
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                2020 - 2020
              </div>
            </div>

            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>

          <div class="qualification__data">
            <div></div>

            <div>
              <span class="qualification__rounder"></span>
              <!-- <span class="qualification__line"></span> -->
            </div>

            <div>
              <h3 class="qualification__title">Programadora</h3>
              <span class="qualification__subtitle"
                >Parque Tecnológico Itaipu - Brasil</span
              >
              <div class="qualification__calendar">
                <i class="uil uil-calendar-alt"></i>
                2019 - 2020
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '../molecules/SectionHeader'

export default {
  components: {
    SectionHeader,
  },
  methods: {
    showTabContent(targetId, tabId) {
      const tabs = document.querySelectorAll('[data-target]')
      const tabContents = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
        tabContents.forEach(tc => tc.classList.remove('qualification__active'))
        tab.classList.remove('qualification__active')
      })

      const target = document.getElementById(targetId)
      target.classList.add('qualification__active')

      const tab = document.getElementById(tabId)
      tab.classList.add('qualification__active')
    },
  },
}
</script>
