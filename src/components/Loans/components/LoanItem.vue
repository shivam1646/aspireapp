<template>
  <q-card class="q-pa-md loan-item">
    <q-card-section>
      <q-list>
        <q-item>
          <q-item-section class="text-weight-bold">Amount:</q-item-section>
          <q-item-section side>{{ loan.amount }} $</q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="text-weight-bold">Tenure:</q-item-section>
          <q-item-section side>{{ loan.tenure }} months</q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="text-weight-bold">Status:</q-item-section>
          <q-item-section side>{{ loan.status }}</q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="text-weight-bold"
            >Remaining installments:</q-item-section
          >
          <q-item-section side>{{ loan.unpaidTenure }}</q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-separator />
    <q-card-actions align="right">
      <q-btn color="primary" push @click="showTransactionsModal = true"
        >View transactions</q-btn
      >
      <q-btn color="primary" v-if="loan.unpaidTenure" push @click="repay"
        >Repay</q-btn
      >
    </q-card-actions>
    <ViewTransactionsModal
      v-bind:loan-id="loan.id"
      v-model:show-transactions-modal="showTransactionsModal"
    />
  </q-card>
</template>

<script setup lang="ts">
import { useStore } from 'src/store';
import { Loan } from 'src/types/loan';
import { defineProps, computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import ViewTransactionsModal from './ViewTransactionsModal.vue';

interface Props {
  loan: Loan;
}

const props = defineProps<Props>();

const $q = useQuasar();
const store = useStore();

const loan = computed(() => props.loan);

const showTransactionsModal = ref<boolean>(false);

function repay(): void {
  try {
    store.dispatch('loan/repay', loan.value.id);
  } catch (err) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      position: 'top',
      icon: 'warning',
      message: err as string,
    });
  }
}
</script>

<style lang="scss">
.loan-item {
  width: 300px;
}
</style>
