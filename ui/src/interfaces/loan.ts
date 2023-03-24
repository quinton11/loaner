export interface CreateLoan {
  idCard: string;
  principal: number;
  rate: number;
  payDate: string;
}

export interface LoanInfo {
  principal: number;
  rate: number;
  redeemed: number;
  amount: number;
  interest: number;
  issueDate: string;
  payDate: string;
}
