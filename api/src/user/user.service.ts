import { Request, Response } from "express";
import connection from "../config/db.config";

const getAll = async (req: Request, res: Response) => {
  const result = await connection.query("SELECT * FROM Public.user");
  console.log("end point get all: ", result.rows);
  res.send(result.rows);
};

//get one
const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await connection.query(
    "SELECT * FROM Public.user WHERE id = $1",
    [id]
  );
  console.log("end point get one: ", result.rows);
  res.send(result.rows[0]);
};

//create
const create = async (req: Request, res: Response) => {
  try {
    const {
      username,
      password,
      email,
    }: { username: string; password: string; email: string } = req.body;

    const result = await connection.query(
      "INSERT INTO Public.user (username, password, email) VALUES ($1, $2, $3) RETURNING *",
      [username, password, email]
    );

    console.log("end point create: ", result.rows);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating user: ", err);
    res.status(500).send("Error creating user");
  }
};

//update
const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, password, email } = req.body;
  const result = await connection.query(
    "UPDATE Public.user SET username = $1, password = $2, email = $3 WHERE id = $4 RETURNING *",
    [username, password, email, id]
  );
  console.log("end point update: ", result.rows);
  res.send(result.rows[0]);
};

//delete
const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await connection.query(
    "DELETE FROM Public.user WHERE id = $1 RETURNING *",
    [id]
  );
  console.log("end point delete: ", result.rows);
  res.send({ user: result.rows[0], message: "User deleted" });
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
