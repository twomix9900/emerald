import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DensityMedium from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Drawer.scss";
import DrawerVideoCanvas from "./DrawerVideoCanvas";
import { useState } from "react";
import { videos, phVideos } from "../Data/MenuVideoList";

const menuItemHoverSX = {
  "&:hover": {
    backgroundColor: "transparent",
  },
  "button#arrow-button": {
    left: "-100%",
    transitionDuration: "0.3s",
    transitionProperty: "left",
  },
  "&:hover > button#arrow-button": {
    left: "0",
  },
};

function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [currentVideo, setCurrentVideo] = useState({ hide: true });
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setCurrentVideo({ hide: true });
  };
  const handleMouseOver = (video: any) => {
    setCurrentVideo(video);
  };

  return (
    <div className="drawer-wrapper">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <DensityMedium />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            height: "100%",
            width: "100%",
          },
        }}
      >
        {!currentVideo.hide && <DrawerVideoCanvas video={currentVideo} />}

        <div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        {videos.map((video) => (
          <MenuItem
            key={video.title}
            onClick={handleClose}
            sx={menuItemHoverSX}
            onMouseOver={() => handleMouseOver(video)}
          >
            <IconButton
              aria-label="more"
              id="arrow-button"
              aria-haspopup="true"
            >
              <ArrowForwardIcon />
            </IconButton>
            {video.title}
          </MenuItem>
        ))}
        {/* TBD not sure if this should be left in here yet */}
        {phVideos.map((fillerVideo, idx) => (
          <li
            key={idx}
            onMouseOver={() => handleMouseOver(fillerVideo)}
            style={{ scale: 0 }}
          >
            {`${" "}`}
          </li>
        ))}
      </Menu>
    </div>
  );
}

export { LongMenu as Drawer };
