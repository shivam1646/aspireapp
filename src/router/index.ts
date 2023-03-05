import { route } from 'quasar/wrappers';
import { getCache } from 'src/utils';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { RootState } from '../store';

import routes from './routes';

export default route<RootState>(function ({ store }) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    store.commit(
      'SET_LOGGED_IN_USER',
      JSON.parse(localStorage.getItem('loggedInUser') || 'null'),
      { root: true }
    );
    if (store.state.loggedInUser && !to.meta.requiresAuth) {
      next({ name: 'loans' });
    } else if (to.meta.requiresAuth && !store.state.loggedInUser)
      next({ path: '/login' });
    else next();
  });
  return Router;
});
