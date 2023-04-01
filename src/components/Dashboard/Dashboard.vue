<template>
  <div class="p-6 mb-12">
    <div id="dashboard">
      <LittleCard title="Number of games played" :item-value="256" :icon="'mdi:youtube'" :color="''" />
      <LittleCard title="Balance gains" :item-value="256" :icon="'material-symbols:perm-data-setting-outline-rounded'" :color="'green'"/>
      <LittleCard title="Balance Lost" :item-value="-256" :icon="'mdi:youtube'" :color="'red'"/>
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
