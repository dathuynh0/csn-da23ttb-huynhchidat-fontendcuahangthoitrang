import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const [infoUser, setInfoUser] = useState(null);

  //phần search
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const value = {
    accounts,
    setAccounts,
    isSuccess,
    setIsSuccess,
    search,
    setSearch,
    handleSearchChange,
    infoUser,
    setInfoUser,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
