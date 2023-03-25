export interface CreateLoan {
  idCard: string;
  principal: number;
  rate: number;
  duration: number;
}

export interface LoanInfo {
  principal: number;
  rate: number;
  redeemed: number;
  amount: number;
  interest: number;
  issueDate: string;
  payDate: string;
  duration: number;
  id: number;
}

export interface LoanPieItem {
  value: number;
  category: string;
  summary: string;
}
