import express from "express";
import { validateToken } from "../service/jwt";
import { logger } from "service/logger";

export const authMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  logger.info("[%s] authMiddleware %d", req.method, req.ip);

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

    if (!cookie) {
      throw "Invalid Auth";
    }

    const valid = validateToken(cookie);
    console.log("After Cookie vallidation");

    if (!valid) {
      throw "Invalid Auth";
    }
    res.locals["customer"] = valid;
    next();
  } catch (err) {
    res.status(400).json({ message: err });
    logger.info("authMiddleware %d", res.statusCode);
  }
};
