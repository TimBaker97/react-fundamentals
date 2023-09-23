import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

// The books array is mapped to a new array and is destructured too with the props being book
function BookList() {
  return (
    <>
      <h1>Best Selling Amazon Books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          // const { img, title, author, id } = book;
          // return <Book img={img} title={title} author={author} key={id} />; // original way
          return <Book {...book} key={book.id} number={index} />; // Method using spread operator
        })}
      </section>
    </>
  );
}
export default BookList;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
