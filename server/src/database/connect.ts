import { createConnection } from "typeorm";
import connectionSrc from "database";

export const connect = async () => {
  try {
    const connection = connectionSrc;
    await createConnection(connection);
  } catch (err) {
    console.error(err);
  }
};
