import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

const FrameComponent3: NextPage = () => {
  return (
    <header className={styles.mainContent}>
      <div className={styles.mainContentChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo.svg" />
      <nav className={styles.navigationArea}>
        <nav className={styles.navigationLinks}>
          <i className={styles.pricing}>Pricing</i>
          <i className={styles.resourcesCenter}>Resources Center</i>
          <i className={styles.about}>About</i>
          <i className={styles.contact}>Contact</i>
        </nav>
      </nav>
      <div className={styles.userLogin}>
        <i className={styles.login}>Login</i>
      </div>
      <button className={styles.button}>
        <i className={styles.signUp}>Sign Up</i>
      </button>
    </header>
  );
};

export default FrameComponent3;
