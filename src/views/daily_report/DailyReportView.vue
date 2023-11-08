<template>
  <main class="py-10 lg:pl-52">
    <div class="px-4 sm:px-6 lg:px-8">DailyReport</div>
  </main>
</template>

<script setup lang="ts">
import { module,sidebarContents } from "@/stores/ui";
import { onMounted } from "vue";

const store = module();
const side = sidebarContents();

const content = [
  {name: "Heroicons", href: "/", icon: "H" },
  {name: "Tailwind Labs", href: "/", icon: "T" },
  {name: "Workcation", href: "/", icon: "W" },
];

onMounted(() => {
  store.setSide(true);
  store.setTop(false);
  side.setContents(content)
});



</script>

<style></style>
