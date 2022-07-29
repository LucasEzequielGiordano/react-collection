import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import BookCollectionContainer from "./container/bookCollectionContainer/BookCollectionContainer";
import BookDetailContainer from "./container/bookDetailContainer/BookDetailContainer";
import CartContextProvider from "./hooks/Context";
import "./App.css";
import Cart from "./components/cart/Cart";

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
              path="/detalle/:id"
              element={<BookDetailContainer />}
            ></Route>
            <Route path="/carrito" element={<Cart/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
