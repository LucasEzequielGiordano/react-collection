import { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../../hooks/Context";
import "./CartIcon.css";

const CartIcon = () => {
  const {totalQuantity} = useContext(CartContext)
  return (
    <li className="cart">
      <BsBag size={16} />
      {totalQuantity() !== 0 && totalQuantity()}
    </li>
  );
};

export default CartIcon;
