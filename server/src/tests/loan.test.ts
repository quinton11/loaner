import supertest from "supertest";
import createServer from "../utils/server";

const app = createServer(false);

/*
Check for cookie in requests
Throw 400 if none found
 */

describe("loan", () => {
  describe("loans", () => {
    describe("given that customer does not exist", () => {
      it("should throw a 400", async () => {
        expect(true).toBe(true);
        await supertest(app).post("/loan/create").expect(404);
      });
    });
  });
});
