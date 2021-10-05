import { createContext, useState } from "react";

export const CartPartyContext = createContext();

export const CartPartyProvider = ({ children }) => {
  const [cartParty, setCartParty] = useState([]);
  const addToCartParty = (item) => {
    setCartParty([...cartParty, item]);
  };
  const removeFromCartParty = (item) => {
    const newCart = cartParty.filter((product) => product.id !== item.id);
    setCartParty(newCart);
  };
  return (
    <CartPartyContext.Provider
      value={{ cartParty, removeFromCartParty, addToCartParty }}
    >
      {children}
    </CartPartyContext.Provider>
  );
};
