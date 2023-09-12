<template>
  <button
      @click="googleLogin"
      class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pt-3 pb-2.5 text-center
                   text-sm font-medium uppercase leading-normal text-white
                    transition duration-150 ease-in-out hover:bg-primary-600"
      style="background-color: #3b5998"
      data-te-ripple-init
      data-te-ripple-color="light">
    <img class="mr-2 h-3.5 w-3.5" src="../../assets/google_icon.svg" alt="">
    Continue with google
  </button>
</template>

<script setup lang="ts">
import AuthService from "@/services/AuthService";

const googleLogin = () => {
  AuthService.authGoogle();
};
</script>

<style scoped>

</style>
