import { defineStore } from "pinia";
import {ref} from "vue";

export const useDashboardStore = defineStore('dashboardStore', () => {
    const tab = ref<number>(0);

    function setTab(new_tab: number) {
        tab.value = new_tab;
    }

    return {
        tab,
        setTab
    }
});
