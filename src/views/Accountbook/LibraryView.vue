<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">라이브러리</span>
    </header>
    <main class="mt-4 border h-screen">
      <div class="pt-2 mb-2">
        <TabsInPill v-model:tabs="tabs"/>
      </div>
      <div class="pl-4">
        <p v-for="tab in tabs" :key="tab.href">
          <!-- <span v-show="tab.current">{{ tab.name }}</span> -->
          <div class="mt-4 pr-3">
          <div v-if="tab.current && tab.href == 0" >
            <CardList :categoryList="actions"/>
          </div>
          <div v-if="tab.current && tab.href == 1">
            <SimpleCard v-model:tags="tags" />
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

import { ref } from 'vue';


const tabs = ref([
    { name: '카테고리', href: 0, current: true },
    { name: '태그', href: 1, current: false },
  ])


  /**************************** 카테고리 들어가는 내용 데이터 백에서 호출로 변경되어야함~! ********************************************************/
  const actions = [
  {
    title: "식사",
    icon: ClockIcon,
    contents : ['고기', '기타', '배달', '분식', '뷔페', '식재료', '아시아음식', '양식', '일반식당', '일식', '중식', '치킨', '패밀리레스토랑', '패스트푸드', '한식' ],
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "카페/간식",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "술/유흥",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "생활/마트",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "온라인쇼핑",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "백화점/패션",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];

/**************************** 테그 들어가는 내용 데이터 백에서 호출로 변경되어야함~! ********************************************************/
const tags = ref([
  {
    name: "가족",
    initials: "GA",
    href: "#",
    bgColor: "bg-pink-600",
  },
  {
    name: "데이트",
    initials: "CD",
    href: "#",
    bgColor: "bg-purple-600",
  },
  {
    name: "선물",
    initials: "T",
    href: "#",
    bgColor: "bg-yellow-500",
  },
  {
    name: "회사",
    initials: "RC",
    href: "#",
    bgColor: "bg-green-500",
  },
  {
    name: "여행",
    initials: "RC",
    href: "#",
    bgColor: "bg-green-500",
  },
]);






</script>