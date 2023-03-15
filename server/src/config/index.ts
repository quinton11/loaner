import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV || "dev"}` });

export const { SECRET, DBUSER, DB, DBHOST } = process.env;
