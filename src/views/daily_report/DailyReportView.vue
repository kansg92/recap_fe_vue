<template>
  <main class="py-10 lg:pl-52">
    <div class="px-4 sm:px-6 lg:px-8">DailyReport</div>
  </main>
</template>

<script setup lang="ts">
import { module } from "@/stores/ui";
import { onMounted } from "vue";
const store = module();

onMounted(() => {
  store.setSide(true);
  store.setTop(false);
});
</script>

<style></style>
