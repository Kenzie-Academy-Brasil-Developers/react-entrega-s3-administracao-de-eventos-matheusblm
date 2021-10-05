import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  const getIventory = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setInventory(response.data));
  };

  useEffect(() => {
    getIventory();
  }, []);

  return (
    <InventoryContext.Provider value={{ inventory, setInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};
