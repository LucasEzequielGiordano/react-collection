import { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../../hooks/UseContext";
import "./CartIcon.css";

const CartIcon = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <li className="cartIcon">
      <BsBag size={16} />
      {totalQuantity() !== 0 && totalQuantity()}
    </li>
  );
};

export default CartIcon;
