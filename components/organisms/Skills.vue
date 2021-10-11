<template>
  <section id="skills" class="skills section">
    <SectionHeader title="Skills" subtitle="My technical level" />

    <div class="skills__container container grid">
      <div>
        <!-- skills 1 -->
        <div ref="skillsContent1" class="skills__content skills__open">
          <div class="skills__header" @click.stop="toggleSkills($refs.skillsContent1)">
            <i class="uil uil-brackets-curly skills__icon"></i>

            <div>
              <h1 class="skills__title">Frontend developer</h1>
              <span class="skills__subtitle">More than 3 years</span>
            </div>

            <i class="uil uil-angle-down skills__arrow"></i>
          </div>

          <div class="skills__list grid">
            <div class="skills__data">
              <div class="skills__titles">
                <h3 class="skills__name">HTML</h3>
                <span class="skills__number">Advanced</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage skills__html"></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <h3 class="skills__name">CSS</h3>
                <span class="skills__number">Advanced</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage skills__css"></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <h3 class="skills__name">Javascript</h3>
                <span class="skills__number">Advanced</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage skills__js"></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <h3 class="skills__name">Vue.js & Nuxt.js</h3>
                <span class="skills__number">Advanced</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage skills__vue"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <!-- skills 2 -->
        <div ref="skillsContent2" class="skills__content skills__close">
          <div class="skills__header" @click.stop="toggleSkills($refs.skillsContent2)">
            <i class="uil uil-server-network skills__icon"></i>

            <div>
              <h1 class="skills__title">Backend developer</h1>
              <span class="skills__subtitle">More than 3 years</span>
            </div>
            <i class="uil uil-angle-down skills__arrow"></i>
          </div>

          <div class="skills__list grid">
            <div class="skills__data">
              <div class="skills__titles">
                <h3 class="skills__name">Node.js</h3>
                <span class="skills__number">Advanced</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage skills__node"></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <h3 class="skills__name">MySQL, Postgres, MongoDB</h3>
                <span class="skills__number">Advanced</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage skills__sql"></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <h3 class="skills__name">RESTful APIs</h3>
                <span class="skills__number">Advanced</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage skills__rest"></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <h3 class="skills__name">Redis</h3>
                <span class="skills__number">Intermediário</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage skills__redis"></span>
              </div>
            </div>

            <div class="skills__data">
              <div class="skills__titles">
                <h3 class="skills__name">GraphQL</h3>
                <span class="skills__number">Begginer</span>
              </div>
              <div class="skills__bar">
                <span class="skills__percentage skills__graphql"></span>
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
  // mounted() {
  //   const skillsContent = document.getElementsByClassName('skills__content')
  //   // const skillsHeader = document.querySelectorAll('.skills_header')

  //   this.toggleSkills(skillsContent)
  // },
  methods: {
    toggleSkills(parent) {
      const skillsContent = document.getElementsByClassName('skills__content')
      const itemClass = parent.className
      // console.log(event)

      for (let i = 0; i < skillsContent.length; ++i) {
        skillsContent[i].className = 'skills__content skills__close'
      }

      if (itemClass === 'skills__content skills__close') {
        parent.className = 'skills__content skills__open'
      }
    },
  },
}
</script>
