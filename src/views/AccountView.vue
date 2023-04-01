<template>
  <LoadingPage :loading="!user" :is-component="true">
    <div>ACCOUNT</div>
  </LoadingPage>
  <img
      src="/public/at-work.svg"
      class="w-full"
      alt="Phone image"/>
</template>

<script setup lang="ts">
import LoadingPage from "@/components/Widgets/LoadingPage.vue";
import {useUserStore} from "@/stores/userStore";
import {storeToRefs} from "pinia";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>

<style scoped>

</style>
