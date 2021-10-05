import { useContext } from "react";
import Drink from "../Drink";
import { CartPartyContext } from "../../Providers/CartParty/cart";
import { CartWeddingContext } from "../../Providers/CartWedding/cart";
import { CartGradContext } from "../../Providers/CartGrad/cart";
import { List } from "../Store/styles";
const Party = ({ type }) => {
  const { cartParty } = useContext(CartPartyContext);
  const { cartWedding } = useContext(CartWeddingContext);
  const { cartGrad } = useContext(CartGradContext);

  return (
    <div>
      <List>
        {type === "casamento" &&
          cartWedding.map((beer) => <Drink beer={beer} type="wedding" />)}
        {type === "formatura" &&
          cartGrad.map((beer) => <Drink beer={beer} type="grad" />)}
        {type === "confraternizacao" &&
          cartParty.map((beer) => <Drink beer={beer} type="party" />)}
      </List>
    </div>
  );
};

export default Party;
