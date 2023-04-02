import express from "express";
import { CustomerAccess, CustomerType } from "../interfaces/customer";
import AuthRepo from "../repository/auth.repository";
import { createToken } from "../service/jwt";

const auth = new AuthRepo();


export const signUp = async (req: express.Request, res: express.Response) => {
    //get form details
    try {
      //convert req.body.dob to date object
      const cus: CustomerType = req.body as CustomerType;
      cus.dob = new Date(req.body.dob);
  
      const result = await auth.signUp(cus);
      if (!result) {
        throw `Error in signing up`;
      }
      //if successful return successful status
      res.status(200).json({ message: "Done" });
    } catch (err) {
      res.status(403).json({ message: err });
      return;
    }
  }

  export const signIn =  async (req: express.Request, res: express.Response) => {
    //get from details
    const cus: CustomerAccess = req.body as CustomerAccess;
    //check if customer exists
    const result = await auth.login(cus);
    //if yes generate access token
  
    if (!result) {
      res.status(404).json({ message: "Invalid credentials" });
      return;
    }
    console.log("Successful auth login");
  
    const token = createToken(result);
    const options = {
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
    };
    res.cookie("auth", token, options);
    res.status(200).json({ message: "Done" });
  }

  export const logOut = (req: express.Request, res: express.Response) => {
    res.clearCookie("auth");
    res.status(200).send({ message: "Done" });
  }