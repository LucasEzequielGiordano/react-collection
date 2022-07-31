// import { useContext, useState } from "react";
// import { CartContext } from "../../context/CartContext";

// import ItemCount from "../itemCount/itemCount";
// import InputCount from "../InputCount/InputCount";
import { useState } from "react";
import Count from "../count/Count";
import Options from "../options/Options";

import "./BookDetail.css";

function BookDetail({ books, onAdd }) {
  const [option, setOption] = useState("Count");
  //   const { addToCart } = useContext(CartContext);

  function handleInputType() {
    setOption("Options");
}

function onAdd(qty) {
    //   addToCart({ ...product, quantity: qty });
    handleInputType();
}

  return (
    <div className="cardDetail">
      <div className="cardImg">
        <img className=" w" src={books.img} alt="First slide" />
      </div>
      <div className="container-fluid">
        <div className="wrapper row">
          <div className="details col-md-12">
            <h3 className="product-title">{books.name}</h3>
            <p className="product-description">{books.description}</p>
            <h4 className="price">
              Precio: <span>${books.price}</span>
            </h4>
            {option === "Count" ? (
              <Count
                stock={books.stock}
                initial={1}
                onAdd={onAdd}
                handleInputType={handleInputType}
              />
            ) : (
              <Options />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
