import { defineStore } from "pinia";
import {ref} from "vue";
import type {UserInterface} from "@/Interface/UserInterface";

export const useUserStore = defineStore('userStore', () => {
    const user = ref<UserInterface | null>(null);


    function setUser(new_user: UserInterface | null) {
        user.value = new_user;
    }

    function checkIfUserNull(): boolean {
        return !user.value;
    }
    function getDisplayName(): string | null {
        return `${user.value?.name} ${user.value?.lastname}`;
    }


    return {
        user,
        setUser,
        checkIfUserNull,
        getDisplayName,
    }
});
