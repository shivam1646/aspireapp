<template>
  <q-drawer :model-value="true" :width="340" class="app-drawer q-pa-xl">
    <q-img src="src/assets/aspire_logo.svg" width="125px"></q-img>
    <div class="headline q-mt-sm">
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </div>
    <q-list class="q-mt-xl">
      <q-item
        v-for="item in drawerItems"
        :key="item.text"
        clickable
        :to="item.link"
        class="q-my-lg no-padding"
      >
        <q-img :src="item.imgPath" width="24px" height="24px"></q-img>
        <div class="text-white q-ml-sm">{{ item.text }}</div>
      </q-item>
      <q-item class="q-my-lg no-padding" clickable @click="logout">
        <q-img src="src/assets/account.svg" width="24px" height="24px"></q-img>
        <div class="text-white q-ml-sm">Logout</div>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { useStore } from 'src/store';
import { useRouter } from 'vue-router';
import { drawerItems } from '../../constants';

const store = useStore();
const router = useRouter();

function logout() {
  store.dispatch('logout');
  router.push({ name: 'login' });
}
</script>

<style lang="scss">
.app-drawer {
  background-color: #0c365a;
}

.headline {
  color: rgba(255, 255, 255, 0.3);
  font-size: 15px;
}
</style>
