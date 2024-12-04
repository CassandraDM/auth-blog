import { PostDto } from "../types/post.type";

export const API_URL = import.meta.env.VITE_API_URL;

export const findAll = async () => {
  const response = await fetch(`${API_URL}/posts`);
  const data = await response.json();
  return data;
};

export const findById = async (id: number) => {
  const response = await fetch(`${API_URL}/posts/${id}`);
  const data = await response.json();
  return data;
};

export const create = async (post: PostDto) => {
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
};

export const update = async (id: number, post: PostDto) => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
};

export const remove = async (id: number) => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
