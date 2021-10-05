import { useContext, useState } from "react";
import { CartPartyContext } from "../../Providers/CartParty/cart";
import { CartWeddingContext } from "../../Providers/CartWedding/cart";
import { CartGradContext } from "../../Providers/CartGrad/cart";
import { Item } from "./styles";

const Drink = ({ beer, type }) => {
  const { addToCartParty, removeFromCartParty } = useContext(CartPartyContext);
  const { addToCartWedding, removeFromCartWedding } =
    useContext(CartWeddingContext);
  const { addToCartGrad, removeFromCartGrad } = useContext(CartGradContext);
  const [show, setShow] = useState("");
  return (
    <Item key={beer.id}>
      <h4>{beer.name}</h4>
      <h6>* Fabricada desde de {beer.first_brewed}</h6>
      <img src={beer.image_url} alt="beer" />
      <h5>{beer.tagline}</h5>
      <span>{beer.description}</span>
      <h5>Quantidade: {beer.volume.value}L</h5>
      {type === "store" && (
        <div>
          <select onChange={(e) => setShow(e.target.value)}>
            <option value="select">Selecione um carrinho</option>
            <option value="casamento">Casamento</option>
            <option value="formatura">Formatura</option>
            <option value="confraternizacao">Confraternizacao</option>
          </select>
          {show === "casamento" && (
            <button onClick={() => addToCartWedding(beer)}>
              Adicionar ao Carrinho de Casamento
            </button>
          )}
          {show === "formatura" && (
            <button onClick={() => addToCartGrad(beer)}>
              Adicionar ao Carrinho de Formatura
            </button>
          )}
          {show === "confraternizacao" && (
            <button onClick={() => addToCartParty(beer)}>
              Adicionar ao Carrinho de Confraternizacao
            </button>
          )}
        </div>
      )}
      {type === "party" && (
        <button onClick={() => removeFromCartParty(beer)}>
          Remover do Carrinho
        </button>
      )}
      {type === "wedding" && (
        <button onClick={() => removeFromCartWedding(beer)}>
          Remover do Carrinho
        </button>
      )}
      {type === "grad" && (
        <button onClick={() => removeFromCartGrad(beer)}>
          Remover do Carrinho
        </button>
      )}
    </Item>
  );
};

export default Drink;
