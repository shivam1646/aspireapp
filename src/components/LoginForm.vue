<template>
  <q-form @submit="login">
    <q-card-section class="q-gutter-md">
      <q-input
        v-model="email"
        label="Email"
        placeholder="Enter Registered email *"
        :rules="[
          (v) => !!v || 'Email is required',
          (v) => !!v.match(emailRegex) || 'Please enter valid email address',
        ]"
      ></q-input>
      <q-input
        v-model="pin"
        label="Pin"
        placeholder="Enter 6-digit PIN *"
        type="password"
        :rules="[
          (v) => !!v || 'Pin is required',
          (v) => v.length === 6 || 'Please enter valid pin',
        ]"
      ></q-input>
    </q-card-section>
    <q-card-section align="right">
      Don't have an account yet?
      <router-link
        :to="{ name: 'register' }"
        class="text-primary login-form__register-link"
        >Register</router-link
      >
    </q-card-section>
    <q-card-actions align="right">
      <q-btn type="submit" push color="primary">Login</q-btn>
    </q-card-actions>
  </q-form>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../store';
import { emailRegex } from 'src/constants';
import { LoginForm } from 'src/types/login';

const $q = useQuasar();
const store = useStore();
const router = useRouter();

const email = ref<string>('');
const pin = ref<string>('');

function login(): void {
  try {
    const loginFields: LoginForm = {
      email: email.value,
      pin: pin.value,
    };
    store.dispatch('login', loginFields);
    router.push({ path: '/loans' });
  } catch (err) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      position: 'top',
      icon: 'warning',
      message: err as string,
    });
  }
}
</script>

<style lang="scss">
.login-form__register-link {
  text-decoration: none;
  cursor: pointer;
}
</style>
