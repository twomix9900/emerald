import { Link } from "react-router-dom";
import "./Intro.scss";
import ph_gif from "../../assets/ph_snuggles_gif.gif";
import Container from "@mui/material/Container";

function Intro() {
  return (
    <Container>
      <div className="intro-wrapper">
        <div className="r1">
          <div className="left">
            <h3 className="l1 animate__animated animate__slideInDown">
              Hello,
            </h3>
            <h3 className="l2 animate__animated animate__fadeIn animate__delay-2s">
              My name is Emerald
            </h3>
            <h3 className="l3 animate__animated animate__fadeIn animate__delay-2s">
              and I make videos
            </h3>
          </div>
          <div className="right">
            <img src={ph_gif} alt="loading..." />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Intro;
