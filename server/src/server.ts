/* Set up server */

import express from "express";
import cors from "cors";
import { connect } from "database/connect";

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
  }

  initMiddleware() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
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
