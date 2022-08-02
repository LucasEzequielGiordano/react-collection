import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../hooks/Context";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Form.css";
import { ToastContainer } from "react-toastify";

function Form() {
  const { purchaseOrder } = useContext(CartContext);

  return (
    <>
      <Link className="buttonBack" to="/carrito">
        <MdOutlineKeyboardArrowLeft />
        <span>VOLVER</span>
      </Link>
      <div className="containerForm">
        <form action="">
          <div className="row form-container">
            <div className="col-100">
              <input
                required
                id="formName"
                type="text"
                placeholder="Nombre*"
                className="w-100 input"
              />
            </div>
            <div className="col-75">
              <input
                required
                id="formSurname"
                type="text"
                placeholder="Apellido*"
                className="w-100 input"
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
              />
            </div>
            <div className="col-75">
              <input
                required
                id="formEmail"
                type="email"
                placeholder="Email*"
                className="w-100 input"
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
                  purchaseOrder(e);
                }}
                className="buttonEndPurchase"
                variant="secondary"
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
}

export default Form;
