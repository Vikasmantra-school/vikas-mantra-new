"use client";
import { useRef, useState } from "react";
import styles from "./style.module.css";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <section
        className={
          `${styles.videoSection} parentAnimeStarts` +
          " " +
          "mbkm-section-padding"
        }>
        <div className="videoContainer" style={{ position: "relative" }}>
          {/* <video
            ref={videoRef}
            width="100%"
            height="auto"
            autoPlay
            muted
            loop
            playsInline
            onClick={togglePlayPause}
            className="bottomToTop d-block d-md-none">
            <source
              src="/assets/videos/school-video-mbl.mp4"
              type="video/mp4"
              
            />
          </video>
          <video
            ref={videoRef}
            width="100%"
            height="auto"
            autoPlay
            muted
            loop
            playsInline
            onClick={togglePlayPause}
            className="bottomToTop d-none d-md-block">

            <source
              src="/assets/videos/school-video-new.mp4"
              type="video/mp4"
              media="(min-width: 768px)"
            />
          </video> */}
          <img
            style={{ width: "100%" }}
            className={`${styles.vmpsBanner} AnimeElement`}
            src="/assets/banners/Admission-Open.png"
            alt="banner"
          />

          <div className={styles.videoOverlayCont}>
            <h2>
              Welcome to <br />
              Vikas Mantra Public School
            </h2>

            <p>
              Vikas Mantra Public School, is located in a sprawling campus of 5
              acres in the serene Mambakkam away from the hustle and bustle of
              Chennai.
            </p>
          </div>

          {/* <button onClick={togglePlayPause} className={styles.playPauseBtn}>
            {isPlaying ? (
              ""
            ) : (
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
            )}
          </button> */}
        </div>
      </section>
    </>
  );
};

export default VideoSection;
