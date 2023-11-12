<template>
  <div class="lg:pl-56 h-screen">
    <div class="h-full">
      <div class="flex items-center h-12 border-b ">
        <span class="lg:pl-4 pl-2">아마도 제목</span>
      </div>
      <div class="float-right">
        <!-- <ListBox :selectOption="selectOption"></ListBox> -->
      </div>
      <div class="h-full">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { module, sidebarContents } from "@/stores/ui";
import { onMounted } from "vue";
import ListBox from "@/components/ListBox.vue";
import EmptyProj from "@/components/EmptyProject.vue";

const store = module();
const side = sidebarContents();

const selectOption = [
  { title: "개인가게부", description: "나의 소중한 가게부", current: true },
  { title: "공유가게부", description: "공유자:이예나", current: false },
];

const content = [
  { name: "홈", href: "main", icon: "H" },
  { name: "예산", href: "budget", icon: "B" },
  { name: "가계부작성", href: "/", icon: "A" },
  { name: "달력", href: "/", icon: "C" },
  { name: "통계", href: "/", icon: "C" },
];

onMounted(() => {
  store.setSide(true);
  store.setTop(false);
  side.setContents(content);
});
</script>

<style></style>
