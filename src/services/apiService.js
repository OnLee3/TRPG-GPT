import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:27017/api",
});

export const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common["Authorization"];
  }
};

export const isAuthenticated = () => {
  const token = apiClient.defaults.headers.common["Authorization"];
  return !!token;
};

export const register = async (email, password) => {
  const response = await apiClient.post("/auth/register", { email, password });
  return response.data;
};

export const login = async (email, password) => {
  const response = await apiClient.post("/auth/login", { email, password });
  setAuthToken(response.data.token);
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

export const createGameSession = async (sessionName) => {
  const response = await apiClient.post("/game-session/create", {
    sessionName,
  });
  return response.data;
};

export const joinGameSession = async (id) => {
  const response = await apiClient.put(`/game-session/join/${id}`);
  return response.data;
};

export const getGameSessions = async () => {
  const response = await apiClient.get("/game-session/");
  return response.data;
};

export const createCharacter = async (characterData) => {
  const response = await apiClient.post("/characters/create", characterData);
  return response.data;
};

export const updateCharacter = async (characterId, characterData) => {
  const response = await apiClient.put(
    `/characters/${characterId}`,
    characterData
  );
  return response.data;
};

export const getCharacters = async () => {
  const response = await apiClient.get("/characters/");
  return response.data;
};

export const getCharacter = async (characterId) => {
  const response = await apiClient.get(`/characters/${characterId}`);
  return response.data;
};

export const deleteCharacter = async (characterId) => {
  const response = await apiClient.delete(`/characters/${characterId}`);
  return response.data;
};

export const generateStoryEvent = async () => {
  const response = await apiClient.post("/gpt/generate-story-event");
  return response.data;
};

export const generateCharacterBackground = async () => {
  const response = await apiClient.post("/gpt/generate-character-background");
  return response.data;
};

export const generateCharacterInteraction = async (
  characterBackground,
  content
) => {
  const response = await apiClient.post("/gpt/generate-character-interaction", {
    characterBackground,
    content,
  });
  return response.data;
};
