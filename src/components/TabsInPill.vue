<template>
  <div>
    <div class="sm:hidden">
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        v-model="selectedTab"
        @change="
          () => {
            setCurrent(tabs, selectedTab);
          }
        "
        class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option v-for="tab in tabs" :key="tab.href" :selected="tab.current">
          {{ tab.name }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <nav class="flex space-x-4" aria-label="Tabs">
        <a
          v-for="tab in tabs"
          :key="tab.name"
          @click="
            () => {
              setCurrent(tabs, tab);
              selectedTab = tab.name;
            }
          "
          :class="[
            tab.current
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-500 hover:text-gray-700 hover:bg-indigo-100',
            'rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer',
          ]"
          >{{ tab.name }}</a
        >
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps(["tabs"]);

const setCurrent = (tabs: any, tab: string | {current:boolean}) => {
  tabs.forEach((el: any) => {
    el.current = false;
    if (typeof(tab) == "string") {
      if (el.name == tab) {
        el.current = true;  
      }
    }else{
      tab.current = true;
    }
  });
};

const selectedTab = ref<string>(props.tabs[0].name);
</script>
