<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">라이브러리</span>
    </header>
    <main class="pl-4 mt-4 border h-screen">
      <div class="pt-2 mb-2">
        <TabsInPill :tabs="tabs"/>
      </div>
      <div>
        <p v-for="tab in tabs" :key="tab.href">
          <!-- <span v-show="tab.current">{{ tab.name }}</span> -->
          <div class="mt-4 pr-3">
          <div v-if="tab.current && tab.href == 0" >
            <CardList />
          </div>
          <div v-if="tab.current && tab.href == 1">
            <SimpleCard />
          </div>
          <div  v-if="tab.current && tab.href == 2" >
            <LogosCard />
          </div>
        </div>
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TabsInPill from '@/components/TabsInPill.vue';
import CardList from '@/components/grid-list/CardList.vue';
import SimpleCard from '@/components/grid-list/SimpleCardList.vue'
import LogosCard from '@/components/grid-list/LogosCard.vue'

import { ref } from 'vue';
const tabs = ref([
    { name: '카테고리', href: 0, current: true },
    { name: '태그', href: 1, current: false },
    { name: '카드', href: 2, current: false },
    { name: '계좌', href: 3, current: false },
  ])






</script>