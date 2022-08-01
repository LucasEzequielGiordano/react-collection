import "./CreditCard.css";

const CreditCard = () => {
  return (
    <>
      <div class="d-flex justify-content-between finalizarCompra row">
        <h1 class="col-md-12">Finalizá tu compra</h1>
        <div class="productos_finalizarCompra col-md-4">
          <div class="total">
            <p>Total</p>
          </div>
        </div>
        {/* <div class="datosPersonales_finalizarCompra col-md-7"> */}
        {/* <h3>
            Datos Personales (values por defecto para no tener que tipear)
          </h3>
          <form onSubmit={true && false} class="finalizarCompraForm">
            <div class="form-group">
              <label for="nombre">Nombre</label>
              <input
                class="form-control"
                type="text"
                id="nombre"
                placeholder="Juan Perez"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                class="form-control"
                type="email"
                id="email"
                placeholder="jperez@email.com"
              />
            </div> */}
        {/* <div class="finalizarCompraForm form-group d-flex flex-row justify-content-between flex-wrap telefono">
          <label class="w-100" for="tel">
            Telefono
          </label>
          <input
            class="form-control"
            type="text"
            placeholder="1553441515"
            id="tel"
          />
        </div>
        <div class="form-group cuotas">
          <label for="cuotas">Cantidad de Cuotas</label>
          <select type="option" class="form-control" name="" id="cuotas">
            <option placeholder="1"></option>
            <option placeholder="3"></option>
            <option placeholder="6"></option>
            <option placeholder="12"></option>
          </select>
        </div> */}
        <h3>Datos de la tarjeta de Credito</h3>
        <div class="tarjeta_finalizarCompra">
          <div class="row justify-content-between">
            <div class="col-md-12">
              <img src="img/credit_card.svg" />
            </div>
            <div class="col-md-7 izquierda_tarjeta">
              <label for="creditCardNumber">Número de tarjeta</label>
              <input
                class="numeroDeTarjeta"
                type="text"
                name=""
                id="creditCardNumber"
                placeholder="1213-91011-5678-1234"
              />
              <label for="creditCardName">Nombre</label>
              <input
                type="text"
                name=""
                id="creditCardName"
                placeholder="PEREZ JUAN"
              />
              <label for="creditCardCVC">cvc</label>
              <input type="text" name="" id="creditCardCVC" placeholder="000" />
            </div>
            <div class="col-md-4 derecha_tarjeta">
              <div class="row">
                <div class="col-md-6">
                  <label for="creditCardDesde">Desde</label>
                  <input
                    type="text"
                    name=""
                    id="creditCardDesde"
                    placeholder="00/00"
                  />
                </div>
                <div class="col-md-6">
                  <label for="credictCardHasta">Hasta</label>
                  <input
                    type="text"
                    name=""
                    id="credictCardHasta"
                    placeholder="00/00"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <input
            class="btn btn-primary"
            type="submit"
            placeholder="Confirmar compra"
          />
        </div>
        {/* </form>
        </div> */}
      </div>
    </>
  );
};

export default CreditCard;
