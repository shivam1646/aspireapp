import { Module } from 'vuex';
import { state, RegisterState } from './state';
import { RootState } from 'src/store';
import { mutations } from './mutations';
import { actions } from './actions';

export const register: Module<RegisterState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};
