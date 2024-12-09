import { Request, Response } from "express";
import connection from "../config/db.config";

const getAll = async (req: Request, res: Response) => {
  const result = await connection.query("SELECT * FROM Public.post");
  console.log("end point get all: ", result.rows);
  res.send(result.rows);
};

const getOneById = async (id: number) => {
  const result = await connection.query(
    "SELECT * FROM Public.post WHERE id = $1",
    [id]
  );
  return result.rows[0];
};

//get one
const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await connection.query(
    "SELECT * FROM Public.post WHERE id = $1",
    [id]
  );
  console.log("end point get one: ", result.rows);
  res.send(result.rows[0]);
};

//create
const create = async (req: Request, res: Response) => {
  try {
    const {
      user_id,
      title,
      content,
      image_path,
    }: { user_id: number; title: string; content: string; image_path: string } =
      req.body;

    const result = await connection.query(
      "INSERT INTO Public.post (user_id, title, content, image_path) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_id, title, content, image_path]
    );

    console.log("end point create: ", result.rows);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating post: ", err);
    res.status(500).send("Error creating post");
  }
};

//update
const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user_id, title, content, image_path } = req.body;
  const result = await connection.query(
    "UPDATE Public.post SET user_id = $1, title = $2, content = $3, image_path = $4 WHERE id = $5 RETURNING *",
    [user_id, title, content, image_path, id]
  );
  console.log("end point update: ", result.rows);
  res.send(result.rows[0]);
};

//delete
const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await connection.query(
    "DELETE FROM Public.post WHERE id = $1 RETURNING *",
    [id]
  );
  console.log("end point delete: ", result.rows);
  res.send({ user: result.rows[0], message: "Post deleted" });
};

export default {
  getAll,
  getOneById,
  getOne,
  create,
  update,
  remove,
};
