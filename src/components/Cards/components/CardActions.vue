<template>
  <q-card class="card-actions q-pa-md" flat>
    <div v-for="action in actions" :key="action.id" class="card-actions__item">
      <q-img :src="action.img" width="32px"></q-img>
      <span>{{ action.text }}</span>
    </div>
  </q-card>
</template>

<script setup lang="ts">
export interface CardAction {
  id: number;
  text: string;
  img: string;
}

const actions: CardAction[] = [
  {
    id: 1,
    text: 'Freeze card',
    img: 'src/assets/freezecard.svg',
  },
  {
    id: 2,
    text: 'Set spend limit',
    img: 'src/assets/spendlimit.svg',
  },
  {
    id: 3,
    text: 'Add to GPay',
    img: 'src/assets/gpay.svg',
  },
  {
    id: 4,
    text: 'Replace card',
    img: 'src/assets/replacecard.svg',
  },
  {
    id: 5,
    text: 'Cancel card',
    img: 'src/assets/deactivatecard.svg',
  },
];
</script>

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
