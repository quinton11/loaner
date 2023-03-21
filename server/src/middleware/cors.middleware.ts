import express from "express";

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};


const allowedOrigins = ["http://localhost:3000"];


export const CorsMiddleware = (
  req: express.Request,
  resp: express.Response,
  next: express.NextFunction
) => {
  const origin = req.headers.origin as string;
  if (allowedOrigins.includes(origin)) {
    resp.setHeader("Access-Control-Allow-Origin", origin);
  }

  resp.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  resp.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  resp.header("Access-Control-Allow-Credentials", "true");
  return next();
};