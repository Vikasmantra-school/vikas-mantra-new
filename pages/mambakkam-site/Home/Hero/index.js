"use client";
import React from "react";
import styles from "./style.module.css";

const HeroBanner = () => {
  return (
    <>
      <section className={`${styles.heroBanner} container-fluid`}>
        <div className={styles.homeLeftIcon}>
          <svg
            width="80"
            height="191"
            viewBox="0 0 80 191"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.1"
              d="M-7.78553 183.655C25.6787 146.342 52.9629 105.894 73.3375 59.999C79.589 45.8976 83.3578 29.9139 71.663 17.0269C60.7088 4.92368 45.0711 5.44043 30.1664 5.01784C4.88327 4.28219 -20.4101 3.91958 -45.7013 3.0696C-59.5146 2.6106 -73.3418 1.8906 -87.1632 1.31728C-92.9807 1.08372 -98.7832 0.867466 -104.493 1.17781C-110.808 -0.293539 -117.509 0.239091 -123.403 3.38022C-127.221 5.41727 -130.305 7.88007 -132.763 10.6798C-133.74 11.6181 -134.497 12.6695 -135.075 13.7173C-140.54 22.0079 -141.073 32.4844 -137.458 43.1249C-128.998 68.1333 -114.94 92.1407 -100.631 114.2C-84.9895 138.319 -67.3922 160.075 -47.5627 180.835C-38.0483 190.789 -18.3919 195.465 -7.78553 183.655ZM29.5663 33.1217C29.6425 32.9646 29.7186 32.8075 29.7971 32.6181C29.7209 32.7752 29.6274 32.9473 29.5663 33.1217ZM-13.3407 100.625C-15.9982 97.317 -19.2571 94.9246 -23.1152 93.4161C-26.5438 91.353 -30.3323 90.2395 -34.4186 90.1124C-38.1757 89.6998 -41.7836 90.1591 -45.2249 91.4753C-45.7218 90.6926 -46.8658 88.9539 -47.6712 87.7105C-44.7547 85.0896 -42.5995 81.9759 -41.1883 78.3545C-38.9963 74.7234 -37.8335 70.7106 -37.6722 66.3831C-37.4623 58.8576 -39.157 50.9208 -43.7928 44.807C-34.2434 45.8088 -24.7159 46.8903 -15.1756 48.0215C-18.749 51.4247 -21.3439 55.466 -22.9627 60.1778C-24.3658 63.9135 -24.816 67.733 -24.2615 71.5913C-24.3629 75.533 -23.4931 79.2999 -21.6197 82.8941C-19.9437 86.7506 -17.4537 89.9009 -14.1497 92.3452C-12.5461 94.019 -10.7601 95.4131 -8.77432 96.5126C-9.98756 98.263 -11.2481 99.9937 -12.4937 101.742C-12.7941 101.395 -13.0449 101.036 -13.3453 100.69L-13.3407 100.625Z"
              fill="#DD2042"
            />
          </svg>
        </div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* Left Side Content */}
            <div className="col-lg-6 col-md-12 h-100 order-2 order-lg-1 d-flex flex-column justify-content-around">
              <div>
                <h1 className={styles.bannerTitle}>
                  Young Minds To <br />
                  Explore, Discover & <br />
                  Grow <span className={styles.highlight}>Every Day!</span>
                </h1>
                <div className={styles.admissionTag}>
                  <a href="/admissions">Admissions Open for 2025 - 2026</a>
                </div>
              </div>
              <p className={styles.subtitle}>
                From Foundational to Senior Secondary, we nurture young minds
                with skills, knowledge, and values to shape future-ready
                leaders.
              </p>
            </div>

            {/* Right Side Image */}
            <div className="col-lg-6 col-md-12 order-1 order-lg-2 text-center">
              <img
                src="/images/banner/mambakkam-hero-banner.png"
                alt="School Girl"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
