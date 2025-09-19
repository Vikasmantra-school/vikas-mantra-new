"use client";
import { Container, Tab, Tabs } from "react-bootstrap";
import styles from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import dummy from "./../../../public/images/bgs/topTab.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TabsHome = () => {
  const [key, setKey] = useState("mahendra");
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  useEffect(() => {
    // force mute videos on mount
    videoRefs.current.forEach((vdo) => {
      if (vdo) vdo.muted = true;
    });
  }, [key]);

  const handlePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.muted = true; // always muted
      video.play();
      setPlayingIndex(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <div className={`${styles.tabSection} AnimeStarts`}>
      <Container>
        <div className={styles.upperContainer}>
          <div className={styles.shapes}>
            <img src="/images/bgs/topTab.png" alt="image" />
          </div>

          <div className={styles.rightContent}>
            <h3 className={`${styles.rightHeading} AnimeElement`}>Shining the Spotlight</h3>
            <p className="AnimeElement">
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
            className={styles.spotlightTabTop}>
            {/* first tab */}
            <Tab
              className={styles.tab + " spotlightTabX"}
              style={{
                position: "relative",
                top: "-30px",
              }}
              eventKey="mahendra"
              title="Chengalpattu ">
              <Swiper
              style={{
                paddingBlock:'2rem'
              }}
                // ref={primaryRef}
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                 loopedSlides={3} 
                autoplay={{ delay: 6000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                  0:{slidesPerView: 1},
                  768: { slidesPerView: 2 },
                }}>
                {[0, 1, 2].map((idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className={styles.sliderContainer}
                      style={{ position: "relative" }}>
                      <video
                        ref={(el) => (videoRefs.current[idx] = el)}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        autoPlay
                        onPause={(e) =>
                          (e.currentTarget.nextSibling.style.display = "flex")
                        }
                        onPlay={(e) =>
                          (e.currentTarget.nextSibling.style.display = "none")
                        }
                        onClick={() => handlePlayPause(idx)}>
                        <source
                          src="/assets/videos/school-video-new.mp4"
                          type="video/mp4"
                        />
                      </video>

                      <button
                        onClick={() => handlePlayPause(0)}
                        className={styles.playBtn}>
                        {/* Play SVG */}
                        <svg
                          width="78"
                          height="78"
                          viewBox="0 0 78 78"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M30.0393 54.7447L54.7435 39.0004L30.0393 23.2561V54.7447ZM39.0063 77.7921C33.683 77.7921 28.6673 76.774 23.9593 74.7377C19.2512 72.7015 15.1341 69.9211 11.6082 66.3965C8.08223 62.8719 5.30046 58.7566 3.26287 54.0506C1.22597 49.3452 0.20752 44.3309 0.20752 39.0076C0.20752 33.6421 1.22563 28.5988 3.26185 23.8778C5.29808 19.1568 8.07849 15.0503 11.6031 11.5584C15.1277 8.06643 19.243 5.30168 23.949 3.26409C28.6544 1.22719 33.6687 0.20874 38.992 0.20874C44.3575 0.20874 49.4008 1.22685 54.1218 3.26307C58.8428 5.29929 62.9493 8.06269 66.4412 11.5533C69.9332 15.0438 72.6979 19.1486 74.7355 23.8676C76.7724 28.5865 77.7909 33.6284 77.7909 38.9933C77.7909 44.3166 76.7728 49.3323 74.7365 54.0403C72.7003 58.7484 69.9369 62.8655 66.4463 66.3914C62.9558 69.9174 58.851 72.6991 54.132 74.7367C49.4131 76.7736 44.3712 77.7921 39.0063 77.7921ZM38.9992 73.1585C48.5059 73.1585 56.5756 69.832 63.2083 63.1788C69.841 56.5251 73.1573 48.4656 73.1573 39.0004C73.1573 29.4937 69.841 21.424 63.2083 14.7913C56.5756 8.15865 48.5059 4.8423 38.9992 4.8423C29.534 4.8423 21.4745 8.15865 14.8207 14.7913C8.16764 21.424 4.84108 29.4937 4.84108 39.0004C4.84108 48.4656 8.16764 56.5251 14.8207 63.1788C21.4745 69.832 29.534 73.1585 38.9992 73.1585Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
               
              </Swiper>
            </Tab>

            {/* second tab  */}
            <Tab
              className={styles.tab + " spotlightTabX"}
              style={{
                position: "relative",
                top: "-30px",
              }}
              eventKey="mambakkam"
              title="Mambakkam">
              <Swiper
               style={{
                paddingBlock:'2rem'
              }}
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={2}
                loop={true} loopedSlides={3} 
                autoplay={{ delay: 6000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                  0:{slidesPerView: 1},
                  768: { slidesPerView: 2 },
                }}
                >
                {[ 3,4,5].map((idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className={styles.sliderContainer}
                      style={{ position: "relative" }}>
                      <video
                        ref={(el) => (videoRefs.current[idx] = el)}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        autoPlay
                        onPause={(e) =>
                          (e.currentTarget.nextSibling.style.display = "flex")
                        }
                        onPlay={(e) =>
                          (e.currentTarget.nextSibling.style.display = "none")
                        }
                        onClick={() => handlePlayPause(idx)}>
                        <source
                          src="/assets/videos/school-video-new.mp4"
                          type="video/mp4"
                        />
                      </video>

                      <button
                        onClick={() => handlePlayPause(2)}
                        className={styles.playBtn}>
                        <svg
                          width="78"
                          height="78"
                          viewBox="0 0 78 78"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M30.0393 54.7447L54.7435 39.0004L30.0393 23.2561V54.7447ZM39.0063 77.7921C33.683 77.7921 28.6673 76.774 23.9593 74.7377C19.2512 72.7015 15.1341 69.9211 11.6082 66.3965C8.08223 62.8719 5.30046 58.7566 3.26287 54.0506C1.22597 49.3452 0.20752 44.3309 0.20752 39.0076C0.20752 33.6421 1.22563 28.5988 3.26185 23.8778C5.29808 19.1568 8.07849 15.0503 11.6031 11.5584C15.1277 8.06643 19.243 5.30168 23.949 3.26409C28.6544 1.22719 33.6687 0.20874 38.992 0.20874C44.3575 0.20874 49.4008 1.22685 54.1218 3.26307C58.8428 5.29929 62.9493 8.06269 66.4412 11.5533C69.9332 15.0438 72.6979 19.1486 74.7355 23.8676C76.7724 28.5865 77.7909 33.6284 77.7909 38.9933C77.7909 44.3166 76.7728 49.3323 74.7365 54.0403C72.7003 58.7484 69.9369 62.8655 66.4463 66.3914C62.9558 69.9174 58.851 72.6991 54.132 74.7367C49.4131 76.7736 44.3712 77.7921 39.0063 77.7921ZM38.9992 73.1585C48.5059 73.1585 56.5756 69.832 63.2083 63.1788C69.841 56.5251 73.1573 48.4656 73.1573 39.0004C73.1573 29.4937 69.841 21.424 63.2083 14.7913C56.5756 8.15865 48.5059 4.8423 38.9992 4.8423C29.534 4.8423 21.4745 8.15865 14.8207 14.7913C8.16764 21.424 4.84108 29.4937 4.84108 39.0004C4.84108 48.4656 8.16764 56.5251 14.8207 63.1788C21.4745 69.832 29.534 73.1585 38.9992 73.1585Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
               
              </Swiper>
            </Tab>
          </Tabs>
        </div>
        <div className={styles.endSvg}></div>
      </Container>
    </div>
  );
};

export default TabsHome;
