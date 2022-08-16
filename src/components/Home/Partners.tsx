import { Link } from "react-router-dom";
import "./Partners.scss";
import { Parallax } from "react-scroll-parallax";
import ph_gif from "../../assets/ph_snuggles_gif.gif";
import ph_logo from "../../assets/ph_logo.jpeg";
import Container from "@mui/material/Container";
import AnimateInView from "../Shared/AnimateInView";

function Partners() {
  return (
    <Container>
      <div className="partners-wrapper">
        <Parallax speed={-25}>
          <img
            src={ph_gif}
            alt="loading..."
            className="video-one animate__animated hover-bounce"
          />
        </Parallax>
        <div className="partners">
          <AnimateInView>
            <h1>Our Partners</h1>
          </AnimateInView>
        </div>
        <div className="r1">
          <Parallax speed={5}>
            <img
              src={ph_logo}
              alt="loading..."
              className="logo-one animate__animated hover-bounce"
            />
          </Parallax>
          <Parallax speed={20}>
            <img
              src={ph_logo}
              alt="loading..."
              className="logo-two animate__animated hover-bounce"
            />
          </Parallax>
          <Parallax speed={35}>
            <img
              src={ph_logo}
              alt="loading..."
              className="logo-three animate__animated hover-bounce"
            />
          </Parallax>
          <Parallax speed={50}>
            <img
              src={ph_logo}
              alt="loading..."
              className="logo-four animate__animated hover-bounce"
            />
          </Parallax>
        </div>
      </div>
    </Container>
  );
}

export default Partners;
