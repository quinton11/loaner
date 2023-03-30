import supertest from "supertest";
import createServer from "../utils/server";
import { createConnection, getConnectionOptions } from "typeorm";
import connectionSrc from "../database";
import { CustomerAccess } from "interfaces/customer";

const app = createServer(true);

describe("customer", () => {
  //test registration
  describe(" POST signup", () => {
    //test if username or password exists and its return
    describe("given Idcard and email exists", () => {});

    //test if registered successfully
    describe("given user credentials are valid", () => {});

    //correct error handling
  });

  //test login
  //test if user exists and there is a password match
  describe(" POST login", () => {
    describe("given that customer does not exist", () => {
      it("should throw a 404", async () => {
        const data: CustomerAccess = {
          email: "test80@email.com",
          password: "password",
          idCard: "id-card-random-string",
        };
        await supertest(app).post("/signin").send(data).expect(404);
      });
    });

    //password match
    describe("given that customer exists", () => {});
  });
});
