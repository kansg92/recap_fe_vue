<template>
  <div class="w-full h-full ">
    <div>
      <HeaderMain v-show="!sidebarOpen" />
      <SideBar v-show="sidebarOpen" />
    </div>
    <div class="py-4 px-6 ">
      <RouterView />
    </div>
    <footer class="relative mt-10">
      <FooterBar class="absolute bottom-0 w-full" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import HeaderMain from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import FooterBar from "./components/Footer.vue";
import { module } from "@/stores/ui";

const store = module();

const sidebarOpen = computed(() => store.sidebarOpen); // side bar show
</script>
