const collection = [
  {
    id: 1,
    name: "El Fugitivo",
    year: 1982,
    price: "750",
    stock: 5,
    img: "https://3.bp.blogspot.com/-bzchoi1Il9U/UIgPKVBhkAI/AAAAAAAACMM/u5IzGMUmUuE/w426-h640/33b48465874a3aae5ce6692af3325983.jpg",
  },
  {
    id: 2,
    name: "El Visitante",
    year: 2018,
    price: "750",
    stock: 5,
    img: "https://th.bing.com/th/id/R.ab22a1ef4c4da04a310c8fbcfd959220?rik=ElIoWE7qYT%2bNDQ&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    name: "El Viento Por La Cerradura",
    year: 2012,
    price: "750",
    stock: 5,
    img: "https://i.pinimg.com/originals/73/86/e3/7386e3447b63d86e47fe24c264f1b410.jpg",
  },
  {
    id: 4,
    name: "Insomnia",
    year: 1994,
    price: "750",
    stock: 5,
    img: "https://th.bing.com/th/id/R.81efefe8d106cc00b038053febd3946e?rik=0GKBo1FG39Fr0Q&pid=ImgRaw&r=0",
  },
  {
    id: 5,
    name: "La Historia De Lisey",
    year: 2006,
    price: "750",
    stock: 5,
    img: "https://th.bing.com/th/id/R.35de1ef360a6e12f9c7e66db5c7068a4?rik=7S6KLqXy6O29hg&pid=ImgRaw&r=0",
  },
//   { id: 6, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
//   { id: 1, name: "", year: 1970, price: "750", stock: 5, img: "" },
];

export const getCollection = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = id
        ? collection.find((book) => book.id == id)
        : collection;
      resolve(query);
    }, 500);
  });
};