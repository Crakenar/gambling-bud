<template>
  <div class="w-full h-20 px-6 flex items-center justify-between">
    <!-- left navbar -->
    <div class="flex">
      {{props.user.name}} {{props.user.lastName}}
    </div>
    <!-- right navbar -->
    <div class="flex items-center relative">
      <img v-if="props.user.profileImage" :src="props.user.profileImage" referrerpolicy="no-referrer" class="ml-4 w-14 h-14 ring-4 ring-gray-300 rounded-full shadow-lg" alt="profile picture">
      <Icon v-else icon="mdi:account-circle-outline" width="60"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Icon} from "@iconify/vue";

interface userInterface {
  id: string,
  name: string,
  lastName: string,
  profileImage: string,
  favorite: boolean
}
interface propsInterface {
  user: userInterface
}

const props = defineProps<propsInterface>();
</script>

<style scoped>

</style>
