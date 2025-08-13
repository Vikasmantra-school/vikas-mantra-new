"use client";
import { Container, Tab, Tabs } from "react-bootstrap";
import styles from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const TabsHome = () => {
  const [key, setKey] = useState("mahendra");
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);

  useEffect(() => {
    if (primaryRef.current && secondaryRef.current) {
      primaryRef.current.sync(secondaryRef.current.splide);
    }
  }, []);

  return (
    <div className={styles.tabSection}>
      <Container>
        <div className={styles.upperContainer}>
          <div className={styles.shapes}></div>
          <div className={styles.rightContent}>
            <h3>Shining the Spotlight</h3>
            <p>
              Celebrating the talents, achievements, and cultural spirit of our
              young Vikas Mantra stars.
            </p>
          </div>
        </div>
        <div className={styles.bottomContainer + " spotlightTabs"}>
          <Tabs
            id="spotlight"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-2"
          >
            <Tab
              className={styles.tab + " spotlightTabX"}
              eventKey="mahendra"
              title="Mahendra World City"
            >
              <Splide
                ref={primaryRef}
                options={{
                  spacing: 0,
                  type: "loop",
                  gap: "1rem",
                  // pauseOnHover: true,
                  // pauseOnFocus: false,
                  pagination: true,
                  arrows: false,
                  autoplay: true,
                  interval: 6000,
                  loop: true,
                  lazyLoad: "nearby",
                  perPage: 2,
                  breakpoints: {
                    768: {
                      perPage: 1,
                    },
                  },
                }}
              >
                <SplideSlide>
                  <div className={styles.sliderContainer}>
                    <video muted loop autoPlay>
                      <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className={styles.sliderContainer}>
                    <video muted loop autoPlay>
                      <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </SplideSlide>
              </Splide>
            </Tab>
            <Tab eventKey="mambakkam" title="Mambakkam">
              <Splide
                ref={secondaryRef}
                options={{
                  spacing: 0,
                  type: "loop",
                  gap: "1rem",
                  // pauseOnHover: true,
                  // pauseOnFocus: false,
                  pagination: true,
                  arrows: false,
                  autoplay: true,
                  interval: 6000,
                  loop: true,
                  lazyLoad: "nearby",
                  perPage: 2,
                  breakpoints: {
                    768: {
                      perPage: 1,
                    },
                  },
                }}
              >
                <SplideSlide>
                  <div className={styles.sliderContainer}>
                    <video muted loop autoPlay>
                      <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className={styles.sliderContainer}>
                    <video muted loop autoPlay>
                      <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </SplideSlide>
              </Splide>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default TabsHome;
