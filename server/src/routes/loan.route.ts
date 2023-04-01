import express from "express";
import { CustomerType } from "../interfaces/customer";
import { CreateLoan } from "../interfaces/loan";
import { authMiddleware } from "../middleware/auth.middleware";
import CustomerRepository from "../repository/customer.repository";
import LoanRepository from "../repository/loan.repository";

const router = express.Router();
const loanRepo = new LoanRepository();
const userRepo = new CustomerRepository();

router.post(
  "/loans",
  authMiddleware,
  (req: express.Request, res: express.Response) => {
    console.log(req.body);
    res.status(200);
  }
);

router.post(
  "/loan/create",
  authMiddleware,
  async (req: express.Request, res: express.Response) => {
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
);

export { router as LoanRouter };
