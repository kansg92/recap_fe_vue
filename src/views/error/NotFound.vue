<template>
  404 notfound
</template>

<script setup lang="ts">
import { module } from "@/stores/ui";
import { onMounted } from "vue";
const store = module();

onMounted(() => {
  store.setSide(false);
  store.setTop(false);
});
</script>

<style>

</style>