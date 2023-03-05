import { store } from 'quasar/wrappers';
// import { InjectionKey } from 'vue';
// import { Router } from 'vue-router';
import {
  ActionTree,
  createStore,
  MutationTree,
  // Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex';
import { loan } from 'src/components/Loans/store/loan';
import { register } from 'src/components/Register/store/register';
import { LoanState } from 'src/components/Loans/store/loan/state';
import { RegisterState } from 'src/components/Register/store/register/state';
import { LoginForm } from 'src/types/login';

export interface RootState {
  loggedInUser: string | null;
  loan?: LoanState;
  register?: RegisterState;
}

const mutations: MutationTree<RootState> = {
  SET_LOGGED_IN_USER(state: RootState, userId: string): void {
    state.loggedInUser = userId;
  },
};

const actions: ActionTree<RootState, RootState> = {
  login({ rootState, commit }, loginFields: LoginForm): void {
    const users = rootState.register?.users;
    if (!users) throw 'No users exist';
    const user = users.find((user) => user.email === loginFields.email);
    if (!user) throw 'User with given email does not exist';
    if (user.pin !== loginFields.pin) throw 'Invalid credentials';
    commit('SET_LOGGED_IN_USER', user.id, { root: true });
    localStorage.setItem('loggedInUser', JSON.stringify(user.id));
  },
  logout({ commit }): void {
    commit('SET_LOGGED_IN_USER', null, { root: true });
    localStorage.setItem('loggedInUser', JSON.stringify(null));
  },
};

export default store(function (/* { ssrContext } */) {
  const Store = createStore<RootState>({
    state: {
      loggedInUser: null,
    },
    mutations,
    actions,
    modules: {
      loan,
      register,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useStore() {
  return vuexUseStore();
}
