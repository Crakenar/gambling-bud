import { defineStore } from "pinia";
import {ref} from "vue";

export const useAuthenticateStore = defineStore('authStore', () => {
    const isAuthenticated = ref<boolean>(false);
    const isAdmin = ref<boolean>(false); //later with a second jwt

    function setIsAuthenticated(new_value: boolean) {
        isAuthenticated.value = new_value;
    }

    function checkIfAuthenticated(): boolean {
        return isAuthenticated.value;
    }

    function setIsAdmin(new_value: boolean) {
        isAdmin.value = new_value;
    }



    return {
        isAuthenticated,
        isAdmin,
        setIsAuthenticated,
        checkIfAuthenticated,
        setIsAdmin,
    }
});
