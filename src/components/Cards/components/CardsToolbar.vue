<template>
  <div class="row flex-center">
    <div class="column">
      <span class="toolbar__title">Available balance</span>
      <div class="row q-mt-sm flex-center">
        <div class="toolbar__currency-unit">S$</div>
        <span class="toolbar__currency">3000</span>
      </div>
    </div>
    <q-space></q-space>
    <q-btn
      color="secondary"
      class="text-capitalize toolbar__new-card"
      unelevated
    >
      <q-img src="src/assets/box.svg" width="16px" class="q-mr-sm"></q-img>
      New card</q-btn
    >
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.toolbar__title {
  color: $text;
}
.toolbar__currency-unit {
  width: 2.5rem;
  color: white;
  text-align: center;
  border-radius: 0.3rem;
  background-color: $primary;
}
.toolbar__currency {
  font-size: 1.5rem;
  font-weight: bold;
  color: $text;
  margin-left: 0.5rem;
}
@media (max-width: $breakpoint-md-min) {
  .toolbar__new-card {
    background-color: $dark !important;
    color: #23cefd !important;
  }
  .toolbar__title,
  .toolbar__currency {
    color: white;
  }
}
</style>
