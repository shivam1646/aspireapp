import { Loan, Transaction } from 'src/types/loan';
import { MutationTree } from 'vuex';
import { LoanState } from './state';

export const mutations: MutationTree<LoanState> = {
  SET_SHOW_APPLY_MODAL(state: LoanState, showApplyModal: boolean) {
    state.showApplyModal = showApplyModal;
  },
  SET_LOANS(state: LoanState, loans: Loan[]) {
    state.loans = loans;
  },
  SET_TRANSACTIONS(state: LoanState, transactions: Transaction[]) {
    state.transactions = transactions;
  },
};
