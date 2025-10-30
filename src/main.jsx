import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import "./index.css";

// Dummy data (you can replace with fetch if needed)
const movies = [
  {
    id: 1,
    title: "The Matrix",
    time: 136,
    genres: ["Action", "Sci-Fi"],
  },
  {
    id: 2,
    title: "The Godfather",
    time: 175,
    genres: ["Crime", "Drama"],
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<Movie movies={movies} />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
