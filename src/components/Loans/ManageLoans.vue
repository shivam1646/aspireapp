<template>
  <div>
    <LoanToolbar />
    <LoanList v-if="loans.length" />
    <NoLoans v-else />
    <ApplyLoanModal />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'src/store';
import ApplyLoanModal from './components/ApplyLoanModal.vue';
import LoanToolbar from './components/LoanToolbar.vue';
import NoLoans from './components/NoLoans.vue';
import LoanList from './components/LoanList.vue';
import { getCache } from 'src/utils';

const store = useStore();

const loans = computed(() => store.getters['loan/loansByUser']);

onMounted(() => {
  // get date from local storage into vuex state
  store.commit('loan/SET_LOANS', getCache('loans'));
  store.commit('loan/SET_TRANSACTIONS', getCache('transactions'));
});
</script>
