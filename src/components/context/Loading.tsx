import { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useLoading must be used inside LoadingProvider");
  }

  return context;
};