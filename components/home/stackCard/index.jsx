import React from "react";
import styles from "./style.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container } from "react-bootstrap";

export default function SplitCards() {
  return (
    <section className={styles.ourFacilities}>
      <Container>
        <h3 className={styles.rightHeading}>Our Facilities</h3>
        <div className={`${styles.mainContent} d-none d-md-block`}>
          <Splide
            options={{
              spacing: 0,
              type: "loop",
              // pauseOnHover: true,
              // pauseOnFocus: false,
              pagination: true ,
              arrows: false,
              autoplay: true,
              interval: 6000,
              loop: true,
              lazyLoad: "nearby",
            }}
            aria-label="My Favorite Images">
            <SplideSlide>
              <div className={styles.gridCardContent}>
                <div className={styles.Cardxcontainer}>
                  <div className={`${styles.card} ${styles.topleft}`}>
                    <img
                      src="/images/spitcardImages/g1.png"
                      alt="Smart Classrooms"
                    />
                    <div className={styles.caption}>Smart Classrooms</div>
                  </div>
                  <div
                    className={`${styles.card} ${styles.topright} ${styles.right}`}>
                    <img
                      src="/images/spitcardImages/g2.png"
                      alt="Co-Curricular Activities"
                    />
                    <div className={styles.caption}>
                      Co-Curricular Activities
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={styles.gridCardContent}>
                <div className={styles.Cardxcontainer}>
                  <div className={`${styles.card} ${styles.bottomleft}`}>
                    <img
                      src="/images/spitcardImages/g3.png"
                      alt="Transportation"
                    />
                    <div className={styles.caption}>Transportation</div>
                  </div>
                  <div
                    className={`${styles.card} ${styles.bottomright} ${styles.right}`}>
                    <img src="/assets/campus/library2.jpeg" alt="Library" />
                    <div className={styles.caption}>Library</div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>

        <div className={`${styles.mainContentMob} d-block d-md-none`}>
          <Splide
            options={{
              spacing: 20,
              type: "loop",

              pagination: true,
              arrows: false,
              autoplay: true,
              interval: 6000,
              loop: true,
              lazyLoad: "nearby",
            }}
            aria-label="My Favorite Images">
            <SplideSlide>
              <div className={`${styles.card}`}>
                <img
                  src="/images/spitcardImages/g1.png"
                  alt="Smart Classrooms"
                />
                <div className={styles.caption}>Smart Classrooms</div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`${styles.card} `}>
                <img
                  src="/images/spitcardImages/g2.png"
                  alt="Co-Curricular Activities"
                />
                <div className={styles.caption}>Co-Curricular Activities</div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className={`${styles.card}`}>
                <img src="/images/spitcardImages/g3.png" alt="Transportation" />
                <div className={styles.caption}>Transportation</div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`${styles.card} `}>
                <img src="/assets/campus/library2.jpeg" alt="Library" />
                <div className={styles.caption}>Library</div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </Container>
    </section>
  );
}
