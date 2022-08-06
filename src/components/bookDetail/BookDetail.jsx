import { useContext, useState } from "react";
import { CartContext } from "../../hooks/UseContext";
import Count from "../count/Count";
import Options from "../options/Options";
import "./BookDetail.css";

const BookDetail = ({ books, onAdd }) => {
  const [option, setOption] = useState("Count");
  const { _handleAddToCart } = useContext(CartContext);

  const _handleOptions = () => {
    setOption("Options");
  };

  function onAdd(qty) {
    _handleAddToCart({ ...books, quantity: qty });
    _handleOptions();
  }

  return (
    <div className="cardDetail">
      <div className="cardImg">
        <img className="w" src={books.img} alt="First slide" />
      </div>
      <div className="container-fluid">
        <div className="wrapper row">
          <div className="details col-md-12">
            <h3 className="productTitle">{books.name}</h3>
            <p className="productDescription">{books.description}</p>
            <h4 className="price">
              Precio: <span>${books.price}</span>
            </h4>
            {option === "Count" ? (
              <Count
                stock={books.stock}
                initial={1}
                onAdd={onAdd}
                handleInputType={_handleOptions}
              />
            ) : (
              <Options />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
