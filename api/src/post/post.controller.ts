import { Response, Request, Router } from "express";
import PostService from "./post.service";
import authMiddleware from "../middleware/auth.middleware";
import { IUser } from "../user/user.types";

const PostController = Router();

PostController.get("/", async (req: Request, res: Response) => {
  const posts = await PostService.getAll();
  res.send(posts);
});

PostController.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await PostService.getOneById(+id);
  if (!post) {
    res.status(404).send("Post not found");
  }

  res.send(post);
});

PostController.post(
  "/",
  authMiddleware,
  async (req: Request, res: Response) => {
    const user = req.user as IUser;
    const userId = user.id;
    const { title, content, image_path } = req.body;
    const postDTO = { user_id: userId, title, content, image_path };
    const post = await PostService.create(postDTO);

    res.status(201).send(post);
  }
);

PostController.put(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { user_id, title, content, image_path } = req.body;
    const postDTO = { user_id, title, content, image_path };

    const user = req.user as IUser;
    console.log("req.user: ", req.user);
    if (!req.user) {
      res.status(401).send("User not authenticated");
    }
    const userId = user.id;
    try {
      const success = await PostService.update(+id, postDTO, userId);
      if (!success) {
        res
          .status(403)
          .send("Post cannot be updated because user not authorized");
      }
      res.send({ message: "Post created" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
      res.status(500).send("An unknown error occurred");
    }
  }
);

PostController.delete(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = req.user as IUser;
    console.log("req.user: ", req.user);
    if (!req.user) {
      res.status(401).send("User not authenticated");
    }

    const userId = user.id;
    try {
      const success = await PostService.remove(+id, userId);
      if (!success) {
        res.status(403).send("Post not found or user not authorized");
      }
      res.send({ message: "Post deleted" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }
      res.status(500).send("An unknown error occurred");
    }
  }
);

export default PostController;
