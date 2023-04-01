import { defineStore } from "pinia";
import {ref} from "vue";

export const useConfigStore = defineStore('configStore', () => {
    const widthIcon = ref<number>(25);


    return {
        widthIcon
    }
});
