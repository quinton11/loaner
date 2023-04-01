import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV || "dev"}` });

export const { SECRET, DBUSER, DB, DB_TEST, DBHOST, DBPASSWORD } = process.env;
