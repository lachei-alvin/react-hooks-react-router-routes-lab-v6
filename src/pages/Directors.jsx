import React from "react";
import NavBar from "../components/NavBar";

const directors = [
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Sky High"],
  },
  {
    name: "Jennifer Lee",
    movies: ["Frozen", "Frozen II"],
  },
];

function Directors() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        <ul>
          {directors.map((director) => (
            <li key={director.name}>
              <h2 id={`${director.name.replace(/\s+/g, "-")}-heading`}>
                {director.name}
              </h2>
              <ul
                // Remove aria-labelledby to avoid conflict with aria-label
                aria-label={`${director.name}'s movies`}
                role="list"
              >
                {director.movies.map((movie) => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Directors;
