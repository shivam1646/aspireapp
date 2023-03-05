export type LoanType = 'Home loan' | 'Education loan' | 'Personal loan';

export interface LoanForm {
  amount: number;
  tenure: number;
  type: LoanType;
}

export interface Loan extends LoanForm {
  id: string;
  emi: number;
  userId: string;
  status: string;
  unpaidAmt: number;
  unpaidTenure: number;
}

export interface Transaction {
  id: string;
  loanId: string;
  principal: number;
  interest: number;
}
