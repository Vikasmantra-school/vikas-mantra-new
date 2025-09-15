import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { stats } from "../../../data/homepageData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { delay } from "framer-motion";

import { useEffect, useRef } from "react";

const Stats = () => {
  const countersRef = useRef([]);

useEffect(() => {
  (async () => {
    const gsap = (await import("gsap")).default;
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    countersRef.current.forEach((el, i) => {
      if (!el) return;
      const end = stats[i].value;
      const suffix = stats[i].suffix || "";

      let obj = { val: 0 };

      gsap.to(obj, {
        val: end,
        duration: 2,
        ease: "power1.out",
        onUpdate: () => {
          el.innerText = Math.floor(obj.val) + suffix;
        },
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
    });
  })();
}, []);


  return (
    <section className={styles.homeaboutSection}>
      <div className={styles.aboutVikasSmall}>
        <Container fluid="xl">
          <Row>
            <Col lg={7}>
              <div className={styles.statMain}>
                <div className={styles.abtHeading}>
                  <h2>
                    <span>Inspiring Learning,</span> <br />
                    <span className={styles.underLined}>Empowering Lives!</span>
                  </h2>
                  <div className={styles.heartIcon}>
                    <img
                      src="/images/bgs/heart.png"
                      alt="heart"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <p className={styles.abtPara}>
                  At Vikas Mantra Public School, our philosophy is rooted in the
                  belief that true education goes beyond textbooks — it shapes
                  minds, builds character, and inspires a lifelong journey of
                  growth. “Inspiring Learning and Empowering Lives” is more than
                  a motto; it defines our purpose.
                </p>
                <p>
                  We inspire learning by nurturing curiosity, encouraging
                  creativity, and fostering academic excellence in every
                  student. Our classrooms are dynamic spaces where learners are
                  empowered to ask questions, explore ideas, and develop a love
                  for knowledge.
                </p>
                <p>
                  We empower lives by instilling strong values, confidence, and
                  resilience — equipping students not just for exams, but for
                  life. Through holistic education and a supportive environment,
                  we guide our students to become thoughtful, responsible, and
                  compassionate individuals ready to make a positive impact on
                  the world.
                </p>
                <button className={styles.abtBtn}>
                  <span>
                    <a href="/about">Know More</a>
                  </span>
                </button>
              </div>
            </Col>
            <Col lg={5}>
              <div className={styles.rightStatWrapper}>
                <div className={styles.statImg}>
                  <img src="/images/bgs/statsImg.png" alt="AboutImage" />

                  <div className={styles.stars}>
                    <img
                      src="/images/bgs/star.png"
                      alt="star"
                      aria-hidden="true"
                    />
                  </div>
                  <div className={styles.sticker}>
                    <img
                      src="/images/bgs/sticker.png"
                      alt="sticker"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.cardXWrapper}>
        <Container fluid="xl">
          <Row className="justify-content-center">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-prev-stat",
                nextEl: ".swiper-next-stat",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },

                991: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 25,
                },
              }}>
              {stats.map((stat, index) => {
                return (
                  <SwiperSlide xs={6} lg={2} key={stat.id}>
                    <div className={styles.statCard}>
                      <h3 ref={(el) => (countersRef.current[index] = el)}>
                        {stat.value}
                        {stat.suffix}
                      </h3>
                      <small>{stat.caption}</small>
                      <div className={styles.statsIcon}>
                        <img src={stat.icon} alt="Icons" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Stats;
