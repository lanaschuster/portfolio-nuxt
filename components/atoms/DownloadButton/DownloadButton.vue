<template>
  <a 
    :href="href"
    class="button button--flex" 
    :class="classes"
    :target="target"
    :download="download"
  >
    {{ text }}
    <i 
      class="uil button__icon"
      :class="[ iconClass ]">
    </i>
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: '#'
    },
    target: {
      type: String,
      default: ''
    },
    download: {
      type: String,
      default: ''
    },
    classes: {
      type: Array,
      default: () => []
    },
  }
}
</script>