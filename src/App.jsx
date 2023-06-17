import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
export default function App() {
  const [libraryBooks, setLibraryBooks] = useState([]);

  const handleAddToLibrary = (book) => {
    setLibraryBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> ||
        <NavLink to="/search">Search</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home libraryBooks={libraryBooks} />} />
        <Route
          path="/search"
          element={<Search onAddToLibrary={handleAddToLibrary} />}
        />
      </Routes>
    </div>
  );
}
