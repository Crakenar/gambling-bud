<template>
  <LoadingPage :loading="!user" :is-component="true">
    <InConstruction v-if="inDevelopment" />
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center m-5">
        <AccountSettings/>
        <AccountInfos/>
        <FriendList/>
      </div>
    </div>
  </LoadingPage>

</template>

<script setup lang="ts">
import LoadingPage from "@/components/Widgets/LoadingPage.vue";
import {useUserStore} from "@/stores/userStore";
import {storeToRefs} from "pinia";
import InConstruction from "@/components/Widgets/InConstruction.vue";
import {useConfigStore} from "@/stores/configStore";
import AccountInfos from "@/components/Account/AccountInfos.vue";
import FriendList from "@/components/Account/FriendList.vue";
import AccountSettings from "@/components/Account/AccountSettings.vue";

const userStore = useUserStore();
const configStore = useConfigStore();

const { user } = storeToRefs(userStore);
const {inDevelopment} = configStore
</script>

<style scoped>

</style>
