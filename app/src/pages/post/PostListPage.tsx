import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findAll, remove } from "../../services/post.service";
import { PostType } from "../../types/post.type";
import { jwtDecode } from "jwt-decode";

const PostListPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let userId: number | null = null;

  if (token) {
    const decodedToken: any = jwtDecode(token);
    userId = decodedToken.id;
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await findAll();
      setPosts(result);
    };
    fetchPosts();
  }, [token]);

  const handlePostClick = (id: number) => {
    navigate(`/post/${id}`);
  };

  const handleEditClick = (id: number) => {
    navigate(`/post/edit/${id}`);
  };

  const handleDeleteClick = async (id: number) => {
    if (token) {
      await remove(id, token);
      setPosts(posts.filter((post) => post.id !== id));
    } else {
      console.error("Token is not available");
    }
  };

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Post List</h1>
      <ul className="list-none p-0">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-5 mb-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-between items-center"
          >
            <span
              className="text-lg font-semibold cursor-pointer hover:text-blue-500 transition-colors duration-300"
              onClick={() => handlePostClick(post.id)}
            >
              {post.title}
            </span>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;
