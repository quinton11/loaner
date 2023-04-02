import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { logOut, signIn, signUp } from "../controllers/auth.controller";

const router = express.Router();

/* Server side validation? */

router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/logout", authMiddleware, logOut);

export { router as AuthRouter };
