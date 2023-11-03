import { ref, computed } from "vue";
import { MutationType, defineStore } from "pinia";

export interface UiState {
  responsive: boolean;
  sidebarOpen: boolean;
  showTopbar: boolean;
}

export const module = defineStore("used", () => {
  const sidebarOpen = ref(false);

  const setOpen = (state: boolean) => {
    if (state) {
      sidebarOpen.value = true;
    } else {
      sidebarOpen.value = false;
    }
  };

  return { sidebarOpen, setOpen };
});
