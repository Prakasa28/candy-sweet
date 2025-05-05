import React from "react";
import HomeIcon from "../assets/Home_icon.svg";
import NewsIcon from "../assets/News_icon.svg";
import StoreIcon from "../assets/Store_icon.svg";
import "../styles/menu.css";

const Menu = () => {
  return (
    <div className="top-menu">
      <img src={HomeIcon} alt="Menu Icon 1" className="menu-icon" />
      <img src={NewsIcon} alt="Menu Icon 2" className="menu-icon" />
      <img src={StoreIcon} alt="Menu Icon 3" className="menu-icon" />
    </div>
  );
};

export default Menu;
