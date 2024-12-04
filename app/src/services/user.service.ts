import { UserDto } from "../types/user.type";

export const API_URL = import.meta.env.VITE_API_URL;

export const findAll = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();
  return data;
};

export const findById = async (id: number) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  const data = await response.json();
  return data;
};

export const create = async (user: UserDto) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const update = async (id: number, user: UserDto) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const remove = async (id: number) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
