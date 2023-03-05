<template>
  <q-dialog :model-value="showApplyModal" persistent>
    <q-card class="q-pa-lg loan-form">
      <q-card-section>
        <div class="text-h5">New loan application</div>
      </q-card-section>
      <q-form @submit="apply">
        <q-card-section class="q-gutter-md">
          <q-input
            v-model.number="amount"
            type="number"
            label="Amount"
            placeholder="Enter amount *"
            :rules="[
              (v) => !!v || 'Amount is required',
              (v) => v > 0 || 'Amount should be greater than 0',
              (v) =>
                /^\d+$/.test(v.toString()) || 'Please enter integer values',
            ]"
          />
          <q-input
            v-model.number="tenure"
            type="number"
            label="Tenure"
            placeholder="Enter tenure *"
            :rules="[
              (v) => !!v || 'Tenure is required',
              (v) => v > 0 || 'Tenure should be greater than 0',
              (v) =>
                /^\d+$/.test(v.toString()) || 'Please enter integer values',
            ]"
          />
          <q-select
            v-model="type"
            :options="loanTypes"
            label="Loan type"
            placeholder="Enter loan type *"
            :rules="[(v) => !!v || 'Type is required']"
          ></q-select>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn @click="closeModal" flat>Cancel</q-btn>
          <q-btn type="submit" push color="primary">Submit</q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'src/store';
import { LoanType, LoanForm } from 'src/types/loan';
import { useQuasar } from 'quasar';

const loanTypes: LoanType[] = ['Home loan', 'Education loan', 'Personal loan'];

const amount = ref();
const tenure = ref();
const type = ref<LoanType>(loanTypes[0]);

const $q = useQuasar();
const store = useStore();

const showApplyModal = computed(() => store.state.loan.showApplyModal);

function closeModal(): void {
  store.commit('loan/SET_SHOW_APPLY_MODAL', false);
}

function apply(): void {
  const loan: LoanForm = {
    amount: amount.value,
    tenure: tenure.value,
    type: type.value,
  };
  store.dispatch('loan/apply', loan);
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    position: 'top',
    message: 'Loan applied',
  });
  closeModal();
}
</script>

<style lang="scss">
.loan-form {
  width: 50vw;
}
@media (max-width: $breakpoint-md-min) {
  .loan-form {
    width: 90vw;
  }
}
</style>
