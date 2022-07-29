import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Book.css";

const Book = ({ id, name, img, price, year }) => {
  return (
    <Card className="card" style={{ width: "16rem" }}>
      <Link to={`/detalle/${id}`}>
        <Card.Img className="imgCard" variant="top" src={img} />
      </Link>
      <Card.Body className="bodyCard">
        <Card.Title className="titleCard">
          {name} - {year}
        </Card.Title>
        <Card.Text className="textPrice">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Book;
