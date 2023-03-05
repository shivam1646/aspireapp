import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/loans',
        component: () => import('src/components/Loans/ManageLoans.vue'),
        name: 'loans',
        meta: { requiresAuth: true },
      },
      {
        path: '/cards',
        component: () => import('src/components/Cards/ManageCards.vue'),
        name: 'cards',
        meta: { requiresAuth: true, isCard: true },
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('src/components/LoginForm.vue'),
        meta: {
          desc: 'Please enter the required credentials to continue',
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: '/register',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'register',
        component: () => import('src/components/Register/RegisterForm.vue'),
        meta: {
          desc: 'All-in-one financial operating system for growing businesses',
          requiresAuth: false,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
