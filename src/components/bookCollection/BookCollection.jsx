// import Book from "../book/book";
import Book from "../book/Book";
import "./BookCollection.css";

function BookCollection({ books }) {
  return (
      <div className="containerAllCards">
      {books.map((book) => 
        <div className="containerCard" key={book.id}>
          <Book
            name={book.name}
            img={book.img}
            stock={book.stock}
            year={book.year}
            id={book.id}
            price={book.price}
          />
        </div>
      )}
    </div>
  );
}
export default BookCollection;
