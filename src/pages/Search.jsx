import { useState } from "react";
import { library } from "../data/bookData";
import "./Search.css";

export const Search = ({ onAddToLibrary }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
    const filteredResults = library.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleAddToLibrary = (bookId) => {
    const selectedBook = library.find((book) => book.id === bookId);
    if (selectedBook) {
      onAddToLibrary({ ...selectedBook, status: "none" });
    }
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInput}
          placeholder="Search Books"
        />
      </div>

      <div className="search-results">
        {searchResults.map(({ id, title, author, image }) => (
          <div key={id}>
            <img src={image} alt={title} style={{ width: "200px" }} />
            <br />
            <b>{title}</b>
            <p>{author}</p>
            <button onClick={() => handleAddToLibrary(id)}>
              Add to Library
            </button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
