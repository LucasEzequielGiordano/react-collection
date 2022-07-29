import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="containerCollection">
      <div className="item item1"></div>
      <div className="item item2"></div>
      <div className="item item3"></div>
      <div className="item item4"></div>
      <div className="item item5"></div>
      <div className="item item6"></div>
      <div className="item item7"></div>
      <div className="item item8"></div>
      <Link to="/tienda" className="btnHome">
        Stephen King - Collection
      </Link>
    </div>
  );
};

export default Home;
