import { ActionTree } from 'vuex';
import { LoanState } from './state';
import { RootState } from 'src/store';
import { cacheData, calculateEmi, roundNum } from 'src/utils';
import { v4 as uuid } from 'uuid';
import { Loan, LoanForm, Transaction } from 'src/types/loan';

export const actions: ActionTree<LoanState, RootState> = {
  apply({ state, commit, rootState }, loanForm: LoanForm): void {
    const loan: Loan = {
      ...loanForm,
      id: uuid(),
      unpaidAmt: loanForm.amount,
      unpaidTenure: loanForm.tenure,
      emi: calculateEmi(loanForm.amount, loanForm.tenure),
      status: 'PENDING',
      userId: rootState.loggedInUser as string,
    };
    commit('SET_LOANS', [...state.loans, loan]);
    cacheData('loans', state.loans);
  },

  async repay({ state, commit, dispatch }, loanId: string): Promise<void> {
    const loan = state.loans.find((loan: Loan) => loan.id === loanId);
    if (!loan) throw 'Loan does not exist';
    if (!loan.unpaidTenure) throw 'Loan paid off';
    const principal: number = await dispatch('recordTransaction', loan);
    const repaidLoan: Loan = {
      ...loan,
      unpaidTenure: loan.unpaidTenure - 1,
      status: loan.unpaidTenure - 1 > 0 ? 'PARTIALLY PAID' : 'PAID',
      unpaidAmt: roundNum(loan.unpaidAmt - principal),
    };
    commit(
      'SET_LOANS',
      state.loans.map((l: Loan) => (l.id === loanId ? repaidLoan : l))
    );
    cacheData('loans', state.loans);
  },

  async recordTransaction({ state, commit }, loan: Loan): Promise<number> {
    const interest = 0.006 * loan.unpaidAmt;
    const principal = loan.emi - interest;
    const transaction: Transaction = {
      id: uuid(),
      loanId: loan.id,
      principal: roundNum(principal),
      interest: roundNum(interest),
    };
    commit('SET_TRANSACTIONS', [...state.transactions, transaction]);
    cacheData('transactions', state.transactions);
    return principal;
  },
};
