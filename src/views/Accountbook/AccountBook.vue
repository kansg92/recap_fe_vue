<template>
  <div class="lg:pl-60 pl-4 py-4">
    AccountBook Page

  </div>
</template>

<script setup lang="ts">
import { module } from "@/stores/ui";
import { onMounted } from "vue";

const store = module();

onMounted(() => {
  store.setOpen(true);
});
</script>

<style></style>