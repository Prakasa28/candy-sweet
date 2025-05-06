import React from "react";
import Title from "../assets/Title.svg";
import Star from "../assets/Star.svg";
import LevelImage from "../assets/Level_image.svg";
import GameImage from "../assets/Game_Image.svg";
import styles from "../styles/sharedComponents.module.css";

const ValidationStep = ({ pin, setPin, onVerify, clearError }) => {
  return (
    <div className={styles.validationStep}>
      <div className={styles.splitContainer}>
        {/* Left Pane (Mobile Content) */}
        <div className={styles.leftPane}>
          <img src={Title} alt="Candy Sweet Title" className={styles.title} />

          <div className={styles.overlayContent}>
            <div className={styles.mobileStarsAndImage}>
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
              <img
                src={LevelImage}
                alt="Game Icon"
                className={styles.gameIcon}
              />
            </div>

            <p>
              WE HAVE SENT 4 DIGIT PIN TO 641777527. ENTER IT BELOW TO CONTINUE.
            </p>

            <div className={styles.inputField}>
              <input
                type="text"
                placeholder="4 - DIGIT PIN"
                maxLength={4}
                value={pin}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setPin(value);
                  clearError();
                }}
                className={styles.customInput}
                inputMode="numeric"
                pattern="\d*"
              />
            </div>

            <button onClick={onVerify} className={styles.submitButton}>
              Verify PIN
            </button>
          </div>
        </div>

        {/* Right Pane (Desktop Only) */}
        <div className={styles.rightPane}>
          <div className={styles.desktopStarsAndImage}>
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
            <img src={GameImage} alt="Game Icon" className={styles.gameIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationStep;
