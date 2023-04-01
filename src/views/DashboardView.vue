<template>
  <TabsDashboard :defaultTab="tab" @change-tab="changeTab"/>
  <Dashboard v-if="tab === TABS.DASHBOARD"/>
  <StatsDashboard v-if="tab === TABS.STATS" />
</template>

<script setup lang="ts">
import Dashboard from "@/components/Dashboard/Dashboard.vue";
import TabsDashboard from "@/components/Dashboard/TabsDashboard.vue";
import StatsDashboard from "@/components/Dashboard/Statistics/StatsDashboard.vue";
import {useDashboardStore} from "@/stores/dashBoardStore";
import {storeToRefs} from "pinia";

const dashboardStore = useDashboardStore();
const { tab } = storeToRefs(dashboardStore);
const { setTab } = dashboardStore
const TABS = {
  DASHBOARD: 0,
  STATS: 1
}

const changeTab = (event: number): void => {
  setTab(event);
}
</script>
