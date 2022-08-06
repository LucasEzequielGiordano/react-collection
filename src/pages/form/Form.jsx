import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { CartContext } from "../../hooks/UseContext";
import "./Form.css";

const Form = () => {
  const { _handlePurchaseOrder } = useContext(CartContext);

  return (
    <>
      <Link className="buttonBackForm" to="/carrito">
        <MdOutlineKeyboardArrowLeft />
        <span>VOLVER</span>
      </Link>
      <div className="containerForm">
        <form>
          <div className="row formContainer">
            <div className="col-100">
              <input
                required
                id="formName"
                type="text"
                placeholder="Nombre*"
                className="w-100 input"
                name="name"
              />
            </div>
            <div className="col-75">
              <input
                required
                id="formSurname"
                type="text"
                placeholder="Apellido*"
                className="w-100 input"
                name="lastName"
              />
            </div>
            <div className="col-75">
              <input
                required
                id="formPhone"
                type="number"
                placeholder="Celular"
                className="w-100 input"
              />
            </div>
            <div className="col-75">
              <input
                required
                id="formAddress"
                type="text"
                placeholder="Domicilio*"
                className="w-100 input"
                name="domicilio"
              />
            </div>
            <div className="col-75">
              <input
                required
                id="formEmail"
                type="email"
                placeholder="Email*"
                className="w-100 input"
                name="email"
              />
            </div>
            <div className="col-75">
              <input
                required
                id="formEmailRepeat"
                type="email"
                placeholder="Valide su Email*"
                className="w-100 input"
              />
            </div>
            <div className="divBtnPurchase">
              <p className="required">*Obligatorio</p>
              <Button
                onClick={(e) => {
                  _handlePurchaseOrder(e);
                }}
                className="btnEndPurchase"
                variant="secondary"
                type="submit"
              >
                FINALIZAR COMPRA
              </Button>
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
