import React, { createContext, useReducer, useState, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  //const [books, setBooks] = useState([]);
  //const addBook = (title, author, id) => {
  //setBooks([...books, { title, author, id }]);
  //};
  //const removeBook = (id) => {
  //setBooks(books.filter((book) => book.id !== id));

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    //to store items in local storage
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
