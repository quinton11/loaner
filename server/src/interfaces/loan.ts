export interface LoanType {
  principal: number;
  rate: number;
  redeemed: number;
  issueDate: Date;
  payDate: Date;
}

export interface CreateLoan {
  idCard: string;
  principal: number;
  rate: number;
  payDate: string;
}
