<template>
  <LoadingPage :loading="!user" :is-component="true">
    <InConstruction v-if="inDevelopment" />
    <div v-else>ACCOUNT</div>
  </LoadingPage>

</template>

<script setup lang="ts">
import LoadingPage from "@/components/Widgets/LoadingPage.vue";
import {useUserStore} from "@/stores/userStore";
import {storeToRefs} from "pinia";
import InConstruction from "@/components/Widgets/InConstruction.vue";
import {useConfigStore} from "@/stores/configStore";

const userStore = useUserStore();
const configStore = useConfigStore();

const { user } = storeToRefs(userStore);
const {inDevelopment} = configStore
</script>

<style scoped>

</style>
