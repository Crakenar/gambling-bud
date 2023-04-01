<template>
  <div class="p-6 mb-20">
    <div id="dashboard">
      <LittleCard title="Test" :item-value="256">
        <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
          <path
              d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
        </svg>
      </LittleCard>
      <LittleCard title="Test" :item-value="256">
        <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
          <path
              d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
        </svg>
      </LittleCard>
      <LittleCard title="Test" :item-value="256">
        <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
          <path
              d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
        </svg>
      </LittleCard>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full xl:w-1/3 px-3">
          <p class="text-xl font-semibold mb-4 text-white">Recent Games</p>
          <div class="w-full bg-white border rounded-lg p-4">
            <div class="w-full bg-white-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4">
              <div>
                <p class="font-semibold text-xl">Trent Murphy</p>
                <p>Product 1</p>
              </div>
              <span class="text-green-500 font-semibold text-lg">$25.00</span>
            </div>

            <div class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4">
              <div>
                <p class="font-semibold text-xl">Joseph Brent</p>
                <p>Product 34</p>
              </div>
              <span class="text-red-500 font-semibold text-lg">$74.99</span>
            </div>

            <div class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4">
              <div>
                <p class="font-semibold text-xl">Jacob Bator</p>
                <p>Product 23</p>
              </div>
              <span class="text-green-500 font-semibold text-lg">$14.95</span>
            </div>

            <div class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2">
              <div>
                <p class="font-semibold text-xl">Alex Mason</p>
                <p>Product 66</p>
              </div>
              <span class="text-green-500 font-semibold text-lg">$44.99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LittleCard from "@/components/Widgets/LittlleCard.vue";


</script>

<style scoped>

</style>
