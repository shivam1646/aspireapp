<template>
  <div>
    <CardsToolbar class="gt-sm" />
    <CardTabs v-model:tab="tab" class="gt-sm" />
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mycard">
        <MyDebitCards />
      </q-tab-panel>
      <q-tab-panel name="allcard">
        <AllDebitCards />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CardsToolbar from './components/CardsToolbar.vue';
import MyDebitCards from './components/MyDebitCards.vue';
import AllDebitCards from './components/AllDebitCards.vue';
import CardTabs from './components/CardTabs.vue';

const tab = ref<string>('mycard');
</script>
