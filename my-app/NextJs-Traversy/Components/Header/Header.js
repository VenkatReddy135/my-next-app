import React from "react";
import styles from "../Header/Header.module.css";

const Header = () => {
  const x = 7;
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span>News
      </h1>
      <p className={styles.description}>
        keep updated with latest web dev News
      </p>
    </div>
  );
};

export default Header;
