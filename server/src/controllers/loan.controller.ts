import express from "express";
import { CustomerType } from "../interfaces/customer";
import { CreateLoan } from "../interfaces/loan";
import CustomerRepository from "../repository/customer.repository";
import LoanRepository from "../repository/loan.repository";

const loanRepo = new LoanRepository();
const userRepo = new CustomerRepository();


export const getLoans= (req: express.Request, res: express.Response) => {
    console.log(req.body);
    res.status(200);
  }

export const createLoan= async (req: express.Request, res: express.Response) => {
    try {
      const cus: CustomerType = res.locals["customer"];

      const loan = req.body as CreateLoan;
      loan.rate = 4;
      loan.idCard = cus.idCard;
      loan.duration = parseInt(req.body["duration"]);

      const customer = await userRepo.cusRead(cus);
      if (!customer) {
        throw `Invalid user`;
      }
      const done = await loanRepo.createLoan(loan, customer);

      if (!done) {
        throw `Couldn't create loan`;
      }
      res.status(200).json({ message: "Done" });
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }