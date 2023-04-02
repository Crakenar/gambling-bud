<template>
  <div class="border rounded bg-gray-500 text-center">
    <h3 class="border-b h-16 flex justify-center items-center">
      Friend List
    </h3>
    <div v-for="friend in friendList" class="p-4" :key="friend.id">
      <FriendItem :user="friend" />
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import FriendItem from "@/components/Account/FriendItem.vue";

const friendList = ref([
  {
    id: '1',
    name: 'Benoit',
    lastName: 'BenoitLastName',
    profileImage: '',
    favorite: false
  },
  {
    id: '2',
    name: 'Olivier',
    lastName: 'OlivierLastName',
    profileImage: 'https://cdn.pixabay.com/photo/2020/01/20/04/41/nature-4779493_960_720.png',
    favorite: false
  },
  {
    id: '3',
    name: 'Eric',
    lastName: 'EricLastName',
    profileImage: '',
    favorite: true
  },
  {
    id: '4',
    name: 'Teo',
    lastName: 'TeoLastName',
    profileImage: 'https://cdn.pixabay.com/photo/2020/01/20/04/41/nature-4779493_960_720.png',
    favorite: false
  },
]);
//
// const orderByFavorites = computed(() => {
//   return friendList.value.sort((a, b) => b.favorite - a.favorite)
// });

const orderByFavorites = friendList.value.sort((a, b) => +b.favorite - +a.favorite);
</script>

<style scoped>

</style>
