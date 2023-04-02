import { defineStore } from "pinia";
import {ref} from "vue";
import {useStorage} from "@vueuse/core";

interface accountSettingsInterface {
    public: boolean,
    emailNotifications: boolean
}
const STORAGE_SETTINGS = 'account-settings';

export const useConfigStore = defineStore('configStore', () => {
    const widthIcon = ref<number>(25);
    const inDevelopment = ref<boolean>(false)

    const accountSettings = useStorage<accountSettingsInterface>(STORAGE_SETTINGS, {
        public: false,
        emailNotifications: false
    }, localStorage, { mergeDefaults: true});

    function setAccountSettings(new_value: accountSettingsInterface) {
        accountSettings.value = new_value;
    }

    function getAccountSettings() {
        return JSON.parse(JSON.stringify(accountSettings.value));
    }

    function setInDevelopment(new_value: boolean) {
        inDevelopment.value = new_value
    }

    return {
        widthIcon,
        inDevelopment,
        setInDevelopment,
        accountSettings,
        setAccountSettings,
        getAccountSettings,
    }
});
