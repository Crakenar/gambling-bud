<template>
  <main>
    <section class="h-screen">
      <div class="container h-full px-6 py-24">
        <div
            class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="w-full"
                alt="Phone image"/>
          </div>
          <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
            <div class="mb-10">
              <ul class="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg flex shadow dark:divide-gray-700 dark:text-gray-400">
                <li v-for="(tab, index) in Object.keys(TabsEnum)" :key="tab" class="w-full">
                  <button @click="changeTab(index)"  :class="selectedTab === index ? 'dark:text-white dark:bg-gray-600' : ''"
                          class="inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal
                   text-white shadow-[0_10px_18px_8px_#3b71ca]
                    focus:outline-none focus:ring-0 active:bg-primary-700">{{ tab }}</button>
                </li>
              </ul>
            </div>
            <LoginForm v-if="selectedTab === TabsEnum.LOGIN.index" />
            <RegisterForm v-if="selectedTab === TabsEnum.REGISTER.index" @switch-tab="changeTab(TabsEnum.LOGIN.index)" />
            <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t
                  before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>
            <GoogleOAuth />
          </div>
        </div>
      </div>
      <RegisterForm v-if="registerModal"/>
    </section>
  </main>
</template>

<script setup lang="ts">
import {ref} from "vue";
import RegisterForm from "@/components/Home/RegisterForm.vue";
import LoginForm from "@/components/Home/LoginForm.vue";
import GoogleOAuth from "@/components/Home/GoogleOAuth.vue"
import {TabEnum} from "@/Interface/TabInterface";

const TabsEnum: TabEnum = Object.freeze({
  LOGIN: {
    index: 0,
    name: 'Login'
  },
  REGISTER: {
    index: 1,
    name: 'Register'
  },
})

const selectedTab = ref<number>(0);
const changeTab = (index: number): void => {
  selectedTab.value = index;
}
const registerModal = ref<boolean>(false);

</script>
