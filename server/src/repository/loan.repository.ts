import { EntityRepository } from "typeorm";
import { Loan } from "entities/loan";
import { CreateLoan, LoanType } from "interfaces/loan";
import { Customer } from "entities/customer";
import { CustomerType } from "interfaces/customer";

@EntityRepository(Loan)
export default class LoanRepository {
  public async createLoan(loan: CreateLoan, cus: Customer) {
    try {
      const l = Loan.create({ principal: loan.principal, rate: loan.rate });
      l.issueDate = new Date();
      l.payDate = new Date(loan.payDate);
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
  public async readLoans(customer: Customer) {
    //get all loans for a given customer
    try {
      const loans = await Loan.find({ where: { customer: customer } });
      return loans;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  public async updateLoan(customer: CustomerType, loan: LoanType) {
    //update loan for a given customer
  }
  public async deleteLoan(customer: CustomerType, loan: LoanType) {
    //delete loan for a given customer
  }
}
