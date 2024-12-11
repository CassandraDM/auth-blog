import { UserDto } from "../types/user.type";

export const API_URL = import.meta.env.VITE_API_URL;

export const authentification = async (user: UserDto) => {
  const response = await fetch(`${API_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Échec de la connexion");
  }
  const data = await response.json();
  localStorage.setItem("token", data.token);
  return data.token;
};

export const register = async (user: UserDto) => {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Échec de l'inscription");
  }
  const data = await response.json();
  return data;
};
