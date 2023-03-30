/* TypeOrm connection set up */
import { ConnectionOptions } from "typeorm";
import { join } from "path";
import { DBUSER, DB, DBHOST } from "../config";

const cusPath = join(__dirname, "../entities/customer.ts");
const loanPath = join(__dirname, "../entities/loan.ts");
const connectionSrc: ConnectionOptions = {
  name: "default",
  type: "postgres",
  host: DBHOST,
  port: 5432,
  username: DBUSER,
  password: undefined,
  database: DB,
  entities: [cusPath, loanPath],
  migrations: [join(__dirname, "../migrations/*.ts")],
  synchronize: true,
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
  },
};

export = connectionSrc;
