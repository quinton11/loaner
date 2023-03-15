import express from "express";
import { authMiddleware } from "middleware/auth.middleware";
import CustomerRepository from "repository/customer.repository";

const router = express.Router();
const userRepo = new CustomerRepository();

router.post(
  "/user",
  authMiddleware,
  (req: express.Request, res: express.Response) => {
    console.log(req.body);
    //fetch user data
    res.status(200);
  }
);

export { router as CustomerRouter };
