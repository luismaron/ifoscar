import Router from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";


interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const isAuthenticated = token != null;

  useEffect(() => {
    const token = localStorage.getItem('dashboard-ifoscar.token');

    if (token) {
      setToken(token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    }
    else {
      signOut();
    }
  }, []);

  function signOut() {
    localStorage.removeItem('dashboard-ifoscar.token');

    Router.push('/');
  }

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post('/admin/session', {
      email,
      password
    });


    const token = response.data;


    if (!token) {
      toast.error("Email ou senha incorretos.");
      return;
    }

    localStorage.setItem('dashboard-ifoscar.token', token)
    setToken(token)
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('aqui')
    Router.push('/students');
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}