<template>
  <PageLayout>
    <template #default>
      <Content collection="pages" :path="path"/>
    </template>
  </PageLayout>
</template>

<script setup>
import PageLayout from "~/layouts/pages/PageLayout.vue";
import Content from "~/components/pages/Content.vue";

const route = useRoute()
const path = computed(() => {
  return `/pages${route.path}`
})
</script>