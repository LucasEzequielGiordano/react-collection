import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Book.css";

const Book = ({ id, name, img, price, year, stock }) => {
  return (
    <Card className="card" style={{ width: "16rem" }}>
      <Link
        to={`/detalle/${id}`}
        style={{ pointerEvents: stock <= 0 && "none" }}
      >
        <Card.Img className="imgCard bookDetail" variant="top" src={img} />
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
