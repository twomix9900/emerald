import "./TopBar.scss";
import { Drawer } from "./Drawer";
import logo from "../assets/ph_logo.jpeg";

function TopBar() {
  return (
    <div className="topbar-container">
      <div className="left">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="right">
        <Drawer />
      </div>
    </div>
  );
}

export default TopBar;
