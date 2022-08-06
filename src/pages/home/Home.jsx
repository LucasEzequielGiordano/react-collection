import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="containerCollectionHome">
      <div className="bgHome bgHome1"></div>
      <div className="bgHome bgHome2"></div>
      <div className="bgHome bgHome3"></div>
      <div className="bgHome bgHome4"></div>
      <div className="bgHome bgHome5"></div>
      <div className="bgHome bgHome6"></div>
      <div className="bgHome bgHome7"></div>
      <div className="bgHome bgHome8"></div>
      <Link to="/libros" className="btnHome">
        <button className="btn-home">STEPHEN KING - COLLECTION</button>
      </Link>
    </div>
  );
};

export default Home;
