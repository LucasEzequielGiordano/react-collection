import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import BookCollection from "../../components/bookCollection/BookCollection";
import TopPage from "../../components/topPage/TopPage";
import "./BookCollectionContainer.css";

const BookCollectionContainer = () => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);
  const { filter } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "books");
    const queryCollectionFilter = filter
      ? query(queryCollection, where("filter", "==", filter))
      : queryCollection;
    getDocs(queryCollectionFilter)
      .then((resp) =>
        setBooks(resp.docs.map((prod) => ({ ...prod.data(), id: prod.id })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [filter]);

  return (
    <div>
      {loading ? (
        <div className="containerLoader">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {filter && (
            <Link className="buttonBack" to="/libros">
              <MdOutlineKeyboardArrowLeft />
              <span>INICIO</span>
            </Link>
          )}
          <BookCollection books={books.sort((a, b) => b.stock - a.stock)} />
          <TopPage />
        </>
      )}
    </div>
  );
};

export default BookCollectionContainer;
