import { useContext } from "react";
import Drink from "../Drink";
import { InventoryContext } from "../../Providers/Inventory/inventory";
import { List } from "./styles";
const Store = () => {
  const { inventory, setInventory } = useContext(InventoryContext);
  return (
    <List>
      {inventory.map((beer) => (
        <Drink beer={beer} type="store" />
      ))}
    </List>
  );
};

export default Store;
