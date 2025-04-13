<template>
  <PageLayout>
    <template #default>
      <Content collection="theProject" :path="route.path"/>
    </template>
  </PageLayout>
</template>

<script setup>
import PageLayout from "~/layouts/pages/PageLayout.vue";
import Content from "~/components/pages/Content.vue";

const route = useRoute();
</script>