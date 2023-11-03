<template>
  <div>
    about
  </div>
</template>

<script setup lang="ts">
import { module } from "@/stores/ui";
import { onMounted } from "vue";
const store = module()

onMounted(()=>{
  store.setOpen(false)
})

</script>

<style>

</style>