<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs" v-model="selectedTab.name" @change="()=>{setCurrent(tabs, selectedTab)}" class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
        <option v-for="tab in tabs" :key="tab.href" :selected="tab.current">{{ tab.name }}</option>
      </select>
    </div>
    <div class="hidden sm:block ">
      <nav class="flex space-x-4" aria-label="Tabs">
        <a
          v-for="tab in tabs"
          :key="tab.name"
          @click="()=>{setCurrent(tabs,tab); selectedTab = tab}"
          :class="[tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700 hover:bg-indigo-100', 'rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer']"
          >{{ tab.name }}</a
        >
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props =  defineProps(["tabs"]);

const setCurrent = (tabs:any, tab:any) =>{
    tabs.forEach((el:any)=>{
        el.current = false;
    })
    if(typeof(tab) == 'string'){
      tabs.forEach((el:any)=>{
        if(el.name == tab){
          el.current = true
        }
    })
    }else{
      tab.current = true;
    }
    
    // console.log(tab)
}


const selectedTab = ref(props.tabs[0])


</script>
