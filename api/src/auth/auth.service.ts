import { Request, Response } from "express";
import pool from "../config/db.config";

const signin = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  res.send("Signin");
};

const signup = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  res.send("Signup");
};

export default { signin, signup };
