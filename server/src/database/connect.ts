import { createConnection, getConnection } from "typeorm";
import connectionSrc from "./index";
import connectionTestSrc from "./mockConnection";

export const connect = async () => {
  try {
    const connection = connectionSrc;
    await createConnection(connection);
    const conn = getConnection();
    return conn;
  } catch (err) {
    console.error(err);
  }
};

export const connectTest = async () => {
  try {
    const connection = connectionTestSrc;
    await createConnection(connection);
    const conn = getConnection();
    return conn;
  } catch (err) {
    console.error(err);
  }
};
