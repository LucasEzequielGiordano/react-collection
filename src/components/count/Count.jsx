import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Count.css";

const Count = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const _handleSubstract = () => setCount(count - 1);
  const _handleAdd = () => setCount(count + 1);

  return (
    <div className="containerCounter1">
      <h3>STOCK DISPONIBLE: {stock}</h3>
      <div className="containerCounter">
        <button
          className="buttonCounter"
          onClick={_handleSubstract}
          disabled={count === initial ? true : null}
        >
          <FaMinus />
        </button>
        <p className="number">{count}</p>
        <button
          className="buttonCounter"
          onClick={_handleAdd}
          disabled={count >= stock ? true : null}
        >
          <FaPlus />
        </button>
      </div>
      <div className="containerButtonCart">
        <button
          className="cta"
          onClick={() => onAdd(count)}
          disabled={stock === 0 ? true : null}
        >
          <span className="hover-underline-animation"> AÑADIR AL CARRITO </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              transform="translate(30)"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Count;
