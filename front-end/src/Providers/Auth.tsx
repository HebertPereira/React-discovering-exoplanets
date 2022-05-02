/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
