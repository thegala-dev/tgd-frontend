<script setup>
import { useMarkdownContent } from "~/composables/useMarkdownContent.js"
import UiFlex from '@/components/ui/UiFlex.vue'
import UiGrid from '@/components/ui/UiGrid.vue'
import UiCard from '@/components/ui/UiCard.vue'

const props = defineProps({
  collection: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  }
})

const { markdownFromFile } = useMarkdownContent()
const page = await markdownFromFile(props.collection, props.path)
</script>

<template>
  <UiFlex direction="col">
    <template v-if="page">
      <ContentRenderer
          class="markdown-content"
          :value="page.body"
          :components="{
          UiFlex,
          UiGrid,
          UiCard
        }"
      />
    </template>
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>
  </UiFlex>
</template>

<style scoped>
/* CSS da definire */
</style>