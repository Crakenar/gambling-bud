import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navbar', () => {
    const sideBarOpen = ref<boolean>(false);

    const getSideBarOpen = (): boolean => {
        return sideBarOpen.value;
    }
    const toggleSidebar = () => {
        sideBarOpen.value = !sideBarOpen.value;
    }

    return { sideBarOpen, getSideBarOpen, toggleSidebar }
})
