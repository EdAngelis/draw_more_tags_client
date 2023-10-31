"use client";
import React, { createContext, use, useEffect, useState } from "react";

interface UserContextType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const userContext = createContext<UserContextType>({
  user: "",
  setUser: () => {},
});

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
