import connection from "../config/db.config";
import { IPost, IPostDTO } from "./post.type";

const getAll = async () => {
  const result = await connection.query("SELECT * FROM Public.post");
  return result.rows;
};

const getOneById = async (id: number) => {
  const result = await connection.query(
    "SELECT * FROM Public.post WHERE id = $1",
    [id]
  );
  return result.rows[0];
};

// //get one
// const getOne = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await connection.query(
//     "SELECT * FROM Public.post WHERE id = $1",
//     [id]
//   );
//   console.log("end point get one: ", result.rows);
//   res.send(result.rows[0]);
// };

//create
const create = async (postDTO: IPostDTO) => {
  const query =
    "INSERT INTO Public.post (user_id, title, content, image_path) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [
    postDTO.user_id,
    postDTO.title,
    postDTO.content,
    postDTO.image_path,
  ];

  try {
    await connection.query(query, values);

    return true;
  } catch (error) {
    console.error("Error creating post:", error);
    return false;
  }
};

//update
const update = async (id: number, postDTO: IPostDTO): Promise<IPost | null> => {
  const query =
    "UPDATE Public.post SET user_id = $1, title = $2, content = $3, image_path = $4 WHERE id = $5 RETURNING *";
  const values = [
    postDTO.user_id,
    postDTO.title,
    postDTO.content,
    postDTO.image_path,
    id,
  ];

  try {
    const result = await connection.query(query, values);
    const post = result.rows[0];

    return post;
  } catch (error) {
    console.error("Error updating post:", error);
    return null;
  }
};

//delete
const remove = async (id: number) => {
  const query = "DELETE FROM Public.post WHERE id = $1";
  const values = [id];

  try {
    await connection.query(query, values);

    return true;
  } catch (error) {
    console.error("Error deleting post:", error);
    return false;
  }
};

export default {
  getAll,
  getOneById,
  create,
  update,
  remove,
};
