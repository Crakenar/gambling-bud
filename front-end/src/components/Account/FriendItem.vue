<template>
  <div class="w-full h-20 px-6 flex items-center justify-between relative">
    <Icon @click="deleteFavorite" v-if="props.user.favorite" class="absolute cursor-pointer left-0 top-0" color="yellow" icon="mdi:cards-heart-outline" width="24"/>
    <div class="">
      {{props.user.name}} {{props.user.lastName}}
      <div class="mt-4 flex">
        <Icon @click="seeProfile" class="mx-2 cursor-pointer" icon="mdi:account-circle-outline" width="24"/>
        <Icon @click="launchPrivateGame" class="mx-2 cursor-pointer" icon="mdi:gamepad-square-outline" width="24"/>
        <Icon @click="deleteFriend" class="mx-2 cursor-pointer" icon="mdi:account-multiple-remove-outline" color="red" width="24"/>
      </div>

    </div>
    <div class="flex items-center relative">
      <img v-if="props.user.profileImage" :src="props.user.profileImage" referrerpolicy="no-referrer" class="me-2 w-12 h-12 ring-4 ring-gray-300 rounded-full shadow-lg" alt="profile picture">
      <Icon v-else icon="mdi:account-circle-outline" width="65"/>
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

const deleteFavorite = () => {

}

const deleteFriend = () => {

}

const launchPrivateGame = () => {

}

const seeProfile = () => {

}

</script>

<style scoped>

</style>
