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

export const CartContext = createContext([]);

function CartContextProvider({ children }) {
  const [books, setBooks] = useState([]);

  function addToCart(item) {
    const index = books.findIndex((book) => book.id === item.id);

    if (index !== -1) {
      let previousQuantity = books[index].quantity;
      books[index].quantity = previousQuantity + item.quantity;
      let cart = [...books];
      setBooks(cart);
      // setLocalStorageCart(cart);
    } else {
      let cart = [...books, item];
      setBooks(cart);
      // setLocalStorageCart(cart);
    }
  }

  //FUNCTION TO DELETE ONE PRODUCT IN PARTICULAR
  function deleteProduct(id) {
    let cart = books.filter((book) => book.id !== id);
    setBooks(cart);
    // setLocalStorageCart(cart);
  }

  //FUNCTION TO EMPTY CART
  function emptyCart() {
    setBooks([]);
    // localStorage.clear();
  }

  //TOTAL QUANTITY , THIS WILL BE SHOWN IN THE RESUME PURCHASE
  function totalQuantity() {
    return books.reduce((counter, book) => (counter += book.quantity), 0);
  }

  //TOTAL PRICE , THIS WILL BE SHOWN IN THE RESUME PURCHASE
  function totalPrice() {
    return books.reduce(
      (counter, book) => counter + book.quantity * book.price,
      0
    );
  }

  async function updateStock() {
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
  }

  function purchaseOrder(e) {
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
          .then(alert("Su orden esta siendo procesada!"))
          .then(
            (resp) =>
              alert(`Gracias por su compra! Su códido de orden es: ${resp.id}`)
            // localStorage.clear()
          )
          .catch((err) => console.log(err))
          .finally(() => {
            setTimeout(() => {
              window.location.href = "/libros";
            }, 5000);
          });
      }
    } else {
      alert("REVISE SUS DATOS");
    }
  }

  // function setLocalStorageCart(cart) {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }

  // function getLocalStorageCart() {
  //   let localStorageCart = JSON.parse(localStorage.getItem("cart"));
  // localStorageCart ? setBooks(localStorageCart) : setLocalStorageCart([]);
  // }

  // useEffect(() => {
  //   getLocalStorageCart();
  // }, []);

  return (
    <div>
      <CartContext.Provider
        value={{
          books,
          addToCart,
          emptyCart,
          deleteProduct,
          totalQuantity,
          totalPrice,
          purchaseOrder,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default CartContextProvider;
