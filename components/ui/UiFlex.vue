// components/ui/UiFlex.vue
<template>
  <div :class="classMap">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  direction: {
    type: String,
    default: 'col'
  },
  gap: {
    type: [String, Number],
    default: 4
  }
})

const classMap = computed(() => {
  const directionClasses = {
    'col': 'flex-col',
    'row': 'flex-row',
    'sm:col': 'sm:flex-col',
    'sm:row': 'sm:flex-row',
    'md:col': 'md:flex-col',
    'md:row': 'md:flex-row',
    'lg:col': 'lg:flex-col',
    'lg:row': 'lg:flex-row'
  }

  const gapClasses = {
    0: 'gap-0',
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
    'sm:2': 'sm:gap-2',
    'sm:4': 'sm:gap-4',
    'sm:6': 'sm:gap-6',
    'lg:2': 'lg:gap-2',
    'lg:4': 'lg:gap-4',
    'lg:6': 'lg:gap-6'
  }

  const directions = props.direction.split(' ').map(d => directionClasses[d] || '')
  const gaps = props.gap.toString().split(' ').map(g => gapClasses[g] || '')

  return ['flex', ...directions, ...gaps].filter(Boolean)
})
</script>
