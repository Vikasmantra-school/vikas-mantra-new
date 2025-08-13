"use client";
import { useRef, useState } from "react";
import styles from "./style.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const main = () => {
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

  const slidesData = [
    {
      id: 1,
      image: "/assets/blogs/blog2.png",
      title: "Foundational Stage",
      description: "(Nursery, Kindergarten to II)",
    },
    {
      id: 2,
      image: "/assets/blogs/blog2.png",
      title: "Upper Primary",
      description: "(Grades III – V)",
    },
    {
      id: 3,
      image: "/assets/blogs/blog2.png",
      title: "Middle Year",
      description: "(Grades VI – VIII)",
    },
    {
      id: 4,
      image: "/assets/blogs/blog2.png",
      title: "Middle Year",
      description: "(Grades VI – VIII)",
    },
    {
      id: 5,
      image: "/assets/blogs/blog2.png",
      title: "Middle Year",
      description: "(Grades VI – VIII)",
    },
  ];

  return (
    <>
      <section className={`${styles.heroBanner} container-fluid`}>
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
                  Admissions Open for 2025 - 2026
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
                src="/assets/blogs/blog2.png"
                alt="School Girl"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.vmpsStory + " " + "pb60 pt60"}>
        <div className="container">
          <div className="row align-items-center">
            <div className="mb-5 col-lg-6 col-md-12 col-sm-12">
              <img src="/assets/icons/whatsapp.png" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <h2 className={styles.storyHeading}>
                <span className="d-flex flex-column">
                  The VMPS <br /> Mambakkam
                  <svg
                    width="412"
                    height="11"
                    viewBox="0 0 412 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M230.568 2.57334C239.64 3.2034 246.825 1.243 257.886 1.73628C268.948 2.23864 270.57 3.40339 283.257 3.42371C295.925 3.43904 308.594 4.55591 314.246 4.2292C319.878 3.89828 320.466 5.37104 328.474 5.28031C335.681 5.1992 340.394 5.47391 346.328 6.04704C346.978 6.10929 347.642 6.17511 348.327 6.24445C355.322 6.94528 376.836 8.13225 384.652 7.8972C392.539 7.65739 401.379 9.04111 406.75 9.50901C408.413 9.65597 409.712 9.81218 410.706 9.95744C411.127 10.019 411.318 10.1156 411.314 10.2021C411.314 10.2021 411.314 10.2022 411.314 10.2022C411.309 10.3098 411.001 10.4018 410.457 10.3908C407.816 10.3376 403.845 10.3352 399.078 10.54C390.348 10.9411 389.323 10.0592 377.519 10.0098C366.111 9.97175 359.114 10.498 346.21 9.66751C345.675 9.63322 345.138 9.59689 344.586 9.55801C330.687 8.58953 327.39 10.6618 307.769 8.85407C288.133 7.08435 285.991 9.27475 266.387 9.05403C246.773 8.8332 222.053 7.16112 210.218 7.07364C208.788 7.06156 207.307 7.05128 205.761 7.04154C194.53 6.97046 180.485 6.92733 165.763 6.50053C149 6.0126 128.32 6.50891 109.802 5.87266C91.2667 5.22757 65.1667 4.48244 53.0636 4.03798C40.9263 3.59033 38.0138 3.49224 26.3765 3.75229C19.7147 3.90311 10.5387 3.77857 2.69659 3.26229C-1.1473 3.00245 -0.296879 2.61675 3.59819 2.42C9.41704 2.13272 14.0578 2.30241 17.0784 1.82009C23.029 0.857399 25.568 0.488694 33.0256 1.04505C40.5464 1.60309 44.0268 0.347569 48.424 0.500687C52.8743 0.658866 52.7144 1.38458 74.9643 0.901816C97.114 0.430121 109.378 0.387209 117.739 0.315764C126.213 0.245358 143.695 1.05487 157.425 0.983739C169.598 0.912641 192.893 1.37473 205.851 1.35611C207.505 1.35303 208.979 1.34107 210.249 1.31826C221.489 1.11712 221.499 1.94993 230.568 2.57334Z"
                      fill="#FFB800"
                    />
                  </svg>
                </span>{" "}
                <span>Story</span>
              </h2>

              <p>
                VIKAS MANTRA PUBLIC SCHOOL, a CBSE School in Chengalpattu
                Kanchipuram is building a distinctive educational platform
                through a mix of international learning techniques, experienced
                academicians and modern facilities.
              </p>

              <p>
                By blending 21st century learning methodologies and traditional
                Indian values, we equip our students to think freely, dream big
                and pursue their passions, yet remain firmly connected to ground
                realities.
              </p>

              <button class="outlineBtn btn bottomToTop">
                <a href="/about">Know More</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featureSection + " " + "pb60 pt60"}>
        <div className={styles.featureContainer}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className={styles.featureBlock}>
                  <img src="/assets/icons/whatsapp.png" />
                  <h2>Holistic Approach</h2>
                  <p>
                    We place equal emphasis on academic excellence and on the
                    social, physical emotional and development of our students.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.featureBlock}>
                  <img src="/assets/icons/whatsapp.png" />
                  <h2>Holistic Approach</h2>
                  <p>
                    We place equal emphasis on academic excellence and on the
                    social, physical emotional and development of our students.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.featureBlock}>
                  <img src="/assets/icons/whatsapp.png" />
                  <h2>Holistic Approach</h2>
                  <p>
                    We place equal emphasis on academic excellence and on the
                    social, physical emotional and development of our students.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.featureBlock}>
                  <img src="/assets/icons/whatsapp.png" />
                  <h2>Holistic Approach</h2>
                  <p>
                    We place equal emphasis on academic excellence and on the
                    social, physical emotional and development of our students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={
          `${styles.SchoolVideoSection} whitebg parentAnimeStarts` +
          " " +
          "pb60 pt60"
        }>
        <div className="videoContainer" style={{ position: "relative" }}>
          <video
            ref={videoRef}
            width="100%"
            height="auto"
            autoPlay
            muted
            loop
            playsInline
            onClick={togglePlayPause}
            className="bottomToTop">
            <source
              src="/assets/videos/school-video-mbl.mp4"
              type="video/mp4"
              media="(max-width: 767px)"
            />
            <source
              src="/assets/videos/school-video-new.mp4"
              type="video/mp4"
              media="(min-width: 768px)"
            />
          </video>

          <div className={styles.videoOverlayCont}>
            <h2>
              Welcome to <br />
              Vikas Mantra Public School
            </h2>

            <p>
              Vikas Mantra Public School, is located in a sprawling campus of 5
              acres in the serene Mahindra World City away from the hustle and
              bustle of Chennai.
            </p>
          </div>

          <button onClick={togglePlayPause} className={styles.playPauseBtn}>
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
          </button>
        </div>
      </section>

      <section className={styles.journeySwiper + " " + "pb60 pt60"}>
        <div>
          <div className="row w-100">
            <div className="col-lg-3 d-flex justify-content-start">
              <div className={styles.swiperLeftCont}>
                <h2>
                  Journey of <br /> education at VMPS
                </h2>
                <p>There’s so many things that make our school unique</p>
              </div>
            </div>
            <div className="col-lg-9 position-relative">
              <div className={styles.swiperWrapper}>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={3.2}
                  navigation={{
                    prevEl: ".swiper-prev-custom",
                    nextEl: ".swiper-next-custom",
                  }}>
                  {slidesData.map((slide) => (
                    <SwiperSlide className={styles.swiperSlide} key={slide.id}>
                      <div className={styles.slideCont}>
                        <img src={slide.image} alt={slide.title} />
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                        <button>Read More</button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className={styles.customNav}>
                <button
                  className={styles.customPrev + " " + "swiper-prev-custom"}>
                  <svg
                    width="15"
                    height="23"
                    viewBox="0 0 15 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.3947 22.2324L0.674805 11.4882L12.3947 0.744049L14.3492 2.53454L4.58099 11.4882L14.3492 20.4419L12.3947 22.2324Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button
                  className={styles.customNext + " " + "swiper-next-custom"}>
                  <svg
                    width="15"
                    height="23"
                    viewBox="0 0 15 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.58279 22.2324L14.3027 11.4882L2.58279 0.744049L0.628316 2.53454L10.3965 11.4882L0.628316 20.4419L2.58279 22.2324Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.blogSection + " " + "pb60 pt60"}>
        <div className="container">
          <div className="row">
            <h2 className={styles.blogTitle}>What’s Happening</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.blogBlock}>
                <img src="/assets/blogs/blog2.png" />
                <h2>
                  Nurturing Balance Through Yoga: A Path to Inner and Outer
                  Growth
                </h2>

                <div className={styles.block_bottom}>
                  <p>10-March-2025</p>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.blogBlock}>
                <img src="/assets/blogs/blog2.png" />
                <h2>
                  Nurturing Balance Through Yoga: A Path to Inner and Outer
                  Growth
                </h2>

                <div className={styles.block_bottom}>
                  <p>10-March-2025</p>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.blogBlock}>
                <img src="/assets/blogs/blog2.png" />
                <h2>
                  Nurturing Balance Through Yoga: A Path to Inner and Outer
                  Growth
                </h2>

                <div className={styles.block_bottom}>
                  <p>10-March-2025</p>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="mt-5 d-flex align-items-end justify-content-end">
              <a className={styles.viewAllBtn} href="#">
                View all
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default main;
