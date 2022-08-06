import ReactDOM from "react-dom/client";
import getFirestoreApp from "./services/Firebase";
import App from "./App";
import "./index.css";

getFirestoreApp()

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
