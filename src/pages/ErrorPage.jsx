import React from "react";
import NavBar from "../components/NavBar";

function ErrorPage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
        <p>The page you are looking for could not be found.</p>
      </main>
    </>
  );
}

export default ErrorPage;
