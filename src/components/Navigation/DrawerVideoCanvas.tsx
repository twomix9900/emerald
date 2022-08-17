import "./DrawerVideoCanvas.scss";
import Slide from "@mui/material/Slide";

function DrawerVideoCanvas({ video }: any) {
  return (
    <div className={`drawervideocanvas-wrapper`}>
      <h1>{video.hide}</h1>

      {!video.hide && (
        <Slide direction="left" in={!video.hide} mountOnEnter unmountOnExit>
          <img className="video" src={video.link} />
        </Slide>
      )}
    </div>
  );
}

export default DrawerVideoCanvas;
