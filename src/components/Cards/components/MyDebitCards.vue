<template>
  <q-card class="q-pa-lg my-debit-cards-wrapper">
    <div class="row no-padding justify-between q-gutter-md my-debit-cards">
      <div class="column q-gutter-md items-center">
        <CardCarousel class="gt-sm" />
        <CardActions />
      </div>
      <div class="column q-gutter-md items-center">
        <CardDetails />
        <RecentTransactions />
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import CardCarousel from './CardCarousel.vue';
import CardActions from './CardActions.vue';
import CardDetails from './CardDetails.vue';
import RecentTransactions from './RecentTransactions.vue';
</script>

<style lang="scss">
@media (max-width: 1251px) {
  .my-debit-cards {
    justify-content: center;
  }
}
@media (max-width: $breakpoint-md-min) {
  .transactions-table {
    width: 90vw;
  }
  .my-debit-cards-wrapper {
    box-shadow: none;
  }
}
</style>
