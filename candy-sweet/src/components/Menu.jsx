import React, { useState } from "react";
import HomeIcon from "../assets/Home_icon.svg";
import NewsIcon from "../assets/News_icon.svg";
import StoreIcon from "../assets/Store_icon.svg";
import HamburgerMenuIcon from "../assets/Hamburger_menu_icon.svg";
import CloseIcon from "../assets/Close_icon.svg";
import "../styles/menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {!isOpen && (
        <button className="hamburger-button" onClick={toggleMenu}>
          <img
            src={HamburgerMenuIcon}
            alt="Open menu"
            className="hamburger-icon"
          />
        </button>
      )}
      <div className={`top-menu ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          <img src={CloseIcon} alt="Close menu" className="close-icon" />
        </button>
        <img src={HomeIcon} alt="Home" className="menu-icon" />
        <img src={NewsIcon} alt="News" className="menu-icon" />
        <img src={StoreIcon} alt="Store" className="menu-icon" />
      </div>
    </>
  );
};

export default Menu;
