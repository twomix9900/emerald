import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Hello Emerald!</h2>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
