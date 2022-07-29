import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import "./App.css";
import BookCollectionContainer from "./container/bookCollectionContainer/BookCollectionContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/libros" element={<BookCollectionContainer />}></Route>
            <Route path="/carrito"></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
