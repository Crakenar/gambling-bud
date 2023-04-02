<template>
  <div class="border rounded bg-gray-500 text-center">
    <h3>
      Profile Information
    </h3>
  </div>
</template>

<script setup lang="ts">

import {useUserStore} from "@/stores/userStore";
import {storeToRefs} from "pinia";

const userStore = useUserStore();
const {user} = storeToRefs(userStore);
</script>

<style scoped>

</style>
