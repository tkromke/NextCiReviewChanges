import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <div className={styles.instagramInfo}>
      <img className={styles.patternIcon} alt="" src="/pattern@2x.png" />
      <div className={styles.illustrationsParent}>
        <div className={styles.illustrations}>
          <div className={styles.illustrationsChild} />
          <div className={styles.salesStatsInfo}>
            <div className={styles.salesStatsHeader}>
              <i className={styles.salesStats}>Sales Stats</i>
              <div className={styles.salesStatsChart}>
                <img
                  className={styles.salesStatsChartChild}
                  loading="lazy"
                  alt=""
                  src="/group-83.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.statsBars}>
            <div className={styles.barContainers}>
              <div className={styles.barContainersChild} />
              <div className={styles.barContainersItem} />
            </div>
            <div className={styles.barContainers1}>
              <div className={styles.barContainersInner} />
              <div className={styles.rectangleDiv} />
            </div>
          </div>
        </div>
        <div className={styles.illustrationsWrapper}>
          <div className={styles.illustrations1}>
            <div className={styles.illustrationsItem} />
            <div className={styles.analyticsInfo}>
              <i className={styles.dataAnalytics}>Data Analytics</i>
              <div className={styles.analyticsCharts}>
                <div className={styles.chartLabels}>
                  <i className={styles.k}>90k</i>
                  <i className={styles.k1}>60k</i>
                  <i className={styles.k2}>30k</i>
                  <i className={styles.k3}>10k</i>
                  <i className={styles.chartLabelItems}>0</i>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.lineParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.lineGroup}>
                      <div className={styles.frameItem} />
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameInner} />
                        <div className={styles.dataLabelItem}>
                          <i className={styles.k4}>48k</i>
                          <i className={styles.visitor}>Visitor</i>
                        </div>
                        <div className={styles.visitorChart}>
                          <img
                            className={styles.visitorChartChild}
                            loading="lazy"
                            alt=""
                            src="/group-87.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.salesChart}>
                        <img
                          className={styles.salesChartChild}
                          alt=""
                          src="/group-82.svg"
                        />
                        <div className={styles.salesPoint}>
                          <img
                            className={styles.salesPointChild}
                            loading="lazy"
                            alt=""
                            src="/polygon-2.svg"
                          />
                          <div className={styles.salesPointItem} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineDiv} />
                  <div className={styles.frameChild1} />
                  <div className={styles.frameChild2} />
                </div>
              </div>
            </div>
            <div className={styles.illustrationsInner}>
              <div className={styles.marParent}>
                <i className={styles.mar}>Mar</i>
                <i className={styles.apr}>Apr</i>
                <i className={styles.may}>May</i>
                <i className={styles.jun}>Jun</i>
                <i className={styles.jul}>Jul</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.illustrationsGroup}>
        <div className={styles.illustrations2}>
          <div className={styles.illustrationsChild1} />
          <div className={styles.instagramParent}>
            <i className={styles.instagram}>Instagram</i>
            <div className={styles.iconContainer}>
              <img className={styles.iconContainerChild} alt="" />
              <img
                className={styles.instagramIcon}
                loading="lazy"
                alt=""
                src="/044instagram.svg"
              />
            </div>
          </div>
          <i className={styles.socialDivider}>12,62</i>
          <div className={styles.frameDiv}>
            <div className={styles.frameChild3} />
          </div>
          <div className={styles.socialSpacing}>
            <div className={styles.socialPlaceholders}>
              <div className={styles.socialIconPlaceholders} />
              <div className={styles.socialIconPlaceholders1} />
            </div>
          </div>
          <div className={styles.footerBackground} />
        </div>
        <div className={styles.metricsParent}>
          <div className={styles.metrics}>
            <div className={styles.illustrations3}>
              <div className={styles.illustrationsChild2} />
              <img className={styles.slack1Icon} alt="" src="/079slack-1.svg" />
              <div className={styles.subscribeInfo}>
                <i className={styles.totalSubscribe}>Total Subscribe</i>
                <i className={styles.subscribeLabel}>61.000</i>
              </div>
            </div>
          </div>
          <div className={styles.visitorInfo}>
            <div className={styles.illustrations4}>
              <div className={styles.illustrationsChild3} />
              <i className={styles.dailyVisitor}>Daily Visitor</i>
              <i className={styles.visitorLabel}>800+</i>
            </div>
            <div className={styles.revenueInfo}>
              <div className={styles.illustrations5}>
                <div className={styles.illustrationsChild4} />
                <div className={styles.revenueHeader}>
                  <i className={styles.revenueGrowth}>Revenue Growth</i>
                  <div className={styles.frequencyLabel}>
                    <i className={styles.daily}>Daily</i>
                  </div>
                </div>
                <div className={styles.revenueIllustration}>
                  <img
                    className={styles.revenueIllustrationChild}
                    loading="lazy"
                    alt=""
                    src="/group-80.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
