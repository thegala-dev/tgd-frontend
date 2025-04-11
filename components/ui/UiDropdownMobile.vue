<template>
  <div>
    <button class="nav-link w-full text-left font-bold flex items-center justify-between" @click="toggle">
      {{ label }}
      <Icon name="mdi:chevron-down" class="text-xs transition-transform" :class="{ 'rotate-180': isOpen }" />
    </button>
    <div v-if="isOpen" class="pl-4 mt-2 space-y-2">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({ label: String })
const isOpen = ref(false)
const toggle = () => { isOpen.value = !isOpen.value }
</script>