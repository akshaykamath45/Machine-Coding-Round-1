import { useState } from "react";
import { booksList } from "../data/bookData";
import "./Home.css";
import { Search } from "./Search";

export const Home = () => {
  const [books, setBooks] = useState(booksList);

  const handleUserInput = (e, bookId) => {
    const { value } = e.target;
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId ? { ...book, status: value } : book
      )
    );
  };

  // const handleAddToLibrary = (selectedBook) => {
  //   setBooks((prevBooks) => [...prevBooks, selectedBook]);
  // };

  return (
    <div>
      <div className="shelf">
        <h1>Currently Reading</h1>
        {books.map(
          ({ title, author, image, status, id }) =>
            status === "currentlyReading" && (
              <div key={id} className="book">
                <img src={image} alt={title} />
                <br />
                <b>{title}</b>
                <p>{author}</p>
                <select value={status} onChange={(e) => handleUserInput(e, id)}>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="read">Read</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="none">None</option>
                </select>
                <hr />
              </div>
            )
        )}
      </div>
      <div className="shelf">
        <h1>Want to Read</h1>
        {books.map(
          ({ title, author, image, status, id }) =>
            status === "wantToRead" && (
              <div key={id} className="book">
                <img src={image} alt={title} />
                <br />
                <b>{title}</b>
                <p>{author}</p>
                <select value={status} onChange={(e) => handleUserInput(e, id)}>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="none">None</option>
                </select>
                <hr />
              </div>
            )
        )}
      </div>
      <div className="shelf">
        <h1>Read</h1>
        {books.map(
          ({ title, author, image, status, id }) =>
            status === "read" && (
              <div key={id} className="book">
                <img src={image} alt={title} />
                <br />
                <b>{title}</b>
                <p>{author}</p>
                <select value={status} onChange={(e) => handleUserInput(e, id)}>
                  <option value="read">Read</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="none">None</option>
                </select>
                <hr />
              </div>
            )
        )}
      </div>
      <div className="shelf">
        <h1>None</h1>
        {books.map(
          ({ title, author, image, status, id }) =>
            status === "none" && (
              <div key={id} className="book">
                <img src={image} alt={title} />
                <br />
                <b>{title}</b>
                <p>{author}</p>
                <select value={status} onChange={(e) => handleUserInput(e, id)}>
                  <option value="read">Read</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="none">None</option>
                </select>
                <hr />
              </div>
            )
        )}
      </div>
      {/* <Search onAddToLibrary={handleAddToLibrary} /> */}
    </div>
  );
};
