/* TypeOrm connection set up */
import { ConnectionOptions } from "typeorm";
import { join } from "path";

const connectionSrc: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: undefined,
  database: "loaner",
  entities: [join(__dirname, "../entities/*.ts")],
  migrations: [join(__dirname, "../migrations/*.ts")],
  synchronize: true,
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
  },
};

export = connectionSrc;
