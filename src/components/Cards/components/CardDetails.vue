<template>
  <q-card class="card-details" flat>
    <div class="row flex-center q-pa-lg">
      <q-img src="~assets/carddetails.svg" width="24px"></q-img>
      <span class="q-ml-md">Card details</span>
      <q-space></q-space>
      <q-img
        :src="isExpanded ? '~assets/up-arrow.svg' : '~assets/down-arrow.svg'"
        width="20px"
        class="card-details__expand-btn"
        @click="isExpanded = !isExpanded"
      ></q-img>
    </div>
    <q-slide-transition>
      <div v-show="isExpanded">
        <q-card-section class="text-subitle2 card-details--expanded">
          No details available. Coming soon...
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isExpanded = ref<boolean>(false);
</script>

<style lang="scss">
.card-details {
  width: 26rem;
  border-radius: 0.5rem;
  background-color: #edf3ff;
  color: $drawer;
  border: 1px solid #f5f5f5;
}
.card-details--expanded {
  background-color: white;
}
.card-details__expand-btn {
  cursor: pointer;
}
@media (min-width: 1252px) and (max-width: 1395px) {
  .card-details {
    width: 21rem;
  }
}
@media (max-width: 1024px) {
  .card-details {
    width: 80vw;
    margin-left: 0px;
  }
}
</style>
