import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DensityMedium from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import "./Drawer.scss";

const options = ["PH_LINK_1", "PH_LINK_2", "PH_LINK_3"];

const hoverSX = {
  "&:hover": {
    color: "blue",
  },
};

function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
            sx={hoverSX}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export { LongMenu as Drawer };
