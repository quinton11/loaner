/* Set up server */

import express from "express";
import cookieParser from "cookie-parser";
import { connect, connectTest } from "./database/connect";
import { AuthRouter } from "./routes/auth.route";
import { CustomerRouter } from "./routes/user.route";
import { LoanRouter } from "./routes/loan.route";
import { SECRET } from "./config";
import { CorsMiddleware } from "./middleware/cors.middleware";

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
        console.log("Connecting to Mock Database...");
        const conn = await connectTest();
        console.log(conn?.options.name);
        console.log(conn?.options?.entities);

        return;
      }
      const conn = await connect();
      console.log("Connected to Database");
      console.log(conn?.options.name);
      console.log(conn?.options?.entities);
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
      console.error(err);
    }
  }

  public getApp() {
    return this.server;
  }
}
