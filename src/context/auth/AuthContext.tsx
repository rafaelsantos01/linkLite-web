"use client";

import React, { createContext, useContext, useState } from "react";

export interface LoginCredentials {
  email: string;
  password: string;
}
interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
}

interface AuthContextProps {
  auth: boolean;
  user: User;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User>({
    id: "1",
    email: "a",
    name: "Rafael Santos",
    phone: "a",
  });

  async function login(credentials: LoginCredentials) {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setAuth(true);
  }

  async function logout() {
    console.log("logout");
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthProviderContext = () => useContext(AuthContext);
