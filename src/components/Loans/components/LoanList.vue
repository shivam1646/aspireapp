<template>
  <div class="q-mt-xl flex q-gutter-md list">
    <LoanItem v-for="loan in loans" :key="loan.id" v-bind:loan="loan" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'src/store';
import LoanItem from './LoanItem.vue';

const store = useStore();

const loans = computed(() => store.getters['loan/loansByUser']);
</script>

<style lang="scss">
@media (max-width: $breakpoint-md-min) {
  .list {
    justify-content: center;
  }
}
</style>
