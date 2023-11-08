<template>
  <main class="lg:pl-52">
    <div class="px-4 sm:px-6 lg:px-8">AccountBook</div>
  </main>
</template>

<script setup lang="ts">
import { module, sidebarContents } from "@/stores/ui";
import { onMounted } from "vue";
const store = module();
const side = sidebarContents();

const content = [
  {name: "예산", href: "/", icon: "H" },
  {name: "가계부작성", href: "/", icon: "T" },
  {name: "달력", href: "/", icon: "W" },
  {name: "통계", href: "/", icon: "W" },
];


onMounted(() => {
  store.setSide(true);
  store.setTop(false);
  side.setContents(content)
});
</script>

<style></style>
