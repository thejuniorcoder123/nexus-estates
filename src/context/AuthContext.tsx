// src/context/AuthContext.tsx

"use client"; // <-- THIS IS THE FIX. Add this directive to the very top.

import { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of our user object
interface User {
  name: string;
}

// Define the shape of the context's value
interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Simple login function - sets a mock user
  const login = () => {
    setUser({ name: 'Test User' });
  };

  // Simple logout function - clears the user
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};