import { createContext, useState } from "react";

interface contextInterface {
  user?: {
    name?: string;
    email?: string;
  };
  setUser?: (user: any) => void;
  userToken?: string;
  setUserToken?: (userToken: any) => void;
}

interface providerProps {
  children: React.ReactNode;
}
export const StateContext = createContext<contextInterface>({
  user: {},
  userToken: "",
});

export const ContextProvider = ({ children }: providerProps) => {
  const [user, setUser] = useState({
    name: "Tom Cook",
    email: "tom@example.com",
  });
  const [userToken, setUserToken] = useState(undefined);
  return (
    <StateContext.Provider value={{ user, setUser, userToken, setUserToken }}>
      {children}
    </StateContext.Provider>
  );
};
