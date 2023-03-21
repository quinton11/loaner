/* Set up server */

import express from "express";
import cookieParser from "cookie-parser"
import { connect } from "database/connect";
import { AuthRouter } from "routes/auth.route";
import { CustomerRouter } from "routes/user.route";
import { LoanRouter } from "routes/loan.route";
import { SECRET } from "config";
import { CorsMiddleware } from "middleware/cors.middleware";

export default class Server {
  public port: number;
  public server: express.Application;
  constructor() {
    //init express app
    this.port = 5000;
    this.server = express();
    //connect database
    this.initDatabase();
    //init middleware
    this.initMiddleware();
  }

  async initDatabase() {
    await connect();
    console.log("Connected to Database");
  }

  initMiddleware() {
    this.server.use(CorsMiddleware);
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cookieParser(SECRET))
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
}
