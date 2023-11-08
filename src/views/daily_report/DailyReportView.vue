<template>
  <main class="py-10 pl-52 h-screen">
    <div class="px-4 sm:px-6 lg:px-8 h-full">
      <h1>DailyReport</h1>
      <div class="h-full">
        <div class="flex flex-col justify-center items-center h-full">
          <EmptyProj />
          <h2>등록된 데일리리포트가 없습니다...</h2>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { module,sidebarContents } from "@/stores/ui";
import { onMounted } from "vue";
import EmptyProj from "@/components/EmptyProject.vue"

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
