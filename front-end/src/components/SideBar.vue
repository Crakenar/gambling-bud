<template>
  <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
  </button>

  <aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <router-link to="/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <Icon icon="mdi:chart-pie" :width="widthIcon"/>
            <span class="ml-3">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/notifications" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <Icon icon="mdi:inbox-outline" :width="widthIcon"/>
            <span class="flex-1 ml-3 whitespace-nowrap">Inbox - Notifications</span>
<!--            <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>-->
          </router-link>
        </li>
        <li>
          <router-link to="/account" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <Icon icon="mdi:account-circle-outline" :width="widthIcon"/>
            <span class="flex-1 ml-3 whitespace-nowrap">User</span>
          </router-link>
        </li>
        <li>
          <router-link to="/games" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <Icon icon="mdi:gamepad-variant-outline" :width="widthIcon"/>
            <span class="flex-1 ml-3 whitespace-nowrap">Games</span>
          </router-link>
        </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
        <li>
          <router-link to="/documentation" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <Icon icon="mdi:book-open-blank-variant" :width="widthIcon"/>
            <span class="ml-3">Documentation</span>
          </router-link>
        </li>
        <li>
          <router-link to="/components" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <Icon icon="mdi:bookshelf" :width="widthIcon"/>
            <span class="ml-3">Components</span>
          </router-link>
        </li>
        <li>
          <router-link to="/help" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <Icon icon="mdi:frequently-asked-questions" :width="widthIcon"/>
            <span class="ml-3">Help</span>
          </router-link>
        </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
        <li>
          <a @click="logout" href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <Icon icon="material-symbols:power-settings-new-outline" color="red" :width="widthIcon"/>
            <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">

import AuthService from "@/services/AuthService";
import {Icon} from "@iconify/vue";
import {useConfigStore} from "@/stores/configStore";
import {useAuthenticateStore} from "@/stores/authStore";

const configStore = useConfigStore();
const authStore = useAuthenticateStore();

const {widthIcon} = configStore;
const { setIsAuthenticated } = authStore;
const logout = () => {
  //TODO Put it in AuthService
  // cannot use it in class so i do it here
  setIsAuthenticated(false);
  AuthService.logout();
}
</script>

<style scoped>

</style>
