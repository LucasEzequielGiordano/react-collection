// import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookCollection from "../../components/bookCollection/BookCollection";
// import { getCollection } from "../../helpers/Collection";
// import { collection } from "../../helpers/Collection"
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

// import BookCollection from "../../components/bookCollection/BookCollection";

import "./BookCollectionContainer.css";

function BookCollectionContainer() {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);

  const { year } = useParams();

  // useEffect(() => {
  //   if (id) {
  //     getCollection()
  //       .then((res) => setBooks(res.filter((vid) => vid.id === id)))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   } else {
  //     getCollection()
  //       .then((res) => setBooks(res))
  //       .catch((err) => console.log(err))
  //   }
  // }, [id]);
  
    useEffect(() => {
      const db = getFirestore();
      const queryCollection = collection(db, "books");
      const queryCollectionFilter = year
      ? query(queryCollection, where("year", "==", year))
      : queryCollection;
      getDocs(queryCollectionFilter)
      .then((resp) =>
      setBooks(resp.docs.map((prod) => ({ ...prod.data(), id: prod.id })))
      )
      .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [year]);
  //   console.log(book)

  return (
    <div>
      {loading ? (
        <div className="containerLoader">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {year && (
            <Link className="buttonBack" to="/libros">
              {/* <MdOutlineKeyboardArrowLeft /> */}
              <span>INICIO</span>
            </Link>
          )}
          <BookCollection books={books} />
        </>
      )}
    </div>
  );
}

export default BookCollectionContainer;
