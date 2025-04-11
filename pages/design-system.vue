<template>
  <main class="section-wrapper bg-iron/20 rounded-sm">
    <h1 class="text-3xl font-bold text-pcb">Design System</h1>

    <!-- Flex Row Preview -->
    <h2 class="section-subtitle">Flex Row</h2>
    <UiFlex direction="row" :gap="4">
      <UiCard>Card 1</UiCard>
      <UiCard>Card 2</UiCard>
      <UiCard>Card 3</UiCard>
    </UiFlex>

    <!-- Flex Column Preview -->
    <h2 class="section-subtitle">Flex Column</h2>
    <UiFlex direction="col" :gap="4">
      <UiCard>Card A</UiCard>
      <UiCard>Card B</UiCard>
      <UiCard>Card C</UiCard>
    </UiFlex>

    <!-- Grid Preview -->
    <h2 class="section-subtitle">Grid (3 columns)</h2>
    <UiGrid :cols="3" :gap="4">
      <UiCard>Item 1</UiCard>
      <UiCard>Item 2</UiCard>
      <UiCard>Item 3</UiCard>
      <UiCard>Item 4</UiCard>
      <UiCard>Item 5</UiCard>
      <UiCard>Item 6</UiCard>
    </UiGrid>
  </main>
</template>

<script setup>
import UiCard from '~/components/ui/UiCard.vue'
import UiFlex from '~/components/ui/UiFlex.vue'
import UiGrid from '~/components/ui/UiGrid.vue'
</script>