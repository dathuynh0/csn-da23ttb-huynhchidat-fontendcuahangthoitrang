import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");

  const [checkCart, setCheckCart] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const total = cartItems.reduce((sum, item) => {
    const priceString = item.priceSale ? item.priceSale : item.price || 0;

    const finalPrice = priceString.replace(/\./g, "");

    const price = Number(finalPrice) || 0;

    return Math.floor(sum + price * item.number);
  }, 0); // đặt giá trị ban đầu của sum = 0

  const formattedTotal = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  }).format(total);

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
    name,
    setName,
    checkCart,
    setCheckCart,
    cartItems,
    setCartItems,
    formattedTotal,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
