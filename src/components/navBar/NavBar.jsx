import { Link, NavLink } from "react-router-dom";
import CartIcon from "../cartIcon/CartIcon";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <NavLink
        activeclassname="currentCategory"
        className="text-white"
        to={`/libros`}
      >
        <h1>Stephen King - Collection</h1>
      </NavLink>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/libros`}>Libros</Link>
            </li>
            <li>
              <Link to={`/libros/70`}>1970 - 1979</Link>
            </li>
            <li>
              <Link to={`/libros/80`}>1980 - 1989</Link>
            </li>
            <li>
              <Link to={`/libros/90`}>1990 - 1999</Link>
            </li>
            <li>
              <Link to={`/libros/00`}>2000 - 2009</Link>
            </li>
            <li>
              <Link to={`/libros/10`}>2010 - 2019</Link>
            </li>
            <Link to={`/carrito`}>
              <CartIcon />
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
