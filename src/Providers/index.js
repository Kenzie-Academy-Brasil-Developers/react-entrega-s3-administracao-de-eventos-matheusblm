import { CartPartyProvider } from "./CartParty/cart";
import { CartWeddingProvider } from "./CartWedding/cart";
import { CartGradProvider } from "./CartGrad/cart";
import { InventoryProvider } from "./Inventory/inventory";

const Providers = ({ children }) => {
  return (
    <InventoryProvider>
      <CartPartyProvider>
        <CartWeddingProvider>
          <CartGradProvider>{children}</CartGradProvider>
        </CartWeddingProvider>
      </CartPartyProvider>
    </InventoryProvider>
  );
};

export default Providers;
