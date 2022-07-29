import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/tienda"></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
