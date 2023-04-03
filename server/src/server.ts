/* Set up server */

import express from "express";
import cookieParser from "cookie-parser";
import { connect, connectTest } from "./database/connect";
import { AuthRouter } from "./routes/auth.route";
import { CustomerRouter } from "./routes/user.route";
import { LoanRouter } from "./routes/loan.route";
import { CorsMiddleware } from "./middleware/cors.middleware";
import { logger } from "service/logger";

export default class Server {
  public port: number;
  public server: express.Application;
  constructor(test: boolean = false) {
    //init express app
    this.port = 5000;
    this.server = express();
    //connect database
    this.initDatabase(test);
    //init middleware
    this.initMiddleware();
  }

  async initDatabase(test: boolean) {
    try {
      if (test) {
        logger.debug("Connecting to Mock Database...");
        const conn = await connectTest();
        logger.debug(conn?.options.name);
        //(conn?.options?.entities);

        return;
      }
      const conn = await connect();
      logger.debug("Connected to Database");
      logger.debug(conn?.options.name);
      //console.log(conn?.options?.entities);
    } catch (err) {}
  }

  initMiddleware() {
    this.server.use(CorsMiddleware);
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cookieParser());
    this.server.use(AuthRouter);
    this.server.use(CustomerRouter);
    this.server.use(LoanRouter);
  }

  async Listen() {
    try {
      this.server.listen(this.port, () => {
        console.log("= = = = = = = = = = = = = = = = = = = = = = = =");
        console.log("= = = = = = = = = = = = = = = = = = = = = = = =");
        console.log("= = = = = = = = = = Loaner = = = = = = = = = =");
        console.log(`   = = = = listening on port: ${this.port} = = = =   `);
        console.log("= = = = = = = = = = = = = = = = = = = = = = = =");
        console.log("= = = = = = = = = = = = = = = = = = = = = = = =");
      });
    } catch (err) {
      logger.error(err);
    }
  }

  public getApp() {
    return this.server;
  }
}
