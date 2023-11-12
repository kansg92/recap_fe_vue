<template>
  <div>
    <header class="flex pl-4 py-2 h-10 items-center bg-slate-300">
      <span class="font-semibold">2023년도 예산</span>
    </header>
    <main class="pl-4 mt-4 border h-screen">
      <table class="border mt-2">
        <thead>
          <tr>
            <td class="border">항목</td>
            <td class="border">내용</td>
            <td class="border">금액</td>
            <td class="border">분류</td>
            <td class="border">결제담당(돈내는사람?)</td>
            <td class="border">나가는일자</td>
            <td class="border">종료일자</td>
            <td class="border">비고</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border">카데고리선택</td>
            <td class="border">지출세부내용이름</td>
            <td class="border">금액입력</td>
            <td class="border">고정 / 변동 선택</td>
            <td class="border">승기 / 예나 선택</td>
            <td class="border">나가는날자 선택 (select box 1~30)</td>
            <td class="border">종료일자선택 (달력선택input)</td>
            <td class="border">비고내용입력</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup lang="ts"></script>
