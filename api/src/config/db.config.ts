import { Pool } from "pg";

const connection = new Pool({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "your_database",
});

connection.connect((err) => {
  if (err) {
    console.log("Error to connect to the database", err);
  } else {
    console.log("Connected to the database");
  }
});

export default connection;
