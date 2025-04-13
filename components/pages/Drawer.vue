<template>
  <Transition name="slide-in">
    <div
        v-if="open"
        class="fixed top-0 right-0 w-full h-full sm:max-w-xs bg-dark text-iron p-6 shadow-xl z-50 overflow-y-auto"
    >
      <slot />
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  open: { type: Boolean, required: true }
})
</script>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.3s ease;
}
.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-in-enter-to,
.slide-in-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
