<template>
  <q-card class="transaction-list" flat>
    <div class="row flex-center q-pa-lg">
      <q-img src="~assets/recent.svg" width="24px"></q-img>
      <span class="q-ml-md">Recent transactions</span>
      <q-space></q-space>
      <q-img
        v-if="isExpanded"
        src="~assets/up-arrow.svg"
        width="20px"
        class="transaction-list__expand-btn"
        @click="isExpanded = !isExpanded"
      ></q-img>
      <q-img
        v-else
        src="~assets/down-arrow.svg"
        width="20px"
        class="transaction-list__expand-btn"
        @click="isExpanded = !isExpanded"
      ></q-img>
    </div>
    <q-slide-transition>
      <q-list v-show="isExpanded" class="transaction-list--expanded">
        <div
          class="column q-pa-sm"
          v-for="(txn, index) in [1, 2, 3]"
          :key="txn"
        >
          <q-item class="flex justify-between">
            <div class="row">
              <div class="flex items-start gt-sm">
                <q-avatar size="48px" style="background-color: #00d6b51a">
                  <q-img src="~assets/flights.svg" width="16px"></q-img>
                </q-avatar>
              </div>
              <div class="column q-ml-md justify-start">
                <span class="text-weight-medium">Hamleys</span>
                <q-item-label caption lines="1"> 20 May 2020 </q-item-label>
                <div class="row q-mt-sm">
                  <q-avatar size="24px" class="bg-secondary">
                    <q-img
                      src="~assets/business-and-finance.svg"
                      width="10px"
                    ></q-img>
                  </q-avatar>
                  <span
                    class="cursor-pointer text-caption text-weight-semibold q-mt-xs q-ml-xs"
                    >Refund on debit card</span
                  >
                </div>
              </div>
            </div>
            <div class="flex items-start">
              <q-item-label class="text-weight-bold">+ S$ 150</q-item-label>
            </div>
          </q-item>
          <q-separator v-if="index < 2"></q-separator>
        </div>
      </q-list>
    </q-slide-transition>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isExpanded = ref<boolean>(false);
</script>

<style lang="scss">
.transaction-list {
  width: 26rem;
  border-radius: 0.5rem;
  background-color: #edf3ff;
  color: $drawer;
  border: 1px solid #f5f5f5;
}
.transaction-list__expand-btn {
  cursor: pointer;
}
.transaction-list--expanded {
  background-color: white;
}
@media (min-width: 1252px) and (max-width: 1395px) {
  .transaction-list {
    width: 21rem;
  }
}
@media (max-width: 1024px) {
  .transaction-list {
    width: 80vw;
    margin-left: 0px;
  }
}
</style>
