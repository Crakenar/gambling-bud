<template>
  <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 m-5">
    <div class="border rounded bg-gray-300">
      <WinLooseGraph />
    </div>
    <div class="border rounded bg-gray-300">
        <BalanceGraph/>
    </div>
    <div class="border rounded bg-gray-300 p-5">
      <GambleTypeWinPercentGraph/>
    </div>
  </div>
</template>

<script setup lang="ts">
import BalanceGraph from "@/components/Dashboard/Statistics/BalanceGraph.vue";
import WinLooseGraph from "@/components/Dashboard/Statistics/WinLooseGraph.vue";
import GambleTypeWinPercentGraph from "@/components/Dashboard/Statistics/GambleTypeWinPercentGraph.vue";
</script>

