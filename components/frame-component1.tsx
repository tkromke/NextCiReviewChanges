import type { NextPage } from "next";
import Button from "./button";
import styles from "./frame-component1.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.bg} />
      <div className={styles.ctaContainer}>
        <div className={styles.ctaHeader}>
          <div className={styles.readyToGetStartedParent}>
            <h1 className={styles.readyToGet}>Ready to get started?</h1>
            <i className={styles.theFastestAnd}>
              The fastest and simple way to generate growing business solutions
              with our products
            </i>
          </div>
          <Button propAlignSelf="unset" propWidth="480px" />
        </div>
        <div className={styles.patternBg}>
          <div className={styles.pattern}>
            <div className={styles.patternChild} />
            <div className={styles.patternItem} />
            <div className={styles.patternElement} />
            <div className={styles.patternElement1} />
            <div className={styles.patternRow}>
              <div className={styles.patternColumn}>
                <div className={styles.patternElement2} />
                <div className={styles.patternElements}>
                  <div className={styles.patternElementParent}>
                    <div className={styles.patternElement3} />
                    <div className={styles.patternElement4} />
                  </div>
                  <div className={styles.patternElement5} />
                </div>
              </div>
              <div className={styles.patternRow1}>
                <div className={styles.patternColumn1}>
                  <div className={styles.patternElement6} />
                </div>
                <div className={styles.patternRow2}>
                  <div className={styles.patternColumn2}>
                    <div className={styles.patternElement7} />
                  </div>
                  <div className={styles.patternElement8} />
                </div>
                <div className={styles.patternElement9} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.separto} />
    </div>
  );
};

export default FrameComponent1;
