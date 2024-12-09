import { Router } from "express";
import PostService from "./post.service";

const PostController = Router();

PostController.get("/", PostService.getAll);

PostController.get("/:id", async (req, res) => {
  const { id } = req.params;
  const post = await PostService.getOneById(+id);
  if (!post) {
    res.status(404).send("Post not found");
  }

  res.send(post);
});

PostController.post("/", PostService.create);

PostController.put("/:id", PostService.update);

PostController.delete("/:id", PostService.remove);

export default PostController;
