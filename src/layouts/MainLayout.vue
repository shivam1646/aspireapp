<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="main-layout__header">
      <q-toolbar class="lt-md">
        <q-space />
        <q-img src="~assets/logo-mobile.svg" width="25px" />
      </q-toolbar>
      <div class="main-layout__header-content lt-md">
        <div v-if="route.meta.isCard">
          <CardsToolbar />
          <CardTabs v-model:tab="tab" />
          <CardCarousel />
        </div>
        <div v-else>
          <div class="q-mb-xs text-h4 text-weight-bolder">Aspire</div>
          <div class="text-white q-mt-sm">
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </div>
        </div>
      </div>
    </q-header>
    <q-footer bordered class="bg-white text-black">
      <q-tabs class="lt-md" no-caps align="justify">
        <q-route-tab name="Home">
          <q-img src="~assets/homemobile.svg" width="24px" height="24px" />
          <span style="font-size: 12px; color: #dddddd">Home</span>
        </q-route-tab>
        <q-route-tab name="Cards" to="/cards">
          <q-img src="~assets/card.svg" width="24px" height="24px" />
          <span style="font-size: 12px; color: #dddddd">Cards</span>
        </q-route-tab>
        <q-route-tab name="Payments">
          <q-img src="~assets/paymentsmobile.svg" width="24px" height="24px" />
          <span style="font-size: 12px; color: #dddddd">Payments</span>
        </q-route-tab>
        <q-route-tab name="Loans" to="/loans">
          <q-img src="~assets/creditmobile.svg" width="24px" height="24px" />
          <span style="font-size: 12px; color: #dddddd">Loans</span>
        </q-route-tab>
      </q-tabs>
    </q-footer>
    <MainDrawer />
    <q-page-container>
      <q-page class="column main-layout__page">
        <q-card class="q-pa-xl main-layout__card" flat><router-view /></q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MainDrawer from './components/MainDrawer.vue';
import CardsToolbar from 'src/components/Cards/components/CardsToolbar.vue';
import CardTabs from 'src/components/Cards/components/CardTabs.vue';
import CardCarousel from 'src/components/Cards/components/CardCarousel.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const tab = ref<string>('mycard');
</script>

<style lang="scss">
.main-layout__header {
  background-color: initial;
}

.main-layout__header-content {
  padding: 0 1.5rem;
}

@media (max-width: $breakpoint-md-min) {
  .main-layout__header {
    background-color: $dark;
    padding-bottom: 4rem;
    z-index: 0;
  }

  .main-layout__page {
    align-items: flex-start;
    margin-top: -2rem;
  }

  .main-layout__card {
    width: 100vw;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }
}
</style>
