import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthResponse, LoginData, RegisterData, User } from "@/types/auth";

const API_URL = "http://localhost:3000/auth";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// token expiration handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");
    }

    return Promise.reject(error);
  }
);

export const authAPI = {
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await api.post("/register", data);
    return response.data;
  },
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await api.post("/login", data);
    return response.data;
  },

  //   get profile
  getProfile: async (): Promise<User> => {
    const response = await api.get("/profile");
    return response.data;
  },

  //   google o auth
  googleAuth: async () => {
    return `${API_URL}/google`;
  },
};

export default api;
