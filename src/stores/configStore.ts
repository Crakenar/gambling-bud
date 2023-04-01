import { defineStore } from "pinia";
import {ref} from "vue";

export const useConfigStore = defineStore('configStore', () => {
    const widthIcon = ref<number>(25);
    const inDevelopment = ref<boolean>(true)

    function setInDevelopment(new_value: boolean) {
        inDevelopment.value = new_value
    }

    return {
        widthIcon,
        inDevelopment,
        setInDevelopment
    }
});
