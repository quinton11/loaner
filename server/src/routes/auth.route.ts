import { Customer } from "entities/customer";
import express from "express";
import { CustomerAccess, CustomerType } from "interfaces/customer";
import { authMiddleware } from "middleware/auth.middleware";
import AuthRepo from "repository/auth.repository";
import { createToken } from "service/jwt";

const router = express.Router();
const auth = new AuthRepo();


/* Restructure routes and what they do */
router.post("/signup", async (req: express.Request, res: express.Response) => {
  console.log(req.body);
  //get form details
  try {
    const cus: CustomerType = req.body as CustomerType;
    console.log(cus);
    const result = await auth.signUp(cus);
    if (!result) {
      throw `Error in signing up`;
    }
    //if successful return successful status
    res.status(200).json({ message: "Done" });
  } catch (err) {
    console.error(err);
    res.status(403).json({ message: "Error in signing up" });
    return;
  }
});

router.post("/signin", async (req: express.Request, res: express.Response) => {
  console.log(req.body);
  //get from details
  const cus: CustomerAccess = req.body as CustomerAccess;
  //check if customer exists
  const result = await auth.login(cus);
  //if yes generate access token
  if (!result) {
    res.status(403).json({ message: "Invalid credentials" });
    return;
  }

  const token = createToken(result);
  const options = {
    maxAge: 1000 * 60 * 60,
    httpOnly: true,
    signed: true,
  };

  res.cookie("Authorization", token, options);
  res.status(200);
});

router.post(
  "/logout",
  authMiddleware,
  (req: express.Request, res: express.Response) => {
    console.log(req.body);
    res.status(200);
  }
);

export { router as AuthRouter };
