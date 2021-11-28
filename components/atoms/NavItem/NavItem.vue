<template>
  <li class="nav__item" @click="$emit('click')">
    <NuxtLink :to="to" class="nav__link">
      <i class="uil nav__icon" :class="[iconClass]"></i> {{ text }}
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>