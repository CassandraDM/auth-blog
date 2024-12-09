import connection from "../config/db.config";
import { IUser, IUserDTO } from "./user.types";

const getAll = async () => {
  const result = await connection.query("SELECT * FROM Public.user");
  return result.rows;
};

const getOneByUsername = async (username: string): Promise<IUser | null> => {
  const query = "SELECT * FROM Public.user WHERE username = $1";
  const values = [username];

  const result = await connection.query(query, values);
  const user = result.rows[0];

  if (!user) {
    return null;
  }

  return user;
};

const getOneById = async (id: number): Promise<IUser | null> => {
  const query = "SELECT * FROM public.user WHERE id = $1";
  const values = [id];

  try {
    const result = await connection.query(query, values);
    const user = result.rows[0];

    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

// //get one
// const getOne = async (id: number): Promise<IUser | null> => {
//   const query = "SELECT * FROM users WHERE id = $1";
//   const values = [id];

//   try {
//     const result = await connection.query(query, values);
//     const user = result.rows[0];

//     return user;
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     return null;
//   }
// };

//create
const create = async (userDTO: IUserDTO) => {
  const query = "INSERT INTO public.user (username, password) VALUES ($1, $2)";
  const values = [userDTO.username, userDTO.password];

  try {
    await connection.query(query, values);

    return true;
  } catch (error) {
    console.error("Error creating user:", error);
    return false;
  }
};

//update
const update = async (id: number, userDTO: IUserDTO): Promise<IUser | null> => {
  const query =
    "UPDATE Public.user SET username = $1, password = $2 WHERE id = $3 RETURNING *";
  const values = [userDTO.username, userDTO.password, id];

  try {
    const result = await connection.query(query, values);
    const user = result.rows[0];

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    return null;
  }
};

//delete
const remove = async (id: number) => {
  const query = "DELETE FROM Public.user WHERE id = $1";
  const values = [id];

  try {
    await connection.query(query, values);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

export default {
  getAll,
  getOneByUsername,
  getOneById,
  create,
  update,
  remove,
};
