import { Link } from "react-router-dom";
import "./Partners.scss";
import { Parallax } from "react-scroll-parallax";
import ph_gif from "../../assets/ph_snuggles_gif.gif";
import ph_logo from "../../assets/ph_logo.jpeg";
import Container from "@mui/material/Container";

function Partners() {
  return (
    <Container>
      <div className="partners-wrapper">
        <Parallax speed={-25}>
          <img src={ph_gif} alt="loading..." className="video-one" />
        </Parallax>
        <h1 className="partners">Our Partners</h1>
        <div className="r1">
          <Parallax speed={25}>
            <img src={ph_logo} alt="loading..." className="video-one" />
          </Parallax>
          <Parallax speed={25}>
            <img src={ph_logo} alt="loading..." className="video-two" />
          </Parallax>
          <Parallax speed={20}>
            <img src={ph_logo} alt="loading..." className="video-three" />
          </Parallax>
          <Parallax speed={25}>
            <img src={ph_logo} alt="loading..." className="video-four" />
          </Parallax>
        </div>
      </div>
    </Container>
  );
}

export default Partners;
