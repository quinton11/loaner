export interface LoanType {
  principal: number;
  rate: number;
  redeemed: number;
  duration:number;
  issueDate: Date;
  payDate: Date;
}

export interface LoanInfo extends LoanType {
  principal: number;
  rate: number;
  redeemed: number;
  duration:number;
  amount: number;
  interest: number;
  issueDate: Date;
  payDate: Date;
}

export interface CreateLoan {
  idCard: string;
  principal: number;
  rate: number;
  duration: number;
}
