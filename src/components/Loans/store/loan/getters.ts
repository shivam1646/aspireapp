import { GetterTree } from 'vuex';
import { LoanState } from './state';
import { RootState } from 'src/store';
import { Loan, Transaction } from 'src/types/loan';

export const getters: GetterTree<LoanState, RootState> = {
  transactionsByLoanId:
    (state: LoanState) =>
    (loanId: string): Transaction[] => {
      return state.transactions.filter(
        (transaction: Transaction) => transaction.loanId === loanId
      );
    },
  loansByUser: (state: LoanState, getters, rootState: RootState) =>
    state.loans.filter((loan: Loan) => loan.userId === rootState.loggedInUser),
};
