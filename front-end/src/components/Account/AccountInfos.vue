<template>
  <div class="border rounded bg-gray-500 text-center">
    <h3 class="border-b h-16 flex justify-center items-center">
      Profile Information
    </h3>
    <div class="p-4">
      <div class="flex justify-between">
        <strong>Full Name</strong>
        <p>{{ getDisplayName() }}</p>
      </div>
      <div>

      </div>
    </div>
    <div class="p-4">
      <div class="flex justify-between">
        <strong>Email</strong> <p>{{ user.email }}</p>
      </div>
    </div>
    <div class="p-4">
      <div class="flex justify-between">
        <strong>Balance</strong> <p>{{ user.balance }}</p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import {useUserStore} from "@/stores/userStore";
import {storeToRefs} from "pinia";

const userStore = useUserStore();
const {user} = storeToRefs(userStore);
const {getDisplayName} = userStore;
</script>

<style scoped>

</style>
