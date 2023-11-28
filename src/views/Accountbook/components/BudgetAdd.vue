<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-[100]" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed w-screen inset-0 bg-gray-600 bg-opacity-5 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-[100] w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div>
                <!-- <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                </div> -->
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">예산 내역 추가</DialogTitle>
                  <form class="mt-2 flex">
                    <div class="mt-2 flex flex-col justify-start gap-y-6">
                      <p class="text-left text-sm text-gray-500">카데고리 :</p>
                      <p class="text-left text-sm text-gray-500">내용 :</p>
                      <p class="text-left text-sm text-gray-500">금액 :</p>
                      <p class="text-left text-sm text-gray-500">결제수단 :</p>
                      <p class="text-left text-sm text-gray-500">날짜 선택 :</p>
                      <p class="text-left text-sm text-gray-500">반복주기 :</p>
                      <p class="text-left text-sm text-gray-500">테그 :</p>
                      <p class="text-left text-sm text-gray-500">비고 :</p>
                    </div>
                    <div class="mt-2 flex flex-col justify-start">
                        <VueDatePicker v-model="date"></VueDatePicker>
                    </div>
                  </form>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 flex justify-end gap-2">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="open = false"
                >
                  저장
                </button>
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="open = false"
                >
                  취소
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const open = ref(true);

const date = ref();

</script>
