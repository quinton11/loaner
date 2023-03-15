import express from "express";
import { authMiddleware } from "middleware/auth.middleware";
import LoanRepository from "repository/loan.repository";

const router = express.Router();
const loanRepo = new LoanRepository();

router.post(
  "/loans",
  authMiddleware,
  (req: express.Request, res: express.Response) => {
    console.log(req.body);
    res.status(200);
  }
);

export { router as LoanRouter };
