import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { getFirestore, doc, getDoc } from "firebase/firestore";

import BookDetail from "../../components/bookDetail/BookDetail";
import { getCollection } from "../../helpers/Collection";

import "./BookDetailContainer.css";

function BookDetailContainer() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getCollection(id)
      .then((res) => setBooks(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

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
}

export default BookDetailContainer;
