import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:27017/api",
});

export const register = async (email, password) => {
  const response = await apiClient.post("/auth/register", { email, password });
  return response.data;
};

export const login = async (email, password) => {
  const response = await apiClient.post("/auth/login", { email, password });
  return response.data;
};

export const requestPasswordReset = async (email) => {
  const response = await apiClient.post("/auth/forgot-password", { email });
  return response.data;
};

export const resetPassword = async (token, newPassword) => {
  const response = await apiClient.post(`/auth/reset-password/${token}`, {
    newPassword,
  });
  return response.data;
};