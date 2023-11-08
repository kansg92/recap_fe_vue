import { ref, computed } from "vue";
import { MutationType, defineStore } from "pinia";

export interface UiState {
  responsive: boolean;
  sidebarOpen: boolean;
  showTopbar: boolean;
}

export const module = defineStore("used", () => {

  const sidebarOpen = ref(false);
  const showTopbar = ref(true);
  const setSide = (state: boolean) => {
    if (state) {
      sidebarOpen.value = true;
    } else {
      sidebarOpen.value = false;
    }
  };
  const setTop = (state: boolean) => {
    if (state) {
      showTopbar.value = true;
    } else {
      showTopbar.value = false;
    }
  };

  return { sidebarOpen, showTopbar,setSide,setTop };
});


export const sidebarContents = defineStore("sidebar", ()=>{

  type Contents = {
    name : string,
    href : string,
    icon : string
  }
  const sideContent = ref<Contents[]>()

  const setContents = (content:Contents[]) =>{
    sideContent.value = content
  }

  return {sideContent, setContents};
});
