<template>
  <section id="skills" class="skills section">
    <SectionHeader
      :title="skillsSection.titulo"
      :subtitle="skillsSection.subtitulo"
    />

    <div class="skills__container container grid">
      <div
        v-for="(skill, i) in skills"
        :key="`skill_${i}`"
      >
        <div :ref="`skillsContent${i}`" class="skills__content skills__open">
          <div
            class="skills__header"
            @click.stop="toggleSkills($refs[`skillsContent${i}`])"
          >
            <i class="uil skills__icon" :class="[ skill.icone ]"></i>

            <div>
              <h1 class="skills__title">{{ skill.titulo }}</h1>
              <span class="skills__subtitle">{{ skill.subtitulo }}</span>
            </div>

            <i class="uil uil-angle-down skills__arrow"></i>
          </div>

          <div class="skills__list grid">
            <div 
              v-for="(skillItem, j) in skill.skill_items"
              :key="`si_${j}`"
              class="skills__data"
            >
              <div class="skills__titles">
                <h3 class="skills__name">{{ skillItem.titulo }}</h3>
                <span class="skills__number">{{ skillItem.nivel }}</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage" :style="{'width': `${skillItem.porcentagem}%`}"></span>
              </div>
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
      skillsSection: {},
      skills: [],
    }
  },
  methods: {
    toggleSkills([ parent ]) {
      const skillsContent = document.getElementsByClassName('skills__content')
      const itemClass = parent.className

      for (let i = 0; i < skillsContent.length; ++i) {
        skillsContent[i].className = 'skills__content skills__close'
      }

      if (itemClass === 'skills__content skills__close') {
        parent.className = 'skills__content skills__open'
      }
    },
  },
  apollo: {
    skillsSection: {
      query: gql`
        query {
          skillsSection {
            titulo
            subtitulo
          }
        }
      `,
    },
    skills: {
      query: gql`
        query {
          skills {
            titulo
            subtitulo
            skill_items {
              titulo
              nivel
              porcentagem
            }
          }
        }
      `,
    },
  },
}
</script>
