import { createContext, useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  documentId,
  writeBatch,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { async } from "@firebase/util";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const _handleAddToCart = (item) => {
    const index = books.findIndex((book) => book.id === item.id);
    if (index !== -1) {
      let previousQuantity = books[index].quantity;
      books[index].quantity = previousQuantity + item.quantity;
      let cart = [...books];
      setBooks(cart);
      setLSCart(cart);
    } else {
      let cart = [...books, item];
      setBooks(cart);
      setLSCart(cart);
    }
  };

  const _handleDeleteProduct = (id) => {
    let cart = books.filter((book) => book.id !== id);
    setBooks(cart);
    setLSCart(cart);
  };

  const _handleEmptyCart = () => {
    setBooks([]);
    localStorage.clear();
  };

  const totalQuantity = () => {
    return books.reduce((counter, book) => (counter += book.quantity), 0);
  };

  const totalPrice = () => {
    return books.reduce(
      (counter, book) => counter + book.quantity * book.price,
      0
    );
  };

  const toastify = (text, time) => {
    toast(text, {
      position: "top-center",
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toastify",
    });
  };

  const updateStock = async () => {
    const db = getFirestore();
    const queryCollectionStock = collection(db, "books");
    const queryUpdateStock = query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        books.map((book) => book.id)
      )
    );
    const batch = writeBatch(db);
    await getDocs(queryUpdateStock)
      .then((resp) =>
        resp.docs.forEach((resp) =>
          batch.update(resp.ref, {
            stock:
              resp.data().stock -
              books.find((book) => book.id === resp.id).quantity,
          })
        )
      )
      .catch((err) => console.log(err));
    batch.commit();
  };

  const _handlePurchaseOrder = (e) => {
    const inputName = document.getElementById("formName").value;
    const inputSurname = document.getElementById("formSurname").value;
    const inputPhone = document.getElementById("formPhone").value;
    const inputAddress = document.getElementById("formAddress").value;
    const inputEmail = document.getElementById("formEmail").value;
    const inputEmailRepeat = document.getElementById("formEmailRepeat").value;

    if (inputEmail === inputEmailRepeat) {
      if (
        inputName != "" &&
        inputSurname != "" &&
        inputEmail != "" &&
        inputEmailRepeat != "" &&
        inputPhone != "" &&
        inputAddress != ""
      ) {
        e.preventDefault();
        let order = {};

        order.buyer = {
          name: inputName,
          surname: inputSurname,
          phone: inputPhone,
          address: inputAddress,
          email: inputEmail,
        };

        order.date = new Date();

        order.products = books.map((book) => {
          const id = book.id;
          const name = book.name;
          const quantity = book.quantity;
          const price = book.price * book.quantity;
          return { id, name, quantity, price };
        });

        order.total = totalPrice();

        updateStock();

        const db = getFirestore();
        const queryCollectionOrders = collection(db, "purchase");
        addDoc(queryCollectionOrders, order)
          .then(toastify("Su orden esta siendo procesada!", 2500))
          .then((resp) => {
            toastify(
              `Gracias por su compra! Su códido de orden es: ${resp.id}`,
              5000
            );
            localStorage.clear();
          })
          .catch((err) => console.log(err))
          .finally(() => {
            setTimeout(() => {
              window.location.href = "/libros";
            }, 5000);
          });
      }
    } else {
      toastify("Revise haber completado todos los campos", 2500);
    }
  };

  const setLSCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const getLSCart = () => {
    let localStorageCart = JSON.parse(localStorage.getItem("cart"));
    localStorageCart ? setBooks(localStorageCart) : setLSCart([]);
  };

  useEffect(() => {
    getLSCart();
  }, []);

  return (
    <div>
      <CartContext.Provider
        value={{
          books,
          _handleAddToCart,
          _handleEmptyCart,
          _handleDeleteProduct,
          totalQuantity,
          totalPrice,
          _handlePurchaseOrder,
          toastify,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
