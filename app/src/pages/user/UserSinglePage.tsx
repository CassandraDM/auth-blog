import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { findById } from "../../services/user.service";
import { findAll } from "../../services/post.service";
import { UserType } from "../../types/user.type";
import { PostType } from "../../types/post.type";

const UserSinglePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserType | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const result = await findById(Number(id));
      setUser(result);
    };
    fetchUser();
  }, [id]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await findAll();
      const userPosts = result.filter(
        (post: PostType) => post.user_id === Number(id)
      );
      setPosts(userPosts);
    };
    fetchPosts();
  }, [id]);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-5 mb-5">
        <h1 className="text-3xl font-bold mb-3">{user.username}</h1>
      </div>
      <h2 className="text-2xl font-bold mb-5">Posts by {user.username}</h2>
      <div className="bg-white rounded-lg shadow-md p-5">
        <ul className="list-none p-0">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-3 mb-3 border-b border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
              onClick={() => navigate(`/post/${post.id}`)}
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600">
                {post.content.substring(0, 100)}...
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserSinglePage;
