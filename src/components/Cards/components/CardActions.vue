<template>
  <q-card class="card-actions q-pa-md" flat>
    <div class="card-actions__item">
      <q-img src="~assets/freezecard.svg" width="32px"></q-img>
      <span>Freeze card</span>
    </div>
    <div class="card-actions__item">
      <q-img src="~assets/spendlimit.svg" width="32px"></q-img>
      <span>Set spend limit</span>
    </div>
    <div class="card-actions__item">
      <q-img src="~assets/gpay.svg" width="32px"></q-img>
      <span>Add to GPay</span>
    </div>
    <div class="card-actions__item">
      <q-img src="~assets/replacecard.svg" width="32px"></q-img>
      <span>Replace card</span>
    </div>
    <div class="card-actions__item">
      <q-img src="~assets/deactivatecard.svg" width="32px"></q-img>
      <span>Cancel card</span>
    </div>
  </q-card>
</template>

<style lang="scss">
.card-actions {
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  background-color: #edf3ff;
  width: 26rem;
}
.card-actions__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 4rem;
  font-size: 0.9rem;
}
@media (min-width: 1252px) and (max-width: 1395px) {
  .card-actions {
    width: 21rem;
  }
}
@media (max-width: 1024px) {
  .card-actions {
    width: 80vw;
    margin-left: 0px;
  }
}
</style>
