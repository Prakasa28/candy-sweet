import React from "react";
import Title from "../assets/Havefun_title.svg";
import FeatureImage from "../assets/Features_image.svg";
import Star from "../assets/Star.svg";
import HeartCandyImage from "../assets/Heart_candy_image.svg";
import styles from "../styles/registrationStep.module.css";

const ThankYouStep = () => {
  return (
    <div className={styles.registrationStep}>
      <img src={Title} alt="Have Fun Title" className={styles.title} />

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

        <img src={FeatureImage} alt="Candy" className={styles.gameIcon} />

        <p className={styles.successMessage}>SWEET SUCCESS!</p>

        <div className={styles.heartContainer}>
          <img
            src={HeartCandyImage}
            alt="Heart"
            className={styles.beatingHeart}
          />
        </div>

        <p>
          THANK YOU FOR SIGNING-UP! YOUR SWEET ADVENTURE AWAITS WE HAVE SENT YOU
          FREE REWARDs
        </p>

        <button className={styles.submitButton}>PLAY NOW</button>
      </div>
    </div>
  );
};

export default ThankYouStep;
