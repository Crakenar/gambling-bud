<template>
  <LoadingPage :loading="false" :is-component="true">
    <Pie :data="data" :options="options" />
  </LoadingPage>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import LoadingPage from "@/components/Widgets/LoadingPage.vue";

ChartJS.register(ArcElement, Tooltip, Legend)
const data = {
  labels: ['Win', 'Loose'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#DD1B16'],
      data: [60, 40]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>
