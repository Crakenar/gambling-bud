<template>
  <div class="lg:flex justify-between items-center mb-6">
    <p class="text-2xl font-semibold mb-2 lg:mb-0">{{ greetings}} &excl;</p>
    <button class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">View Logs</button>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  name: String
});

const greetings = computed(() => {
  const hours = new Date().getHours();
  if (hours < 12)
    return `Good Morning ${props.name}` ;
  else if (hours >= 12 && hours <= 17)
    return `Good Afternoon ${props.name}`;
  else if (hours >= 17 && hours <= 24)
    return `Good Evening ${props.name}`;
});
</script>

<style scoped>

</style>
