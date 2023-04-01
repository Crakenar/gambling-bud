<template>
  <div class="top-0 z-40">
    <div class="w-full h-20 px-6 border-b flex items-center justify-between">
      <!-- left navbar -->
      <div class="flex">
        <HelloUser :name="getDisplayName()" />
      </div>
      <!-- right navbar -->
      <div class="flex items-center relative">
        <svg @click="openModal" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="fill-current mr-3 hover:text-blue-500"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
        <img :src="user?.pictureLink" referrerpolicy="no-referrer" class="w-12 h-12 rounded-full shadow-lg" @click="dropDownOpen = !dropDownOpen" alt="profile picture">
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
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { getDisplayName } = userStore;
const popUpOpen = ref<boolean>(false);

const openModal = (): void => {
  console.log('here')
  popUpOpen.value = !popUpOpen.value;
}
</script>

<style scoped>

</style>
