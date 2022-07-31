import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ImHeartBroken } from "react-icons/im";
import { CartContext } from "../../hooks/Context";
import CartModal from "../../components/cartModal/CartModal";
import "./Cart.css";

const Cart = () => {
  const [show, setShow] = useState(false);

  const [fullscreen, setFullscreen] = useState(true);

  const handleClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const { books, emptyCart, deleteProduct, totalPrice, totalQuantity } = useContext(CartContext);

  return books.length ? (
    <div className="containerCart">
      <div className="containerProductsCart">
        <div>
          <table className="table tableMediaQuery">
            <thead className="spacing tableTitle">
              <tr>
                <th className="col">Libro</th>
                <th className="col">Nombre</th>
                <th className="col">Precio</th>
                <th className="col">Cantidad</th>
                <th className="col">Eliminar</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              {books.map((book) => (
                <tr key={book.id}>
                  <th className="row">
                    <img className="imgCart" src={book.img} alt="" />
                  </th>
                  <td>{book.name}</td>
                  <td>{book.price * book.quantity}</td>
                  <td>{book.quantity}</td>
                  <td>
                    <button
                      className="noselect deleteButton"
                      onClick={() => deleteProduct(book.id)}
                    >
                      <span className="text">Eliminar</span>
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button className="buttonEmptyCart spacing" onClick={emptyCart}>
            Vaciar carrito
          </button>
        </div>
      </div>

      <div className="containerResume">
        <div className="containerResumePurchase">
          <table className="table purchaseDetail">
            <thead>
              <tr className="titlePurchaseDetail spacing col">
                <th>
                  <p>DETALLE DE COMPRA</p>
                </th>
              </tr>
            </thead>
            <tbody className="textOrder">
              <tr>
                <th>
                  <p className="spacing">
                    Cantidad de productos:
                    {totalQuantity() !== 0 && totalQuantity()}
                  </p>
                </th>
                <th>
                  <p className="spacing">
                    TOTAL: ${totalPrice() !== 0 && totalPrice()}
                  </p>
                </th>
              </tr>
            </tbody>
          </table>
          <CartModal
            className="buttonEndPurchase spacing"
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            fullscreen={fullscreen}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="containerEmptyCart1">
      <div className="containerEmptyCart animate__animated animate__zoomIn animate__slow">
        <h2 className="textEmptyCart ">SU CARRITO ESTA VACIO </h2>
        <NavLink
          activeclassname="currentCategory"
          className="text-white"
          to={"/libros"}
        >
          <button className="buttonEmptyCart">IR A LA TIENDA </button>
        </NavLink>
        <ImHeartBroken
          className="animate__animated animate__swing animate__slower animate__infinite 	"
          size={50}
        />
      </div>
    </div>
  );
};

export default Cart;
