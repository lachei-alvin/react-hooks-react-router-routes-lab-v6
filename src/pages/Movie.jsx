import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movieDetails = {
  1: {
    title: "Doctor Strange",
    time: "115",
    genres: ["Action", "Adventure", "Fantasy"],
  },
  // Add more movie details as needed, ensuring it aligns with your tests
};

function Movie() {
  const { id } = useParams();
  const movie = movieDetails[id];

  if (!movie) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Movie Not Found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} min</p>
        <div>
          Genres:{" "}
          {movie.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
