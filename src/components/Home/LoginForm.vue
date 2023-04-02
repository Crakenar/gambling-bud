<template>
  <!-- Email input -->
  <div class="relative mt-6 mb-6" data-te-input-wrapper-init>
    <div>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input v-model="loginForm.email" type="email" name="email" id="email"
             class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="name@company.com" required="">
    </div>
  </div>

  <!-- Password input -->
  <div class="relative mb-6" data-te-input-wrapper-init>
    <!--      <input-->
    <!--          type="password"-->
    <!--          class="peer block min-h-[auto] w-full rounded border border-blue-400 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"-->
    <!--          id="exampleFormControlInput33"-->
    <!--          placeholder="Password"/>-->
    <!--      <label-->
    <!--          for="exampleFormControlInput33"-->
    <!--          class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"-->
    <!--      >Password-->
    <!--      </label>-->
    <div>
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
      <input v-model="loginForm.password" type="password" name="password" id="password" placeholder="••••••••"
             class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             required="">
    </div>
  </div>

  <div class="mb-6 flex items-center justify-between">
    <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
          class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
          type="checkbox"
          value=""
          id="exampleCheck3"
          checked/>
      <label
          class="inline-block pl-[0.15rem] hover:cursor-pointer"
          for="exampleCheck3">
        Remember me
      </label>
    </div>
    <a
        href="#!"
        class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
    >Forgot password?</a
    >
  </div>

  <!-- Submit button -->

  <!--    <a-->
  <!--        @click="showRegister"-->
  <!--        class="button text-center inline-block w-full rounded px-7 mt-8 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal-->
  <!--                   text-white shadow-[0_10px_18px_8px_#3b71ca]"-->
  <!--        data-te-ripple-color="light">-->
  <!--      Register-->
  <!--    </a>-->
  <button
      @click="login"
      type="submit"
      class="inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal
                   text-white shadow-[0_10px_18px_8px_#3b71ca]
                    focus:outline-none focus:ring-0 active:bg-primary-700"
      data-te-ripple-init
      data-te-ripple-color="light">
    Sign in
  </button>
</template>

<script setup lang="ts">

import {ref} from "vue";
import type {loginInterface} from "@/Interface/AuthInterface";
import AuthService from "@/services/AuthService";
import router from "@/router";
import axios from "axios";
import CookieService from "@/services/CookieService";

const loginForm = ref<loginInterface>({
  email: '',
  password: '',
});

const login = async () => {
  await AuthService.login(loginForm.value).then(res => {
    if (res.data.success) {
      router.replace({ path: '/dashboard' })
    }
  });
}
</script>

<style scoped>

</style>
