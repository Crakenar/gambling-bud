<template>
  <div class="border rounded bg-gray-500 text-center">
    <h3 class="border-b h-16 flex justify-center items-center">
      User Settings
    </h3>
    <div class="p-4">
      <ToggleButton :default-value="accountSettings.public" @toggle-button="publicSetting">
        <div class="lg:ml-64">
          Public Profile
        </div>
      </ToggleButton>
    </div>
    <div class="p-4">
      <ToggleButton :default-value="accountSettings.emailNotifications" @toggle-button="emailSetting">
        <div class="lg:ml-64">
          Notification Email
        </div>
      </ToggleButton>
    </div>
  </div>
  <Snackbar v-if="showSnackbar" @close-snackbar="showSnackbar = false">
    Preferences saved
  </Snackbar>
</template>

<script setup lang="ts">
import ToggleButton from "@/components/Atom/ToggleButton.vue";
import {ref, watchEffect} from "vue";
import {useConfigStore} from "@/stores/configStore";
import Snackbar from "@/components/Atom/Snackbar.vue";

const configStore = useConfigStore();
const { getAccountSettings, setAccountSettings } = configStore;

const accountSettings = ref(getAccountSettings());
const showSnackbar = ref<boolean>(false);
const publicSetting = (value: boolean) => {
  accountSettings.value.public = value;
  showSnackbar.value = true;

};

const emailSetting = (value: boolean) => {
  accountSettings.value.emailNotifications = value;
  showSnackbar.value = true;
}

watchEffect(() => {
  setAccountSettings(accountSettings.value)
})
</script>

<style scoped>

</style>
