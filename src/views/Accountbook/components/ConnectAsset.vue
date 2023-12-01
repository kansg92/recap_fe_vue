<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-[100]">
      <div class="fixed top-1 inset-0 z-[100] w-screen overflow-y-auto">
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
        <div class="flex min-h-full items-baseline justify-center p-4 text-center sm:items-baseline sm:p-0">
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
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900 mb-4">자산 연결</DialogTitle>
                  <div class="mt-2 flex flex-col justify-start gap-y-4 ">
                    <div class="flex flex-col " @click="$emit('update:open', false)">
                        <div class="flex justify-between border-t py-3 items-center hover:bg-slate-100 hover:cursor-pointer ">
                        <p class="text-left text-gray-700 text-sm">연결취소</p>
                      </div>
                      <div class="flex justify-between border-t py-3 items-center hover:bg-slate-100 hover:cursor-pointer ">
                        <p class="text-left text-gray-700 text-sm">국민은행 월급통장</p>
                        <p class="text-right text-xs text-gray-700 items-center flex justify-end">계좌</p>
                      </div>
                      <div class="flex justify-between border-t py-3 items-center hover:bg-slate-100 hover:cursor-pointer ">
                        <p class="text-left text-gray-700 text-sm">신한은행 용돈통장</p>
                        <p class="text-right text-xs text-gray-700 items-center flex justify-end">계좌</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-1"></div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { onMounted } from "vue";
import type{ Asset } from "@/types";

const props =  defineProps<{
  open: boolean;
  card : Asset;
}>();

onMounted(()=>{
    console.log('card ===>', props.card)
})

</script>
