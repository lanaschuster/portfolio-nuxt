<template>
  <a 
    :href="href"
    class="button button--flex" 
    :class="classes"
    :target="target"
    @click="$emit('click')" 
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
      default: undefined
    },
    target: {
      type: String,
      default: undefined
    },
    classes: {
      type: Array,
      default: () => []
    },
  }
}
</script>