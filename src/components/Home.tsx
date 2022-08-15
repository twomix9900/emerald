import { Link } from "react-router-dom";
import "./Home.scss";
import YouTube, { YouTubeProps } from "react-youtube";
import "animate.css";
import ph_gif from "../assets/ph_snuggles_gif.gif";
// import YoutubeIframe from "./YoutubeIframe";

function Home() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.playVideo();
  };

  const opts: YouTubeProps["opts"] = {
    // position: "absolute",
    // top: 0,
    // left: 0,
    // width: "100%",
    // height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute: 1, // video must be muted to allow autoplay
      controls: 0, // hide controls
      loop: 1,
      playlist: "2g811Eo7K8U", // this must be the same as the videoId
      showinfo: 0,
      rel: 0,
    },
  };

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
  };

  // const videoId = "ybwuiP6v7hk";
  // const videoTitle = "[전인혁작곡] 야다(Yada) - 약속 (2019 ver)";

  return (
    <div className="home-wrapper">
      <div className="r1">
        <div className="left">
          <h3 className="l1 animate__animated animate__slideInDown">Hello,</h3>
          <h3 className="l2 animate__animated animate__fadeIn animate__delay-2s">
            My name is Emerald
          </h3>
          <h3 className="l3 animate__animated animate__fadeIn animate__delay-2s">
            and I make videos
          </h3>
        </div>
        <div className="right">
          {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} /> */}
          {/* <YoutubeIframe videoId={videoId} title={videoTitle} autoPlay={true} /> */}
          <img src={ph_gif} alt="loading..." />
        </div>
      </div>
      {/* <nav>
        <Link to="/about">About</Link>
      </nav> */}
    </div>
  );
}

export default Home;
