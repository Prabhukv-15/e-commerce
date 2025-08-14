// src/context/UserContext.jsx
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
console.log("childer of userContext : ", children);
  const[loguser,setLoguser] = useState(null);   

  const loginUser = (userData) => {
    setLoguser(userData);
  };

  const logoutUser = () => {
    setLoguser(null);
  };
  console.log("Now Logged User Set UserContext ->","loguser  --->", loguser ,"setloguser  --->", setLoguser);

  return (
    <UserContext.Provider value={{ loguser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
