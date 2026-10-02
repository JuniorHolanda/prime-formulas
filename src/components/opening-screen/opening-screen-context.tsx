"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

type OpeningScreenContextValue = {
  isComplete: boolean;
  complete: () => void;
};

const OpeningScreenContext =
  createContext<OpeningScreenContextValue | null>(null);

export function OpeningScreenProvider({
  children,
}: PropsWithChildren) {
  const [isComplete, setIsComplete] = useState(false);
  const complete = useCallback(() => setIsComplete(true), []);

  return (
    <OpeningScreenContext.Provider value={{ isComplete, complete }}>
      {children}
    </OpeningScreenContext.Provider>
  );
}

export function useOpeningScreenContext() {
  const context = useContext(OpeningScreenContext);

  if (!context) {
    throw new Error(
      "useOpeningScreenContext must be used within OpeningScreenProvider",
    );
  }

  return context;
}
