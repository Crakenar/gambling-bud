<template>
  <ul class="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg flex shadow dark:divide-gray-700 dark:text-gray-400">
    <li v-for="(tab, index) in Object.keys(TabsEnum)" :key="tab" class="w-full">
      <a @click="changeTab(index)"  :class="selectedTab === index ? 'dark:text-white dark:bg-gray-600' : ''"
         class=" inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">{{ tab }}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {ref} from "vue";

interface TabInterface {
  index: number,
  name: string
}

interface TabEnum {
  [key: string]: TabInterface;
}
const TabsEnum: TabEnum = Object.freeze({
  DASHBOARD: {
    index: 0,
    name: 'Dashboard'
  },
  STATS: {
    index: 1,
    name: 'Statistics'
  },
})
const emit = defineEmits<{
  (e: 'changeTab', index: number): void,
}>()

interface propsInterface {
  defaultTab: number
}
const props = defineProps<propsInterface>();

const selectedTab = ref<number>(props.defaultTab)

const changeTab = (tabIndex: number) => {
  selectedTab.value = tabIndex;
  emit('changeTab', tabIndex);
};
</script>
