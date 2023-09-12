<template>
  <div class="top-0 z-40">
    <div class="w-full h-20 px-6 flex items-center justify-between">
      <!-- left navbar -->
      <div class="flex">
        <HelloUser :name="getDisplayName()" />
      </div>
      <!-- right navbar -->
      <div class="flex items-center relative">
        <Icon @click="openModal" icon="mdi:pig-variant-outline" :width="widthIcon"/>
        <img v-if="user?.pictureLink" :src="user?.pictureLink" referrerpolicy="no-referrer" class="me-2 w-12 h-12 ring-4 ring-gray-300 rounded-full shadow-lg" alt="profile picture">
        <Icon v-else class="ml-4" icon="mdi:account-circle-outline" width="65"/>
      </div>
    </div>
  </div>
<!--  <ConfirmPopUp :open-popup="popUpOpen" @cancel="openModal" />-->
  <Modal :open-modal="popUpOpen" @cancel="openModal" @validate="openModal" />
</template>

<script setup lang="ts">

import {ref} from "vue";
import {useUserStore} from "@/stores/userStore";
import {storeToRefs} from "pinia";
import HelloUser from "@/components/Dashboard/HelloUser.vue";
import ConfirmPopUp from "@/components/Widgets/ConfirmPopUp.vue";
import Modal from "@/components/Widgets/SimpleModal.vue";
import {Icon} from "@iconify/vue";
import {useConfigStore} from "@/stores/configStore";
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { getDisplayName } = userStore;

const configStore = useConfigStore();
const { widthIcon } = configStore;
const popUpOpen = ref<boolean>(false);

const openModal = (): void => {
  popUpOpen.value = !popUpOpen.value;
}
</script>

<style scoped>

</style>
