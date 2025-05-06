import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../assets/Home_icon.svg";
import NewsIcon from "../assets/News_icon.svg";
import StoreIcon from "../assets/Store_icon.svg";
import HamburgerMenuIcon from "../assets/Hamburger_menu_icon.svg";
import CloseIcon from "../assets/Close_icon.svg";
import styles from "../styles/menu.module.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const goTo = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <button className={styles.hamburgerButton} onClick={toggleMenu}>
          <img
            src={HamburgerMenuIcon}
            alt="Open menu"
            className={styles.hamburgerIcon}
          />
        </button>
      )}
      <div className={`${styles.topMenu} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          <img src={CloseIcon} alt="Close menu" className={styles.closeIcon} />
        </button>

        <div className={styles.menuItem} onClick={() => goTo("/")}>
          <img src={HomeIcon} alt="Home" className={styles.menuIcon} />
          <span className={styles.menuLabel}>Home</span>
        </div>

        <div className={styles.menuItem} onClick={() => goTo("/")}>
          <img src={NewsIcon} alt="News" className={styles.menuIcon} />
          <span className={styles.menuLabel}>News</span>
        </div>

        <div className={styles.menuItem} onClick={() => goTo("/")}>
          <img src={StoreIcon} alt="Store" className={styles.menuIcon} />
          <span className={styles.menuLabel}>Store</span>
        </div>
      </div>
    </>
  );
};

export default Menu;
