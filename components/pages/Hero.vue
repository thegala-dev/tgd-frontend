<template>
  <div class="hero-wrapper">
    <img :src="src" :alt="alt" class="hero-img" >
  </div>
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' }
})
</script>

<style scoped>
.hero-wrapper {
  @apply overflow-hidden rounded-xl mb-8;
}
.hero-img {
  @apply w-full h-auto aspect-[3/2] object-cover;
}
</style>