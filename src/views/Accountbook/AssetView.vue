<template>
    <div>
      <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
        <span class="font-semibold">자산</span>
      </header>
      <main class="mt-4 border h-screen">
        <div class="pt-2 mb-2">
          <TabsInPill v-model:tabs="tabs"/>
        </div>
        <div class="pl-4">
          <p v-for="tab in tabs" :key="tab.href">
            <!-- <span v-show="tab.current">{{ tab.name }}</span> -->
            <div class="mt-4 pr-3">
                <div  v-if="tab.current && tab.href == 0" >
                    <LogosCard />
                </div>
                <div  v-if="tab.current && tab.href == 1" >
                    <LogosCard />
                </div>
                <div  v-if="tab.current && tab.href == 2" >
                    <LogosCard />
                </div>
                <div  v-if="tab.current && tab.href == 3" >
                    <LogosCard />
                </div>
            </div>
          </p>
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { AcademicCapIcon, BanknotesIcon, EllipsisVerticalIcon,CheckBadgeIcon, ClockIcon, ReceiptRefundIcon, UsersIcon } from "@heroicons/vue/24/outline";
  
  import TabsInPill from '@/components/TabsInPill.vue';
  import CardList from '@/components/grid-list/CardList.vue';
  import SimpleCard from '@/components/grid-list/SimpleCardList.vue'
  import LogosCard from '@/components/grid-list/LogosCard.vue'
  
  import { ref } from 'vue';
  
  
  const tabs = ref([
      { name: '은행', href: 0, current: true },
      { name: '카드', href: 1, current: false },
      { name: '증권', href: 2, current: false },
      { name: '부채', href: 3, current: false },
    ])
  
  
  </script>