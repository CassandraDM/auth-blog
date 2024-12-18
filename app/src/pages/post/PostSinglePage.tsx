import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findById } from "../../services/post.service";

const PostSinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const result = await findById(Number(id));
      setPost(result);
    };
    fetchPost();
  }, [id]);

  if (!post) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-5">{post.title}</h1>
      <p className="text-lg leading-relaxed">{post.content}</p>
    </div>
  );
};

export default PostSinglePage;
