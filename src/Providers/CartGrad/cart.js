import { createContext, useState } from "react";

export const CartGradContext = createContext();

export const CartGradProvider = ({ children }) => {
  const [cartGrad, setCartGrad] = useState([]);
  const addToCartGrad = (item) => {
    setCartGrad([...cartGrad, item]);
  };
  const removeFromCartGrad = (item) => {
    const newCart = cartGrad.filter((product) => product.id !== item.id);
    setCartGrad(newCart);
  };
  return (
    <CartGradContext.Provider
      value={{ cartGrad, removeFromCartGrad, addToCartGrad }}
    >
      {children}
    </CartGradContext.Provider>
  );
};
