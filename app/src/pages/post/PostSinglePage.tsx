import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findById, remove } from "../../services/post.service";
import { jwtDecode } from "jwt-decode";

const PostSinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let userId: number | null = null;

  if (token) {
    const decodedToken: any = jwtDecode(token);
    userId = decodedToken.id;
  }

  useEffect(() => {
    const fetchPost = async () => {
      const result = await findById(Number(id));
      setPost(result);
    };
    fetchPost();
  }, [id]);
  const handleEditClick = (id: number) => {
    navigate(`/post/edit/${id}`);
  };

  const handleDeleteClick = async (id: number) => {
    if (token) {
      await remove(id, token);
      navigate(`/post`);
    } else {
      console.error("Token is not available");
    }
  };

  if (!post) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-5">{post.title}</h1>
      <p className="text-lg leading-relaxed">{post.content}</p>
      {userId === post.user_id && (
        <div>
          <button
            className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
            onClick={() => handleEditClick(post.id)}
          >
            Edit
          </button>
          <button
            className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition-colors duration-300"
            onClick={() => handleDeleteClick(post.id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default PostSinglePage;
