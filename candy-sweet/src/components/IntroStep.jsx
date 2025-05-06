import React from "react";
import Title from "../assets/Title.svg";
import Star from "../assets/Star.svg";
import GameImage from "../assets/Game_Image.svg";
import DownloadApple from "../assets/App_store_button.svg";
import DownloadGoogle from "../assets/Play_store_button.svg";
import styles from "../styles/introStep.module.css";

const IntroStep = ({ onPlay }) => {
  return (
    <div className={styles.introStep}>
      <img src={Title} alt="Candy Sweet Title" className={styles.Title} />

      <div className={styles.overlayContent}>
        <div className={styles.starRow}>
          <img
            src={Star}
            alt="Star"
            className={`${styles.star} ${styles.small}`}
          />
          <img
            src={Star}
            alt="Star"
            className={`${styles.star} ${styles.large}`}
          />
          <img
            src={Star}
            alt="Star"
            className={`${styles.star} ${styles.small}`}
          />
        </div>

        <p>
          WELCOME TO CANDY SWEET! DIVE INTO A COLORFUL WORLD OF TREATS AND FUN
          CHALLENGES. JOIN OUR CHARACTERS AS THEY EXPLORE CANDY LANDSCAPES AND
          EARN TASTY REWARDS. GET READY FOR A SWEET ADVENTURE!
        </p>

        <img src={GameImage} alt="Game Icon" className={styles.gameIcon} />
      </div>

      <button className={styles.playButton} onClick={onPlay}>
        PLAY NOW
      </button>

      <div className={styles.downloadButtons}>
        <img
          src={DownloadApple}
          alt="Download on Apple Store"
          className={styles.downloadIcon}
        />
        <img
          src={DownloadGoogle}
          alt="Download on Google Play"
          className={styles.downloadIcon}
        />
      </div>
    </div>
  );
};

export default IntroStep;
