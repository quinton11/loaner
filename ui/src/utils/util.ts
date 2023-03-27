import { LoanInfo } from "../interfaces/loan";

export const totalAmount = (loans: LoanInfo[]) => {
  var sum = 0;
  for (const l of loans) {
    sum += l.amount;
  }

  return sum;
};

export const totalPaid = (loans: LoanInfo[]) => {
  var sum = 0;
  for (const l of loans) {
    sum += l.redeemed;
  }
  return sum;
};
