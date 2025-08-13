import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HomeSlider from "../components/HomeSlider";
import { Col, Container, Row } from "react-bootstrap";
import AdmissionsBtnWrapper from "../components/home/admissionbtn";
import { _colorExp } from "gsap/gsap-core";
import Stats from "../components/home/Stats";
import BannerAdsVikasCommon from "../components/home/adsVikas";
import WhyVikasSection from "../components/home/whyvikasSec";
import VmpsLogin from "../components/home/vmpslogin";
import SplitCards from "../components/home/stackCard";
import Testimonials from "../components/home/testimonialSlider";
// import PopupModal from "../components/Popup/PopupModal";

function Home() {
  const getVideo = useRef(null);
  // const PlayImageRef = useRef(null)
  // const PauseImageRef = useRef(null)
  const controlParent = useRef(null);
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);

  useEffect(() => {
    if (primaryRef.current && secondaryRef.current) {
      primaryRef.current.sync(secondaryRef.current.splide);
    }
  }, []);

  // const playVideo = () => {
  //   getVideo.current.play()
  //   controlParent.current.classList.add('playBtn')
  // };

  // const pauseVideo = () => {
  //   getVideo.current.pause();
  //   controlParent.current.classList.remove('playBtn')

  // };

  const [count, setCount] = useState(0);

  // function videoPlayer() {

  //   setCount(count + 1);
  //   if (count % 2 == 0) {
  //     // console.log('even')
  //     playVideo()
  //   }
  //   else {
  //     // console.log('odd')
  //     pauseVideo()
  //   }
  // }

  function onLeave() {
    // controlParent.current.classList.add('d-none')
  }
  function onHover() {
    // controlParent.current.classList.remove('d-none')
  }

  const [controls, setControls] = useState(false);

  useEffect(() => {
    let windowSize = window.innerWidth;
    function addAttrForMob() {
      if (windowSize < 660) {
        setControls(true);
      } else {
        setControls(false);
      }
    }
    addAttrForMob();
    // console.log(controls + ' attrb');

    /*------------------*/
    gsap.registerPlugin(ScrollTrigger);
    const parentTrigger = document.querySelectorAll(".parentAnimeStarts");
    parentTrigger.forEach(staggerAnimeFunc);

    // titleAnime()
    function staggerAnimeFunc(elem) {
      let text = elem.querySelectorAll(".bottomToTop");
      gsap.fromTo(
        text,
        {
          opacity: 0,
          y: 200,
        },
        {
          y: 0,
          duration: 0.9,
          delay: 0.3,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: elem,
            start: "top center",
            end: "bottom bottom",
            ease: Power3.easeOut,
            toggleActions: "play",
          },
        }
      );
    }
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      {/* <PopupModal /> */}
      <Head>
        <title>Home | Vikasmantra Public School</title>
        <meta
          name="description"
          content="VIKAS MANTRA PUBLIC SCHOOL, a CBSE School in Chengalpattu Kanchipuram is building a distinctive educational platform through a mix of international learning ..."
        />
      </Head>

      <section>
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col md={6}>
              <div className="overflow-hidden">
                <Splide
                  ref={primaryRef}
                  options={{
                    spacing: 0,
                    type: "loop",
                    // pauseOnHover: true,
                    // pauseOnFocus: false,
                    pagination: true,
                    arrows: false,
                    autoplay: true,
                    interval: 6000,
                    loop: true,
                    lazyLoad: "nearby",
                  }}
                  aria-label="My Favorite Images"
                >
                  <SplideSlide>
                    <div className={styles.swiperCont}>
                      <div className={styles.sliderImagesWrapper}>
                        <img
                          className={styles.sliderImageduo}
                          src="/assets/banners/homebannernew.png"
                          alt="Image 1"
                        />
                      </div>
                      <div className={styles.sliderContentWrapper}>
                        <h2>
                          Success in wanted Steps,Excellence in Every Lesson
                        </h2>
                        <AdmissionsBtnWrapper
                          schoolName="Mahendran World City"
                          bgStyles={{
                            backgroundColor: "#9AEDFFE5",
                            color: "black",
                          }}
                        />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className={styles.swiperCont}>
                      <div className={styles.sliderImagesWrapper}>
                        <img
                          className={styles.sliderImageduo}
                          src="/assets/banners/homebannernew.png"
                          alt="Image 1"
                        />
                      </div>
                      <div className={styles.sliderContentWrapper}>
                        <h2>
                          Success in wanted Steps,Excellence in Every Lesson
                        </h2>
                        <AdmissionsBtnWrapper
                          schoolName="Mahendran World City"
                          bgStyles={{
                            backgroundColor: "#9AEDFFE5",
                            color: "black",
                          }}
                        />
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </Col>
            <Col md={6}>
              <div className="overflow-hidden">
                <Splide
                  ref={secondaryRef}
                  options={{
                    spacing: 0,
                    type: "loop",
                    // pauseOnHover: true,
                    // pauseOnFocus: false,
                    pagination: true,
                    arrows: false,
                    autoplay: true,
                    interval: 6000,
                    loop: true,
                    lazyLoad: "nearby",
                    spacing: 0,
                  }}
                  aria-label="My Favorite Images"
                >
                  <SplideSlide>
                    <div className={styles.swiperCont}>
                      <div className={styles.sliderImagesWrapper}>
                        <img
                          className={styles.sliderImageduo}
                          src="/assets/banners/homebannernew2.png"
                          alt="Image 1"
                        />
                      </div>
                      <div className={styles.sliderContentWrapper}>
                        <h2>
                          Every child’s growth is guided with meaning and
                          momentum.
                        </h2>
                        <AdmissionsBtnWrapper
                          schoolName="Mambakkam"
                          bgStyles={{
                            backgroundColor: "#E02D53",
                            color: "white",
                          }}
                        />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className={styles.swiperCont}>
                      <div className={styles.sliderImagesWrapper}>
                        <img
                          className={styles.sliderImageduo}
                          src="/assets/banners/homebannernew2.png"
                          alt="Image 1"
                        />
                      </div>
                      <div className={styles.sliderContentWrapper}>
                        <h2>
                          Every child’s growth is guided with meaning and
                          momentum.
                        </h2>
                        <AdmissionsBtnWrapper
                          schoolName="Mambakkam"
                          bgStyles={{
                            backgroundColor: "#E02D53",
                            color: "white",
                          }}
                        />
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Stats />
      <BannerAdsVikasCommon />
      <WhyVikasSection />
      <VmpsLogin />
      <SplitCards />
      <Testimonials/>
    </>
  );
}

export default Home;
