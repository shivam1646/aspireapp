<template>
  <q-dialog :model-value="showTransactionsModal" persistent>
    <q-card class="q-pa-lg transactions-table">
      <q-card-section class="flex flex-center">
        <div class="text-h5">Transactions</div>
        <q-space></q-space>
        <q-btn icon="close" flat round dense @click="closeModal" />
      </q-card-section>
      <q-markup-table v-if="transactions(loanId).length">
        <thead>
          <tr>
            <th class="text-left">Principal</th>
            <th class="text-left">Interest</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tr in transactions(loanId)" :key="tr.id">
            <td class="text-left">{{ tr.principal }}</td>
            <td class="text-left">{{ tr.interest }}</td>
          </tr>
        </tbody>
      </q-markup-table>
      <div v-else class="flex flex-center text-h4 q-mt-xl">
        No transactions done yet...
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';
import { useStore } from 'src/store';

interface Props {
  loanId: string;
  showTransactionsModal: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:showTransactionsModal']);
const store = useStore();

const loanId = computed(() => props.loanId);
const transactions = computed(() => store.getters['loan/transactionsByLoanId']);

function closeModal() {
  emit('update:showTransactionsModal', false);
}
</script>

<style lang="scss">
.transactions-table {
  width: 50vw;
}
@media (max-width: $breakpoint-md-min) {
  .transactions-table {
    width: 90vw;
  }
}
</style>
