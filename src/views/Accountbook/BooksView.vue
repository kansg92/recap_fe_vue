<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">가계부 작성</span>
    </header>
    <main class="pl-4 mt-4 border h-screen">
      <select class="p-2 mb-2">
        <option>11월 2023</option>
        <option>12월 2023</option>
      </select>
      <div class="pt-2 mb-2">
        <TabsInPill v-model:tabs="tabs" />
      </div>
      <table>
        <thead>
          <tr>
            <td class="border">날짜</td>
            <td class="border">분류</td>
            <td class="border">카테고리</td>
            <td class="border">상세카테고리</td>
            <td class="border">내용</td>
            <td class="border">금액</td>
            <td class="border">결제수단</td>
            <td class="border">할부</td>
            <td class="border">메모</td>
            <td class="border">태그</td>
            <td class="border">삭제</td>
            <td class="border">복제</td>
          </tr>
        </thead>
      </table>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TabsInPill from "@/components/TabsInPill.vue";


/** tabs  */
const tabs = ref([
  { name: "날짜별", href: 0, current: true },
  { name: "카테고리별", href: 1, current: false },
  { name: "자산별", href: 2, current: false },
]);
</script>
