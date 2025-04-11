<template>
  <div :class="[directionClass, gapClass, 'flex']">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  direction: {
    type: String,
    default: 'col',
    validator: val => ['col', 'row'].includes(val)
  },
  gap: {
    type: [String, Number],
    default: 4,
    validator: val => [0, 2, 4, 6, 8, 10].includes(Number(val))
  }
})

const directionClass = {
  col: 'flex-col',
  row: 'flex-row'
}[props.direction]

const gapClass = {
  0: 'gap-0',
  2: 'gap-2',
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10'
}[props.gap]
</script>
