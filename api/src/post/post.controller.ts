import { Response, Request, Router } from "express";
import PostService from "./post.service";

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

PostController.post("/", async (req: Request, res: Response) => {
  const { user_id, title, content, image_path } = req.body;
  const postDTO = { user_id, title, content, image_path };
  const post = await PostService.create(postDTO);

  res.status(201).send(post);
});

PostController.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user_id, title, content, image_path } = req.body;
  const postDTO = { user_id, title, content, image_path };
  const post = await PostService.update(+id, postDTO);

  res.send(post);
});

PostController.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await PostService.remove(+id);

  res.send({ message: "Post deleted" });
});

export default PostController;
