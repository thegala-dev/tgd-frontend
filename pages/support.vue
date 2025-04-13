<template>
  <PageLayout>
    <template #hero>
      <Hero src="/assets/pages/support-hero.webp" alt="G# il recruiter di supereroi" />
    </template>

    <template #default>
      <Content collection="pages" :path="path" />
    </template>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/layouts/pages/PageLayout.vue'
import Hero from '@/components/pages/Hero.vue'
import Content from "~/components/pages/Content.vue";

const route = useRoute()
const path = computed(() => {
  return `/pages${route.path}`
})
</script>
