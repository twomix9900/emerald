import { Link } from "react-router-dom";
import "./Videos.scss";
import ph_gif from "../../assets/ph_snuggles_gif.gif";
import { Parallax } from "react-scroll-parallax";
import Container from "@mui/material/Container";
import AnimateInView from "../Shared/AnimateInView";

function Videos() {
  return (
    <Container>
      <div className="videos-wrapper">
        <Parallax speed={0}>
          <img
            src={ph_gif}
            alt="loading..."
            className="animate__animated video-one hover-bounce"
          />
        </Parallax>
        <Parallax speed={75}>
          <img
            src={ph_gif}
            alt="loading..."
            className="animate__animated video-two hover-bounce"
          />
        </Parallax>
        <Parallax speed={50}>
          <img
            src={ph_gif}
            alt="loading..."
            className="animate__animated video-three hover-bounce"
          />
        </Parallax>
        <Parallax speed={85}>
          <img
            src={ph_gif}
            alt="loading..."
            className="animate__animated video-four hover-bounce"
          />
        </Parallax>
        <div className="believe">
          <AnimateInView>
            <h1>Seeing is believing</h1>
          </AnimateInView>
        </div>
      </div>
    </Container>
  );
}

export default Videos;
