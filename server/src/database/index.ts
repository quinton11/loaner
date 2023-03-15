/* TypeOrm connection set up */
import { ConnectionOptions } from "typeorm";
import { join } from "path";
import { DBUSER, DB, DBHOST } from "config";

const connectionSrc: ConnectionOptions = {
  type: "postgres",
  host: DBHOST,
  port: 5432,
  username: DBUSER,
  password: undefined,
  database: DB,
  entities: [join(__dirname, "../entities/*.ts")],
  migrations: [join(__dirname, "../migrations/*.ts")],
  synchronize: true,
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
  },
};

export = connectionSrc;
