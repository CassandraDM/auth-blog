import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { findById, update } from "../../services/post.service";
import { PostType } from "../../types/post.type";

const PostEditPage = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostType | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const result = await findById(Number(id));
        setPost(result);
        setTitle(result.title);
        setContent(result.content);
        setImagePath(result.image_path);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (post && token) {
      const updatedPost = { ...post, title, content, image_path: imagePath };
      await update(post.id, updatedPost, token);
      navigate(`/post/${post.id}`);
    }
  };

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Edit Your Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-medium mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imagePath" className="block text-lg font-medium mb-2">
            Image Path
          </label>
          <input
            type="text"
            id="imagePath"
            value={imagePath}
            onChange={(e) => setImagePath(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default PostEditPage;
