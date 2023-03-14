import { EntityRepository } from "typeorm";
import { Loan } from "entities/loan";
import { CreateLoan, LoanType } from "interfaces/loan";
import { Customer } from "entities/customer";
import { CustomerType } from "interfaces/customer";

@EntityRepository(Loan)
export default class LoanRepository {
  public async createLoan(loan: CreateLoan, cus: Customer) {
    const l = Loan.create({ amount: loan.amount, rate: loan.rate });
    l.customer = cus;

    await l.save();
  }
  public async readLoan(customer: CustomerType) {
    //read loan for a given customer
  }
  public async readLoans(customer: CustomerType) {
    //get all loans for a given customer
  }
  public async updateLoan(customer: CustomerType, loan: LoanType) {
    //update loan for a given customer
  }
  public async deleteLoan(customer: CustomerType, loan: LoanType) {
    //delete loan for a given customer
  }
}
