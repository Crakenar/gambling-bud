<template>
  <LoadingPage :loading="loading" :is-component="false">
    <transition name="fade">
      <div class="space-y-4 md:space-y-6" action="#">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input v-model="registerForm.email" type="email" name="email" id="email"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="name@company.com" required="">
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input @input="checkPassword" v-model="registerForm.password" type="password" name="password" id="password"
                 placeholder="••••••••"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required="">
        </div>
        <div>
          <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
            password</label>
          <input v-model="registerForm.confirmPassword" type="confirm-password" name="confirm-password"
                 id="confirm-password" placeholder="••••••••"
                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required="">
        </div>
        <!--                <div class="flex items-start">-->
        <!--                  <div class="flex items-center h-5">-->
        <!--                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">-->
        <!--                  </div>-->
        <!--                  <div class="ml-3 text-sm">-->
        <!--                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>-->
        <!--                  </div>-->
        <!--                </div>-->
        <button
            :disabled="!validPassword"
            @click="register"
            type="submit"
            class="inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal
                   text-white shadow-[0_10px_18px_8px_#3b71ca]
                    focus:outline-none focus:ring-0 active:bg-primary-700"
            data-te-ripple-init
            data-te-ripple-color="light">
          Create account
        </button>
        <!--                <p class="text-sm font-light text-gray-500 dark:text-gray-400">-->
        <!--                  Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>-->
        <!--                </p>-->
      </div>
    </transition>
  </LoadingPage>
  <Snackbar v-if="accountRegistered">
      <p class="text-green-700">Account Registered</p>
  </Snackbar>
</template>

<script setup lang="ts">
import {ref} from "vue";
import AuthService from "@/services/AuthService";
import type {registerInterface} from "@/Interface/AuthInterface";
import router from "@/router";
import Snackbar from "@/components/Atom/Snackbar.vue";
import LoadingPage from "@/components/Widgets/LoadingPage.vue";

const passwordLength = ref<number>(0);
const containsEightCharacters = ref<boolean>(false);
const containsNumber = ref<boolean>(false);
const containsUppercase = ref<boolean>(false);
const containsSpecialCharacter = ref<boolean>(false);
const validPassword = ref<boolean>(false);
const loading = ref<boolean>(false)
const accountRegistered = ref<boolean>(false);

const registerForm = ref<registerInterface>({
  email: '',
  password: '',
  confirmPassword: '',
});

const emit = defineEmits<{
  (e: 'switchTab') :void
}>();

const checkPassword = () => {
  passwordLength.value = registerForm.value.password.length;
  // console.log(registerForm.value.password === registerForm.value.confirmPassword)
  // samePassword.value = registerForm.value.password === registerForm.value.confirmPassword
  const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  containsEightCharacters.value = passwordLength.value > 8;

  containsNumber.value = /\d/.test(registerForm.value.password);
  containsUppercase.value = /[A-Z]/.test(registerForm.value.password);
  containsSpecialCharacter.value = format.test(registerForm.value.password);
  validPassword.value = containsEightCharacters.value === true &&
      containsSpecialCharacter.value === true &&
      containsUppercase.value === true &&
      containsNumber.value === true
      // samePassword.value === true;
}

const register = async () => {
  if (validPassword.value) {
    loading.value = true;
   await AuthService.register(registerForm.value).then(res => {
      if (res.data.success) {
        //TODO => make popup good
        accountRegistered.value = res.data.success
        // router.replace({ path: '/dashboard' })
        emit('switchTab');
      }
      loading.value = false;
    }).catch(e => {
      console.log('erreur register', e);
      loading.value = false;
    });
  }
}
</script>

<style scoped>
</style>
