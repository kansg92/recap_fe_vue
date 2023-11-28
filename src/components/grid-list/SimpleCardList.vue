<template>
  <div>
    <h2 class="text-sm font-medium text-gray-500">
      Pinned tags
      <div class="absolute right-4 lg:top-[150px] mt-1 bottom-2">
        <PlusCircleIcon class="w-10 h-10 text-green-600 hover:cursor-pointer" @click="addTags(tags)" />
      </div>
    </h2>

    <ul role="list" class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      <template v-for="tag in tags" :key="tag.name">
        <li class="col-span-1 flex rounded-md">
          <div :class="[tag.bgColor, 'flex w-12 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white  ']">
            {{ tag.initials }}
          </div>
          <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-y border-gray-200 bg-white">
            <div class="flex-1 truncate px-4 py-2 text-sm">
              <a :href="tag.href" class="font-medium text-gray-900 hover:text-gray-600">{{ tag.name }}</a>
            </div>
            <div class="flex-shrink-0 pr-2">
              <button
                type="button"
                class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span class="sr-only">Open options</span>
                <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div class="">
              <div class="triangle-topleft"></div>
              <div class="triangle-topright"></div>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { EllipsisVerticalIcon, PlusCircleIcon } from "@heroicons/vue/20/solid";

const proops = defineProps<{
  tags: {
    name: string;
    initials: string;
    href: string;
    bgColor: string;
  }[];
}>();

const addTags = (tags: { name: string; initials: string; href: string; bgColor: string }[]) => {
  proops.tags.push({
    name: "addTest",
    initials: "AT",
    href: "#",
    bgColor: "bg-blue-800",
  });
  console.log(tags)
};
</script>

<style scoped>
.triangle-topleft {
  border-top: 20px solid gray;
  border-right: 20px solid transparent;
  z-index: 10;
}

.triangle-topright {
  border-top: 20px solid gray;
  border-left: 20px solid transparent;
  rotate: 180deg;
}
</style>
