import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../hooks/UseContext";
import "./Cart.css";

const Cart = () => {
  const {
    books,
    _handleEmptyCart,
    _handleDeleteProduct,
    totalPrice,
    totalQuantity,
  } = useContext(CartContext);

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
            <tbody className="tBody">
              {books.map((book) => (
                <tr key={book.id}>
                  <th className="row">
                    <img
                      className="imgCart"
                      src={book.img}
                      alt="No se pudo reproducir la imagen"
                    />
                  </th>
                  <td>{book.name}</td>
                  <td>{book.price * book.quantity}</td>
                  <td>{book.quantity}</td>
                  <td>
                    <button
                      className="noselect btnDelete"
                      onClick={() => _handleDeleteProduct(book.id)}
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
          <button className="btnEmpty spacing" onClick={_handleEmptyCart}>
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
          <Link to={"/formulario-de-compra"}>
            <Button className="btnPurchase" variant="primary">
              Finalizar Compra
            </Button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="containerEmptyCart1">
      <div className="containerEmptyCart">
        <h2 className="textEmptyCart ">NO HAY LIBROS</h2>
        <NavLink
          activeclassname="currentCategory"
          className="text-white"
          to={"/libros"}
        >
          <button className="btnEmpty">VOLVER A TIENDA</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
