<template>
  <div class="p-6 mb-12">
    <div id="dashboard-widgets" class="grid sm:max-md:grid-cols-1 lg:grid-cols-3 gap-4 m-5">
      <LittleCard title="Number of games played" :item-value="256" :icon="'mdi:youtube'" :color="''"
      />
      <LittleCard title="Balance gains" :item-value="256" :icon="'material-symbols:perm-data-setting-outline-rounded'" :color="'green'"
      />
      <LittleCard title="Balance Lost" :item-value="-256" :icon="'mdi:youtube'" :color="'red'"
      />
    </div>
    <div>
      <GamesHistory />
    </div>
  </div>
</template>

<script setup lang="ts">
import LittleCard from "@/components/Widgets/LittlleCard.vue";
import GamesHistory from "@/components/Dashboard/GamesHistory.vue";


</script>

<style scoped>

</style>
