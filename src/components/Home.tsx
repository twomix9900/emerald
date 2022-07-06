import { Link } from "react-router-dom";
import "./Home.css";

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

export default Home;
