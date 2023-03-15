import express from "express";
import { validateToken } from "service/jwt";

export const authMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const cookie = req.cookies["Authorization"];
    if (!cookie) {
      //res.status(400).json({ message: "Invalid Auth" });
      throw "Invalid Auth";
    }

    const valid = validateToken(cookie);
    console.log(valid);
    next();
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
