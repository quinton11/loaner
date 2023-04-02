import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import CustomerRepository from "../repository/customer.repository";
import LoanRepository from "../repository/loan.repository";
import { createLoan, getLoans } from "controllers/loan.controller";

const router = express.Router();

router.post(
  "/loans",
  authMiddleware,
  getLoans
);

router.post(
  "/loan/create",
  authMiddleware,
  createLoan
);

export { router as LoanRouter };
