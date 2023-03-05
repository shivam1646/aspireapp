<template>
  <q-card class="bg-primary q-pa-md text-white text-weight-bold card" flat>
    <div class="row reverse q-mb-md">
      <q-img src="src/assets/debitcard.svg" width="83px" />
    </div>
    <div class="row q-mb-md">
      <span class="text-capitalize card__name">Mark Henry - {{ card }}</span>
    </div>
    <div class="row items-center q-mb-sm">
      <div class="card__number row q-mr-md" v-for="i in [0, 1, 2]" :key="i">
        <div
          class="card__number--masked q-mr-sm"
          v-for="j in [0, 1, 2, 3]"
          :key="j"
        ></div>
      </div>
      <div>2020</div>
    </div>
    <div class="row q-mb-md">
      <span>Thru: 12/20</span>
    </div>
    <div class="row reverse">
      <q-img src="src/assets/visa.svg" width="83px" />
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue';

export interface Props {
  card: string;
}

const props = defineProps<Props>();

const card = computed(() => props.card);
</script>

<style lang="scss">
.card {
  width: 26rem;
  border-radius: 0.5rem;
}
.card__number--masked {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: white;
}
.card__name {
  font-size: 1.5rem;
}
@media (max-width: $breakpoint-md-min) {
  .my-debit-cards {
    justify-content: center;
  }
}
@media (min-width: 1252px) and (max-width: 1395px) {
  .card {
    width: 21rem;
  }
}
@media (max-width: 570px) {
  .card {
    width: 21rem;
  }
}
</style>
