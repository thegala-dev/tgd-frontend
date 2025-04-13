<template>
  <div class="page-layout">
    <slot name="hero" />

    <UiGrid cols="1" gap="12" class="lg:grid-cols-[minmax(0,1fr)_320px]">
      <!-- Colonna principale -->
      <div>
        <slot />
      </div>

      <!-- Sidebar desktop -->
      <div class="hidden lg:block sticky top-32 h-fit">
        <slot name="sidebar" />
      </div>
    </UiGrid>

    <!-- Pulsante drawer mobile -->
    <button
        class="lg:hidden fixed bottom-6 right-6 bg-pcb text-dark font-bold px-4 py-2 rounded-full shadow-lg z-50"
        @click="showDrawer = !showDrawer"
    >
      Menu
    </button>

    <!-- Drawer mobile -->
    <Drawer :open="showDrawer">
      <slot name="sidebar" />
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Drawer from '@/components/pages/Drawer.vue'
const showDrawer = ref(false)
</script>

<style scoped>
.page-layout {
  @apply max-w-7xl mx-auto px-4 py-8 space-y-12;
}
</style>