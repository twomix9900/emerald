import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import TopBar from "./components/Navigation/TopBar";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ParallaxProvider>
  );
}

export default App;
