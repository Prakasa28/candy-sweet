import React from "react";
import Title from "../assets/Title.svg";
import Star from "../assets/Star.svg";
import GameImage from "../assets/Game_Image.svg";
import DownloadApple from "../assets/App_store_button.svg";
import DownloadGoogle from "../assets/Play_store_button.svg";

import "../styles/introStep.css";

const IntroStep = ({ onPlay }) => {
  return (
    <div className="introStep">
      <img src={Title} alt="Candy Sweet Title" className="Title" />

      <div className="overlay-content">
        <div className="star-row">
          <img src={Star} alt="Star" className="star small" />
          <img src={Star} alt="Star" className="star large" />
          <img src={Star} alt="Star" className="star small" />
        </div>

        <p>
          WELCOME TO CANDY SWEET! DIVE INTO A COLORFUL WORLD OF TREATS AND FUN
          CHALLENGES. JOIN OUR CHARACTERS AS THEY EXPLORE CANDY LANDSCAPES AND
          EARN TASTY REWARDS. GET READY FOR A SWEET ADVENTURE!
        </p>

        <img src={GameImage} alt="Game Icon" className="game-icon" />
      </div>

      <button onClick={onPlay}>PLAY NOW</button>

      <div className="download-buttons">
        <img
          src={DownloadApple}
          alt="Download on Apple Store"
          className="download-icon"
        />
        <img
          src={DownloadGoogle}
          alt="Download on Google Play"
          className="download-icon"
        />
      </div>
    </div>
  );
};

export default IntroStep;
