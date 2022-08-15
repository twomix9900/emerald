import { Link } from "react-router-dom";
import "./About.scss";

function About() {
  return (
    <>
      <main>
        <h2>About page</h2>
        <p>Todo</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;
