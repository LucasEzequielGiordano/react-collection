import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="containerChangeBtn w-75 m-auto justify-content-between mt-5">
      <Link to="/carrito">
        <button className="btnOptions">Terminar compra!</button>
      </Link>
      <Link to="/libros">
        <button className="btnOptions">Seguir comprando!</button>
      </Link>
    </div>
  );
}

export default Options;
