<template>
  <q-form @submit="register">
    <q-btn class="text-primary" icon="arrow_back" :to="{ name: 'login' }" flat
      >Go back</q-btn
    >
    <q-card-section class="q-gutter-md">
      <q-input
        v-model="name"
        label="Full name"
        placeholder="Enter full name *"
        :rules="[(v) => !!v || 'Name is required']"
      ></q-input>
      <q-input
        v-model="email"
        label="Email"
        placeholder="Enter work email *"
        :rules="[
          (v) => !!v || 'Email is required',
          (v) => !!v.match(emailRegex) || 'Please enter valid email address',
        ]"
      ></q-input>
      <q-input
        v-model="pin"
        label="Pin"
        placeholder="Create 6-digit PIN *"
        type="password"
        :rules="[
          (v) => !!v || 'Pin is required',
          (v) => v.length === 6 || 'Please enter valid pin',
        ]"
      ></q-input>
      <q-input
        v-model="confirmPin"
        label="Confirm pin"
        placeholder="Confirm PIN *"
        type="password"
        :rules="[
          (v) => !!v || 'Pin is required',
          (v) => v === pin || 'Pin does not match',
        ]"
      ></q-input>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn type="submit" push color="primary">Register</q-btn>
    </q-card-actions>
  </q-form>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, computed } from 'vue';
import { useStore } from '../../store';
import { useRouter } from 'vue-router';
import { emailRegex } from 'src/constants';
import { User } from 'src/types/register';
import { useQuasar } from 'quasar';
import { cacheData } from '../../utils';

const name = ref<string>('');
const email = ref<string>('');
const pin = ref<string>('');
const confirmPin = ref<string>('');

const $q = useQuasar();
const store = useStore();
const router = useRouter();

const users = computed(() => store.state.register.users);

function register(): void {
  try {
    const user: User = {
      name: name.value,
      email: email.value,
      pin: pin.value,
    };
    store.dispatch('register/createUser', user);
    router.push({ name: 'login' });
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

onBeforeUnmount(() => {
  cacheData('user', users.value); // stores newly created users in local storage
});
</script>
