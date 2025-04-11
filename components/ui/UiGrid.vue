<template>
  <div :class="[gridColsClass, gapClass, 'grid']">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  cols: {
    type: [String, Number],
    default: 2,
    validator: val => [1, 2, 3, 4, 5, 6].includes(Number(val))
  },
  gap: {
    type: [String, Number],
    default: 4,
    validator: val => [0, 2, 4, 6, 8, 10].includes(Number(val))
  }
})

const gridColsClass = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6'
}[props.cols]

const gapClass = {
  0: 'gap-0',
  2: 'gap-2',
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10'
}[props.gap]
</script>