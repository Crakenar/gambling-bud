<template>
  <div
      class="bottom-16 left-[50%] fadeInBottom
    mx-2 sm:mx-auto max-w-sm bg-blue-200 p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap">
    <div class="inline-flex items-center text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd" />
      </svg>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

interface propsInterface {
  color?: string
}
const props = defineProps<propsInterface>();
const emit = defineEmits<{
  (e: 'closeSnackbar'): void,
}>();
const timer = ref<number>(3);
const countdown = () =>{
  if (timer.value > 0) {
    setTimeout(() => {
      timer.value--;
      countdown();
    }, 1000);
  }else {
    emit('closeSnackbar');
  }
};

onMounted(() => {
    timer.value = 3
    countdown();
})
</script>

<style scoped lang="scss">
.fadeInBottom {
  position: absolute;
  animation: fadeInBottom 3s linear forwards;
}
@keyframes fadeInBottom {
  0%,100% { opacity: 0; }
  50% { opacity: 1; }
}
</style>
