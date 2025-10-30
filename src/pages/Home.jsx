import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Doctor Strange" },
  { id: 2, title: "Iron Man" },
  { id: 3, title: "Captain Marvel" },
  { id: 4, title: "The Lion King" },
];

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <Link to={`/movie/${movie.id}`}>View Info</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;
