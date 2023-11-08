<template>
  <main class="pl-52 h-screen">
    <div class="px-4 sm:px-6 lg:px-8 h-full">
      <div class="float-right">
        <ListBox :selectOption="selectOption" />
      </div>
      <h1>AccountBook</h1>
      <div class="h-full">
        <div class="flex flex-col justify-center items-center h-full">
          <EmptyProj />
          <h2>등록된 가계부가 없습니다...</h2>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { module, sidebarContents } from "@/stores/ui";
import { onMounted } from "vue";
import ListBox from "@/components/ListBox.vue";
import EmptyProj from "@/components/EmptyProject.vue"

const store = module();
const side = sidebarContents();

const selectOption = [
  { title: "개인가게부", description: "나의 소중한 가게부", current: true },
  { title: "공유가게부", description: "공유자:이예나", current: false },
];

const content = [
  { name: "예산", href: "/", icon: "H" },
  { name: "가계부작성", href: "/", icon: "T" },
  { name: "달력", href: "/", icon: "W" },
  { name: "통계", href: "/", icon: "W" },
];

onMounted(() => {
  store.setSide(true);
  store.setTop(false);
  side.setContents(content);
});
</script>

<style></style>
