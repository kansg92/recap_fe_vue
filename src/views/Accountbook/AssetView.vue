<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">자산</span>
    </header>
    <main class="mt-4 border h-screen">
      <div class="pt-2 mb-2">
        <TabsInPill v-model:tabs="tabs" />
      </div>
      <div class="pl-4">
        <div v-for="tab in tabs" :key="tab.href">
          <!-- <span v-show="tab.current">{{ tab.name }}</span> -->
          <div class="mt-4 pr-3">
            <div v-if="tab.current && tab.href == 0">
              <AssetsCard :List="banks" />
            </div>
            <div v-if="tab.current && tab.href == 1">
              <AssetsCard :List="cards" />
            </div>
            <div v-if="tab.current && tab.href == 2">
              <AssetsCard :List="stock" />
            </div>
            <div v-if="tab.current && tab.href == 3">
              <AssetsCard :List="liability" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TabsInPill from "@/components/TabsInPill.vue";
import AssetsCard from "@/components/grid-list/AssetsCard.vue";

import { onMounted, ref } from "vue";

import type { Asset } from "@/types";

const tabs = ref([
  { name: "은행", href: 0, current: true },
  { name: "카드", href: 1, current: false },
  { name: "증권", href: 2, current: false },
  { name: "부채", href: 3, current: false },
]);

/**  은행 */
const banks = ref<Asset[]>([
  {
    id: 0,
    name: "국민은행",
    dsc: "계좌",
    amount: 100000,
    img: "/src/assets/image/bank/kookmin.png",
    user: "luke",
    share: false,
    cntn: "테스트용",
  },
]);

const cards = ref<Asset[]>([
  {
    id: 0,
    name: "롯데카드",
    dsc: "신용",
    amount: 1000000,
    img: "/src/assets/image/card/lotte.jpg",
    user: "luke",
    share: false,
    payDate : 5,
    cntn: "테스트용",
  },
]);

const stock = ref<Asset[]>([
  {
    id: 0,
    name: "KB증권",
    dsc: "증권",
    amount: 10_000_000,
    img: "/src/assets/image/bank/kookmin.png",
    user: "luke",
    share: false,
    cntn: "테스트용",
  },
]);

const liability = ref<Asset[]>([
    {
    id: 0,
    name: "주택대출",
    dsc: "부채",
    amount: 160_000_000,
    img: "/src/assets/image/liability/hf.jpg",
    user: "luke",
    share: false,
    cntn: "테스트용",
  },
])


onMounted(()=>{
    // 은행, 카드, 증권, 부채 List 서버에서 데이터 호출
})


</script>
