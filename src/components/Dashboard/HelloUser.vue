<template>
  <div class="lg:flex justify-between items-center">
    <p class="text-2xl font-semibold mb-2 lg:mb-0">{{ greetings}} &excl;</p>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
interface propsInterface {
  name: string | null
}
const props = defineProps<propsInterface>();

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
