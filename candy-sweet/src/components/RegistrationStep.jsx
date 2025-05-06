import React, { useState } from "react";
import Title from "../assets/Title.svg";
import Star from "../assets/Star.svg";
import LevelImage from "../assets/Level_image.svg";
import GameImage from "../assets/Game_Image.svg";
import styles from "../styles/sharedComponents.module.css";

const RegistrationStep = ({ phone, setPhone, userId, setUserId, onSubmit }) => {
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (!userId || !phone) {
      setShowError(true);
    } else {
      setShowError(false);
      onSubmit();
    }
  };

  return (
    <div className={styles.registrationStep}>
      <div className={styles.splitContainer}>
        {/* Left Pane */}
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
                className={styles.gameIcon} // This image is for mobile
              />
            </div>

            <p>
              TO PLAY MULTIPLE LEVELS PLEASE SIGN-UP USING YOUR USER NAME AND
              PHONE NUMBER
            </p>

            {/* Moved input fields and button inside overlayContent */}
            <div className={styles.inputField}>
              <input
                id="userId"
                type="text"
                placeholder={
                  showError && !userId ? "USERNAME REQUIRED" : "USERNAME"
                }
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                style={{
                  borderColor: showError && !userId ? "red" : "#ff7148",
                }}
              />
            </div>

            <div className={styles.inputField}>
              <input
                id="phone"
                type="text"
                placeholder={
                  showError && !phone ? "PHONE NUMBER REQUIRED" : "PHONE NUMBER"
                }
                maxLength={10}
                value={phone}
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/\D/g, "");
                  setPhone(onlyNums);
                }}
                style={{
                  borderColor: showError && !phone ? "red" : "#ff7148",
                }}
              />
            </div>

            <button onClick={handleSubmit} className={styles.submitButton}>
              GET PIN
            </button>
          </div>
        </div>

        {/* Right Pane (Desktop only) */}
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
            {/* Desktop-only image */}
            <img
              src={GameImage}
              alt="Desktop Game Icon"
              className={styles.desktopGameIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationStep;
