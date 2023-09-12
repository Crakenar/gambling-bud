<template>
  <div :class="props.class">
    <div class="w-full bg-gray-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
      <div  class="pe-5">
        <Icon :icon="props.icon" :color="props.color" width="70"/>
      </div>
      <div class="">
        <p class="font-semibold text-3xl">{{ props.itemValue }}</p>
        <p>{{ props.title }}</p>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {Icon} from "@iconify/vue";

interface propsInterface {
  title: string,
  itemValue: number,
  icon: string
  color?: string,

  class?: string //  class="w-1/2 xl:w-1/4 px-3"
}

const props = defineProps<propsInterface>()
</script>

<style scoped>

</style>
