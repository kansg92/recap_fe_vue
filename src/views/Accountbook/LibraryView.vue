<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">라이브러리</span>
    </header>
    <main class="pl-4 mt-4 border h-screen">
      <div class="pt-2 mb-2">
        <TabsInPill v-model:tabs="tabs"/>
      </div>
      <div>
        <p v-for="tab in tabs" :key="tab.href">
          <span v-show="tab.current">{{ tab.name }}</span>
          
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TabsInPill from '@/components/TabsInPill.vue';
import { ref } from 'vue';
const tabs = ref([
    { name: '카테고리', href: 0, current: false },
    { name: '태그', href: 1, current: false },
    { name: '카드', href: 2, current: true },
    { name: '계좌', href: 3, current: false },
  ])






</script>