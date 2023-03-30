import express from "express";
import { validateToken } from "../service/jwt";

export const authMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    let cookies: any = {};
    const cookieslist = req.headers.cookie?.split(";");
    //
    cookieslist?.forEach((cookie) => {
      const spl = cookie.split("=");
      const key = spl[0];

      cookies[key] = spl[1];
    });
    const cookie = cookies["auth"];
    console.log("Before Cookie null check");

    if (!cookie) {
      throw "Invalid Auth";
    }

    console.log("After Cookie null check");

    const valid = validateToken(cookie);
    console.log("After Cookie vallidation");

    if (!valid) {
      throw "Invalid Auth";
    }
    res.locals["customer"] = valid;
    next();
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
