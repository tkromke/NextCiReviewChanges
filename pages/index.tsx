import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import Button from "../components/button";
import FrameComponent2 from "../components/frame-component2";
import Copyright from "../components/copyright";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const CITestHomepage: NextPage = () => {
  return (
    <div className={styles.ciTestHomepage}>
      <FrameComponent3 />
      <img className={styles.backgroundIcon} alt="" src="/background.svg" />
      <section className={styles.frameParent}>
        <div className={styles.heroContentParent}>
          <div className={styles.heroContent}>
            <div className={styles.weHelpAnyBusinessToGetAnParent}>
              <h1 className={styles.weHelpAny}>
                We help any business to get analytics and sales marketing
              </h1>
              <i className={styles.theFastestAnd}>
                The fastest and simple way to generate growing business
                solutions with our products
              </i>
            </div>
            <div className={styles.emailCapture}>
              <Button />
              <i className={styles.weWillNot}>
                *we will not disseminate your email and so you avoid spam
              </i>
            </div>
          </div>
          <div className={styles.businessCountParent}>
            <div className={styles.businessCount}>
              <i className={styles.businessNumber}>350+</i>
              <div className={styles.over500BusinessPoweredWithWrapper}>
                <i className={styles.over500Business}>
                  Over 500 business powered with us
                </i>
              </div>
            </div>
            <div className={styles.ratingStarsParent}>
              <i className={styles.ratingStars}>4.8</i>
              <i className={styles.ratingOnGoogle}>
                Rating on google play and app store
              </i>
            </div>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <FrameComponent2 />
        </div>
      </section>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <Copyright />
      <section className={styles.ctaParent}>
        <FrameComponent1 />
        <FrameComponent />
      </section>
    </div>
  );
};

export default CITestHomepage;
