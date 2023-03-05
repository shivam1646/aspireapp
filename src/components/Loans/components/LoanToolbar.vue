<template>
  <div class="row">
    <div class="text-h4">Loans</div>
    <q-space></q-space>
    <q-btn icon="add" @click="apply" color="primary" push>Apply</q-btn>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'src/store';

const store = useStore();

function apply() {
  store.commit('loan/SET_SHOW_APPLY_MODAL', true);
}
</script>
