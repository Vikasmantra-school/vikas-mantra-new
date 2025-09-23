"use client";
import styles from "./style.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ModalFn from "/components/mambakkam/modal/ModalFn";
import gsap from "gsap";

const Features = () => {
  return (
    <>
      <section
        className={
          styles.featureSection + " " + "mbkm-section-padding AnimeStarts"
        }>
        <div className={styles.featureContainer}>
          <div className="container">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={2.1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              style={{
                height: "300px",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                576: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              navigation={{
                prevEl: ".swiper-prev-blog",
                nextEl: ".swiper-next-blog",
              }}
              pagination={{
                clickable: true,
              }}>
              <SwiperSlide>
                <div className={`${styles.featureBlock} `}>
                  <img
                    className="AnimeElement"
                    src="/images/icon/mambakkam/holisitic-icon.png"
                    alt="icon"
                  />
                  <h2 className="AnimeElement">Holistic Approach</h2>
                  <p className={`${styles.desc} AnimeElement`}>
                    We place equal emphasis on academic excellence and on the
                    social, physical emotional and development of our students.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.featureBlock}>
                  <img
                    className="AnimeElement"
                    src="/images/icon/mambakkam/global-icon.png"
                    alt="icon"
                  />
                  <h2 className="AnimeElement">Global Outlook</h2>
                  <p className={`${styles.desc} AnimeElement`}>
                    Blending 21st century education techniques with the best
                    from traditional methods of teaching, Vikas Mantra offers a
                    unique programme for students of the emerging India.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.featureBlock}>
                  <img
                    className="AnimeElement"
                    src="/images/icon/mambakkam/person-icon.png"
                    alt="icon"
                  />
                  <h2 className="AnimeElement">Talented Faculty</h2>
                  <p className={`${styles.desc} AnimeElement`}>
                    VIKAS MANTRA PUBLIC SCHOOL faculty have been handpicked to
                    ensure that they bring the right attitude and approach in
                    engaging with students.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.featureBlock}>
                  <img
                    className="AnimeElement"
                    src="/images/icon/mambakkam/per-hand-icon.png"
                    alt="icon"
                  />
                  <h2 className="AnimeElement">Rich Curriculum</h2>
                  <p className={`${styles.desc} AnimeElement`}>
                    VIKAS MANTRA PUBLIC SCHOOL offers a unique curriculum which
                    comprises of a rigorous academic programme that deepens and
                    broadens knowledge of our students.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
