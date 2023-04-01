<template>
  <div class="top-0 z-40">
    <div class="w-full h-20 px-6 border-b flex items-center justify-between">
      <!-- left navbar -->
      <div class="flex">
        <HelloUser :name="getDisplayName()" />
      </div>
      <!-- right navbar -->
      <div class="flex items-center relative">
        <Icon @click="openModal" icon="mdi:pig-variant-outline" :width="widthIcon"/>
        <img :src="user?.pictureLink" referrerpolicy="no-referrer" class="ml-4 w-12 h-12 rounded-full shadow-lg" @click="dropDownOpen = !dropDownOpen" alt="profile picture">
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
