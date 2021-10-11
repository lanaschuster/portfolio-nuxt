<template>
  <div>
    <h2 class="section__title">{{ title }}</h2>
    <span class="section__subtitle">{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
