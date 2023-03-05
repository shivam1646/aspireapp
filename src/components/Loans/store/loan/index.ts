import { Module } from 'vuex';
import { state, LoanState } from './state';
import { RootState } from 'src/store';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

export const loan: Module<LoanState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
