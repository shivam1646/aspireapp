import { Loan, Transaction } from 'src/types/loan';

export interface LoanState {
  showApplyModal: boolean;
  loans: Loan[];
  transactions: Transaction[];
}

export const state: LoanState = {
  showApplyModal: false,
  loans: [],
  transactions: [],
};
