import express from "express";
import { CustomerDetails, CustomerType } from "../interfaces/customer";
import CustomerRepository from "../repository/customer.repository";
import LoanRepository from "../repository/loan.repository";

const userRepo = new CustomerRepository();
const loanRepo = new LoanRepository();

export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const cus: CustomerType = res.locals["customer"];

    //get user
    const customer = await userRepo.cusRead(cus);
    if (!customer) {
      throw `Customer does not exist`;
    }

    const loans = await loanRepo.readLoans(customer);
    if (!loans) {
      throw `Error in retrieving loans`;
    }
    const details: CustomerDetails = {
      idCard: customer.idCard,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      loans: loans,
    };

    res.status(200).json({ data: details });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
