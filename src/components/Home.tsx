import { Link } from "react-router-dom";
import "./Home.scss";
import "animate.css";
import ph_gif from "../assets/ph_snuggles_gif.gif";
import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import Videos from "./Home/Videos";
import Intro from "./Home/Intro";
import Partners from "./Home/Partners";
import Contact from "./Home/Contact";
import Container from "@mui/material/Container";
import Footer from "./Footer";

function Home() {
  return (
    <Container>
      <div className="home-wrapper">
        <Intro />
        <Videos />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </Container>
  );
}

export default Home;
