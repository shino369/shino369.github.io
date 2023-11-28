"use client";

import { PropsWithChildren, createContext, useState } from "react";

export const MainContext = createContext<{
  context: any;
  setter: Function;
}>({ context: {}, setter: () => {} });

export default function ContextProvider({ children }: PropsWithChildren) {
  const [context, setContext] = useState({});

  const setter = (newVal: any) => {
    setContext(newVal);
  };

  return (
    <MainContext.Provider value={{ context, setter }}>
      {children}
    </MainContext.Provider>
  );
}
