<template>
  <div :class="classMap">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  cols: {
    type: [String, Number],
    default: 2
  },
  gap: {
    type: [String, Number],
    default: 4
  }
})

const classMap = computed(() => {
  const colsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    'sm:1': 'sm:grid-cols-1',
    'sm:2': 'sm:grid-cols-2',
    'sm:3': 'sm:grid-cols-3',
    'lg:1': 'lg:grid-cols-1',
    'lg:2': 'lg:grid-cols-2',
    'lg:3': 'lg:grid-cols-3'
  }

  const gapMap = {
    0: 'gap-0',
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
    'sm:2': 'sm:gap-2',
    'sm:4': 'sm:gap-4',
    'lg:2': 'lg:gap-2',
    'lg:4': 'lg:gap-4'
  }

  const cols = props.cols.toString().split(' ').map(c => colsMap[c] || '')
  const gaps = props.gap.toString().split(' ').map(g => gapMap[g] || '')

  return ['grid', ...cols, ...gaps].filter(Boolean)
})
</script>