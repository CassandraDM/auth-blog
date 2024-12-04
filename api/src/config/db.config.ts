import { Pool } from "pg";

import dotenv from "dotenv";

dotenv.config();

const connection = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.log("Error to connect to the database", err);
  } else {
    console.log("Connected to the database");
  }
});

export default connection;
