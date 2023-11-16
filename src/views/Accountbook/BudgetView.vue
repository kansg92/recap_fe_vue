<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">2023년도 예산</span>
    </header>
    <main class="pl-4 pt-2 border h-screen">
      <TabsInPill :tabs="tabs" />
      <div class="mt-2">
        <div v-for="tab in tabs" :key="tab.href">
          <div v-show="tab.current && tab.href == 0">
            {{ tab.name }}
            <table class="border mt-2">
              <thead>
                <tr>
                  <td class="border">항목</td>
                  <td class="border">내용</td>
                  <td class="border">금액</td>
                  <td class="border">나가는일자 (종료일자 check)</td>
                  <td class="border">반복주기</td>
                  <td class="border">결제수단</td>
                  <td class="border">비고</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border">카데고리선택</td>
                  <td class="border">지출세부내용이름</td>
                  <td class="border">금액입력</td>
                  <td class="border">나가는날자 선택 (select box 1~30)</td>
                  <td class="border">종료일자선택 (달력선택input)</td>
                  <td class="border">결제수단(카드 계좌 등선택)</td>
                  <td class="border">비고내용입력</td>
                </tr>
                <tr>
                  <td colspan="7" class="border text-center">+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-show="tab.current && tab.href == 1">
            <StackedTable />
          </div>
          <div v-show="tab.current && tab.href == 2">
            <BasTable :tHead="tHead"/>
          </div>
          <div v-show="tab.current && tab.href == 3"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TabsInPill from "@/components/TabsInPill.vue";
import StackedTable from "@/components/table/StackedTable.vue";
import BasTable from "@/components/table/BasTable.vue";

const tabs = ref([
  { name: "수입", href: 0, current: true },
  { name: "지출", href: 1, current: false },
  { name: "저축", href: 2, current: false },
  { name: "투자", href: 3, current: false },
]);

const tHead = ["항목", "내용", "금액", "일자", "반복주기", "결제수단", "비고"];



</script>
