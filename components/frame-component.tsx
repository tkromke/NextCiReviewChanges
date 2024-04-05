import type { NextPage } from "next";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.footerColumnsWrapper}>
      <div className={styles.footerColumns}>
        <div className={styles.footerLeft}>
          <div className={styles.footerBranding}>
            <div className={styles.footerLogoContainer}>
              <img className={styles.logoIcon} alt="" src="/logo-1.svg" />
            </div>
            <div className={styles.footerInfo}>
              <div className={styles.footerSlogan}>
                <i className={styles.theFastestAnd}>
                  The fastest and simple way to generate growing business
                  solutions with our products
                </i>
              </div>
              <div className={styles.contact}>
                <div className={styles.contactInfo}>
                  <div className={styles.iconSet}>
                    <img
                      className={styles.iconSystem}
                      loading="lazy"
                      alt=""
                      src="/icon-system.svg"
                    />
                  </div>
                  <i className={styles.hellodhuhacreativecom}>
                    hello@dhuhacreative.com
                  </i>
                </div>
                <div className={styles.community}>
                  <div className={styles.slackInfo}>
                    <div className={styles.slackIcon}>
                      <img
                        className={styles.iconslack}
                        loading="lazy"
                        alt=""
                        src="/iconslack.svg"
                      />
                    </div>
                    <i className={styles.joinOurSlack}>
                      Join our slack community
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerCenter}>
          <div className={styles.productLinks}>
            <i className={styles.product}>Product</i>
            <div className={styles.productItems}>
              <i className={styles.landingPages}>Landing pages</i>
              <i className={styles.pricing}>Pricing</i>
              <i className={styles.benefits}>Benefits</i>
              <i className={styles.features}>Features</i>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.companyLinks}>
              <i className={styles.company}>Company</i>
              <i className={styles.about}>About</i>
              <i className={styles.privacyPolicy}>Privacy Policy</i>
              <i className={styles.termsConditions}>{`Terms & Conditions`}</i>
              <i className={styles.partners}>Partners</i>
              <i className={styles.contact1}>Contact</i>
            </div>
            <div className={styles.resourceLinks}>
              <i className={styles.resources}>Resources</i>
              <i className={styles.guidesAndResources}>Guides and resources</i>
              <i className={styles.blog}>Blog</i>
              <i className={styles.tools}>Tools</i>
              <i className={styles.support}>Support</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
