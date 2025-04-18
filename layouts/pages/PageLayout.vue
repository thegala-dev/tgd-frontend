<template>
  <div class="page-layout">
    <slot name="hero" />

    <UiFlex direction="row" gap="12">
      <!-- Colonna principale -->
      <div>
        <slot />
      </div>

      <!-- Drawer -->
      <div class="hidden lg:block sticky top-32 h-fit ms-4">
        <slot name="sidebar" />
      </div>
    </UiFlex>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page-layout {
  @apply max-w-7xl mx-auto px-4 py-8 space-y-12;
}
</style>