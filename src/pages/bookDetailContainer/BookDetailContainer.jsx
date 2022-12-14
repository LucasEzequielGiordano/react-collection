import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import BookDetail from "../../components/bookDetail/BookDetail";
import "./BookDetailContainer.css";

const BookDetailContainer = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const productNotFound = useNavigate();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "books", id);
    getDoc(dbQuery)
      .then((resp) => {
        !resp.data() &&
          productNotFound("Producto-No-Encontrado", { replace: true });
        setBooks({ ...resp.data(), id: resp.id });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [productNotFound]);

  return (
    <div>
      {loading ? (
        <div className="containerLoader">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="containerDetail">
            <BookDetail books={books} />
          </div>
        </>
      )}
    </div>
  );
};

export default BookDetailContainer;
