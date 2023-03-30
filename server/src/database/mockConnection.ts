/* Write connection for testing */
import { ConnectionOptions } from "typeorm";
import { join } from "path";
import { DBUSER, DBHOST, DB_TEST } from "../config";
import { Customer } from "../entities/customer";
import { Loan } from "../entities/loan";

//const cusPath = join(__dirname, "../entities/customer.ts");
//const loanPath = join(__dirname, "../entities/loan.ts");
const connectionTestSrc: ConnectionOptions = {
  name: "default",
  type: "postgres",
  host: DBHOST,
  port: 5432,
  username: DBUSER,
  password: undefined,
  database: DB_TEST,
  entities: [Customer, Loan],
  migrations: [join(__dirname, "../migrations/*{.ts,.js}")],
  synchronize: true,
  dropSchema: true,
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
  },
};

export = connectionTestSrc;
