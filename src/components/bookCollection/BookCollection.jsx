import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Book from "../book/Book";
import "./BookCollection.css";

const BookCollection = ({ books }) => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  const pagesBooks = () => {
    if (search.length === 0) return books.slice(page, page + 20);
    const filterBook = books.filter((book) => book.name.toLowerCase().includes(search));
    return filterBook.slice(page, page + 20);
  };

  const _handlePreviousPage = (e) => {
    e.preventDefault();
    page > 0 && setPage(page - 20);
  };

  const _handleNextPage = (e) => {
    e.preventDefault();
    if (books.filter((book) => book.name.includes(search)).length > page + 20)
      page < books.length && setPage(page + 20);
  };

  const _handleSearchBooks = ({ target }) => {
    setPage(0);
    setSearch(target.value);
  };

  return (
    <>
      <div className="search">
        <input type="text" value={search} onChange={_handleSearchBooks} />
        <AiOutlineSearch size={23} className="magnifyingGlass" />
      </div>
      <div className="containerAllCards">
        {pagesBooks().map((book) => (
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
        ))}
      </div>
      <div className="btnsPages">
        <button className="backAndNext" onClick={_handlePreviousPage}>
          Anterior
        </button>
        <button className="backAndNext" onClick={_handleNextPage}>
          Siguiente
        </button>
      </div>
    </>
  );
};
export default BookCollection;
