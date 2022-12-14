import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./hooks/UseContext";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import BookCollectionContainer from "./pages/bookCollectionContainer/BookCollectionContainer";
import BookDetailContainer from "./pages/bookDetailContainer/BookDetailContainer";
import Cart from "./pages/cart/Cart";
import Form from "./pages/form/Form";
import "./App.css";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/libros" element={<BookCollectionContainer />}></Route>
            <Route
              path="/libros/:filter"
              element={<BookCollectionContainer />}
            ></Route>
            <Route
              path="/detalle/:id"
              element={<BookDetailContainer />}
            ></Route>
            <Route path="/carrito" element={<Cart />}></Route>
            <Route path="/formulario-de-compra" element={<Form />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
