<template>
  <q-tabs
    class="q-mt-lg"
    indicator-color="info"
    :model-value="tab"
    @update:model-value="emit('update:tab', $event)"
    align="left"
  >
    <q-tab class="text-capitalize" name="mycard" label="My debit cards"></q-tab>
    <q-tab
      class="text-capitalize"
      name="allcard"
      label="All company cards"
    ></q-tab>
  </q-tabs>
</template>

<script setup lang="ts">
import { defineProps, computed, defineEmits } from 'vue';

export interface Props {
  tab: string;
}

const emit = defineEmits(['update:tab']);

const props = defineProps<Props>();
const tab = computed(() => props.tab);
</script>
