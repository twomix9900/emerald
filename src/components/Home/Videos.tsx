import { Link } from "react-router-dom";
import "./Videos.scss";
import ph_gif from "../../assets/ph_snuggles_gif.gif";
import { Parallax } from "react-scroll-parallax";
import Container from "@mui/material/Container";

function Videos() {
  return (
    <Container>
      <div className="videos-wrapper">
        <Parallax speed={0}>
          <img src={ph_gif} alt="loading..." className="video-one" />
        </Parallax>
        <Parallax speed={75}>
          <img src={ph_gif} alt="loading..." className="video-two" />
        </Parallax>
        <Parallax speed={50}>
          <img src={ph_gif} alt="loading..." className="video-three" />
        </Parallax>
        <Parallax speed={85}>
          <img src={ph_gif} alt="loading..." className="video-four" />
        </Parallax>
        <div className="believe">
          <Parallax>
            <h1>Seeing is believing</h1>
          </Parallax>
        </div>
      </div>
    </Container>
  );
}

export default Videos;
