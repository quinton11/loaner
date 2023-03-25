import express from "express";
import { CustomerDetails, CustomerType } from "interfaces/customer";
import { authMiddleware } from "middleware/auth.middleware";
import CustomerRepository from "repository/customer.repository";
import LoanRepository from "repository/loan.repository";

const router = express.Router();
const userRepo = new CustomerRepository();
const loanRepo = new LoanRepository();

router.post(
  "/user",
  authMiddleware,
  async (req: express.Request, res: express.Response) => {
    console.log("hit user");
    //console.log(res.locals);
    try {
      const cus: CustomerType = res.locals["customer"];
      //fetch user data from database
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

      //calculate simple interest, amount
      //console.log(details);
      //fetch user data
      res.status(200).json({ data: details });
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }
);

export { router as CustomerRouter };
