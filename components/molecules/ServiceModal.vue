<template>
  <div ref="modal" class="services__modal services__modal-hidden">
    <div class="services__modal-content">
      <h4 class="services__modal-title">{{ title }}</h4>
      <i class="uil uil-times services__modal-close" @click="close"></i>

      <ul class="services___modal-services grid">
        <li 
          v-for="(item, i) in items"
          :key="`modal_${i}`"
          class="services__modal-service">
          <i class="uil uil-check-circle services__modal-icon"></i>
          <p>
            {{ item }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    close() {
      this.$refs.modal.classList.add('services__modal-hidden')
    }
  }
}
</script>
