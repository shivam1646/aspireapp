<template>
  <div>
    <q-carousel v-model="slide" animated class="card-carousel">
      <q-carousel-slide name="visa" class="no-padding card-carousel__slide">
        <DebitCard card="visa" />
      </q-carousel-slide>
      <q-carousel-slide
        name="mastercard"
        class="no-padding card-carousel__slide"
      >
        <DebitCard card="mastercard" />
      </q-carousel-slide>
    </q-carousel>
    <div class="row flex-center q-gutter-sm">
      <div
        class="carousel__nav-item"
        :class="{ 'carousel__nav-item--active': slide === 'visa' }"
        @click="slide = 'visa'"
      ></div>
      <div
        class="carousel__nav-item"
        :class="{ 'carousel__nav-item--active': slide === 'mastercard' }"
        @click="slide = 'mastercard'"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DebitCard from './DebitCard.vue';

const slide = ref<string>('visa');
</script>

<style lang="scss">
.card-carousel {
  height: 15rem;
}
.carousel__nav-item {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: $primary;
  opacity: 0.2;
  cursor: pointer;
}
.carousel__nav-item--active {
  width: 1rem;
  border-radius: 0.3rem;
  opacity: 1;
}
@media (max-width: $breakpoint-md-min) {
  .card-carousel {
    background-color: $dark;
    margin-top: 1rem;
    justify-content: center;
  }
  .card-carousel__slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
