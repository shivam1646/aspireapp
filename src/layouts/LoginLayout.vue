<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="login-layout__header">
      <q-toolbar class="lt-md">
        <q-space />
        <q-img src="~assets/logo-mobile.svg" width="25px" />
      </q-toolbar>
      <div class="login-layout__header-content lt-md">
        <div class="q-mb-xs text-h4 text-weight-bolder">Aspire</div>
        <div class="text-white q-mt-sm">{{ route.meta.desc }}</div>
      </div>
    </q-header>
    <q-drawer :model-value="true" :width="340" class="app-drawer q-pa-xl">
      <q-img src="~assets/aspire_logo.svg" width="125px" />
      <div class="text-white q-mt-sm drawer__subtitle">
        {{ route.meta.desc }}
      </div>
    </q-drawer>
    <q-page-container>
      <q-page class="flex flex-center login-layout__page">
        <q-card class="q-pa-lg login-layout__card">
          <router-view />
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { getCache } from 'src/utils';

const store = useStore();
const route = useRoute();

onMounted(() => {
  store.commit('register/SET_USERS', getCache('user')); // gets users from local storage into vuex store
});
</script>

<style lang="scss">
.login-layout__header {
  background-color: initial;
}

.login-layout__header-content {
  padding: 0 1.5rem;
}

.login-layout__card {
  width: 50vw;
}

@media (max-width: $breakpoint-md-min) {
  .login-layout__header {
    background-color: $dark;
    padding-bottom: 4rem;
    z-index: 0;
  }

  .login-layout__page {
    align-items: flex-start;
    margin-top: -2rem;
  }

  .login-layout__card {
    width: 100vw;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    box-shadow: none;
  }
}
</style>
