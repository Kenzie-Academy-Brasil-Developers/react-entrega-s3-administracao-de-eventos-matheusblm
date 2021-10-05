import { createContext, useState } from "react";

export const CartWeddingContext = createContext();

export const CartWeddingProvider = ({ children }) => {
  const [cartWedding, setCartWedding] = useState([]);
  const addToCartWedding = (item) => {
    setCartWedding([...cartWedding, item]);
  };
  const removeFromCartWedding = (item) => {
    const newCart = cartWedding.filter((product) => product.id !== item.id);
    setCartWedding(newCart);
  };
  return (
    <CartWeddingContext.Provider
      value={{ cartWedding, removeFromCartWedding, addToCartWedding }}
    >
      {children}
    </CartWeddingContext.Provider>
  );
};
