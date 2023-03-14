export interface LoanType {
  amount: number;
  rate: number;
  issueDate: Date;
  payDate: Date;
}

export interface CreateLoan {
  idCard: string;
  amount: number;
  rate: number;
}
