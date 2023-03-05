<template>
  <q-card class="card-details" flat>
    <div class="row flex-center q-pa-lg">
      <q-img src="~assets/carddetails.svg" width="24px"></q-img>
      <span class="q-ml-md">Card details</span>
      <q-space></q-space>
      <q-img
        v-if="isExpanded"
        src="~assets/up-arrow.svg"
        width="20px"
        class="card-details__expand-btn"
        @click="isExpanded = false"
      ></q-img>
      <q-img
        v-else
        src="~assets/down-arrow.svg"
        width="20px"
        class="card-details__expand-btn"
        @click="isExpanded = true"
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
