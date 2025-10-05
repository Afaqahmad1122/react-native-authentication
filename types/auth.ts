export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  googleId?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ProfileResponse {
  userId: string;
  email: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  googleLogin: () => Promise<void>;
  error: string | null;
}
