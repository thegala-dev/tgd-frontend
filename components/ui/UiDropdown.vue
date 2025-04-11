<template>
  <div class="relative" @mouseenter="open" @mouseleave="close">
    <NuxtLink
        :to="to"
        class="nav-link flex items-center gap-1"
        @click.prevent="toggle"
    >
      <slot name="button" />
      <Icon name="mdi:chevron-down" class="text-xs transition-transform duration-200" :class="{ 'rotate-180': isOpen }" />
    </NuxtLink>
    <Transition name="fade-slide">
      <div
          v-if="isOpen"
          class="absolute mt-2 w-48 bg-dark border border-iron/30 rounded-lg shadow-lg z-50 py-2 space-y-1"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  to: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)
let timeoutId = null

const open = () => {
  clearTimeout(timeoutId)
  isOpen.value = true
}

const close = () => {
  timeoutId = setTimeout(() => {
    isOpen.value = false
  }, 100)
}

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>