import { EntityRepository } from "typeorm";
import { Loan } from "../entities/loan";
import { CreateLoan, LoanInfo, LoanType } from "../interfaces/loan";
import { Customer } from "../entities/customer";
import { CustomerType } from "../interfaces/customer";

@EntityRepository(Loan)
export default class LoanRepository {
  public async createLoan(loan: CreateLoan, cus: Customer) {
    try {
      const l = Loan.create({ principal: loan.principal, rate: loan.rate });
      l.issueDate = new Date();
      l.duration = loan.duration;
      l.payDate = this.payDate(l.duration);
      l.customer = cus;
      l.redeemed = 0;
      await l.save();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public async readLoan(customer: CustomerType) {
    //read loan for a given customer
  }
  public async readLoans(customer: Customer): Promise<LoanInfo[] | null> {
    //get all loans for a given customer
    try {
      const ls = await Loan.find({ where: { customer: customer } });
      const loans = this.calcInterest(ls);
      return loans;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public calcInterest(loans: Loan[]): LoanInfo[] {
    var resloans: LoanInfo[] = new Array<LoanInfo>();
    /* const now = new Date().getTime();
    const nowseconds = Math.round(now / 1000); */

    for (const loan of loans) {
      /* const time = nowseconds - Math.round(loan.issueDate.getTime() / 1000);
      const timeYear = time / (60 * 60 * 24 * 365); */
      const interest = (loan.principal * loan.rate * loan.duration) / 100;

      const amount = loan.principal + interest;
      resloans.push({ ...loan, amount, interest });
    }
    return resloans;
  }

  public payDate(duration: number): Date {
    const now = new Date();
    now.setFullYear(now.getFullYear() + duration);

    return now;
  }
  public async updateLoan(customer: CustomerType, loan: LoanType) {
    //update loan for a given customer
  }
  public async deleteLoan(customer: CustomerType, loan: LoanType) {
    //delete loan for a given customer
  }
}
