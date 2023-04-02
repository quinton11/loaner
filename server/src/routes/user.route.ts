import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { getUser } from "controllers/user.controller";

const router = express.Router();

router.post(
  "/user",
  authMiddleware,
  getUser
);

export { router as CustomerRouter };
