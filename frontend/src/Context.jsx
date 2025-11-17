import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

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
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
