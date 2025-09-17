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
import TabsHome from "../components/home/tabsHome";
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
            <Col md={6} className="d-none d-md-block">
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
                  aria-label="My Favorite Images">
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
                        buttonlink="/enquiry-form"
                          schoolName="Chengalpattu"
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
                        buttonlink="/enquiry-form"

                          schoolName="Chengalpattu"
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
            <Col md={6} className="d-none d-md-block">
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
                  aria-label="My Favorite Images">
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
                        buttonlink="/enquiry-form"

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
                        buttonlink="/enquiry-form"

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

            <Col xs={12} className="d-block d-md-none">
              <div className="overflow-hidden">
                <Splide
                  options={{
                    spacing: 0,
                    type: "loop",
                    pagination: true,
                    arrows: false,
                    autoplay: true,
                    interval: 6000,
                    loop: true,
                    lazyLoad: "nearby",
                  }}
                  aria-label="My Favorite Images">
                  <SplideSlide key="slide-1">
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
                        buttonlink="/enquiry-form"

                          schoolName="Chengalpattu"
                          bgStyles={{
                            backgroundColor: "#9AEDFFE5",
                            color: "black",
                          }}
                        />
                      </div>
                    </div>
                  </SplideSlide>

                  <SplideSlide key="slide-2">
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
                        buttonlink="/enquiry-form"

                          schoolName="Mambakkam"
                          bgStyles={{
                            backgroundColor: "#E02D53",
                            color: "white",
                          }}
                        />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide key="slide-3">
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
                        buttonlink="/enquiry-form"

                          schoolName="Chengalpattu"
                          bgStyles={{
                            backgroundColor: "#9AEDFFE5",
                            color: "black",
                          }}
                        />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide key="slide-4">
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
                        buttonlink="/enquiry-form"

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
      <TabsHome />
      <Testimonials />
      <div className={styles.floatingLinks}>
        <Link href="/enquiry-form" legacyBehavior>
          <a className="" target="_blank" rel="noopener noreferrer">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <mask
                id="mask0_3366_382"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40">
                <rect width="40" height="40" fill="white" />
              </mask>
              <g mask="url(#mask0_3366_382)">
                <path
                  d="M19.3293 29.2158V12.4379C18.0949 11.5249 16.7227 10.8368 15.2127 10.3737C13.7027 9.91097 12.1888 9.67958 10.671 9.67958C9.6485 9.67958 8.75947 9.74833 8.00391 9.88583C7.24864 10.0231 6.39697 10.2542 5.44891 10.5792C5.19252 10.6644 5.01086 10.7872 4.90391 10.9475C4.79725 11.1078 4.74391 11.2842 4.74391 11.4767V27.0021C4.74391 27.2871 4.85072 27.499 5.06433 27.6379C5.27794 27.7768 5.51294 27.7999 5.76933 27.7071C6.34711 27.4793 7.0528 27.3024 7.88641 27.1763C8.72002 27.0501 9.64822 26.9871 10.671 26.9871C12.1838 26.9871 13.6549 27.1657 15.0843 27.5229C16.5141 27.8801 17.9291 28.4444 19.3293 29.2158ZM20.0235 31.2821C18.6346 30.3546 17.1468 29.6431 15.5602 29.1475C13.9732 28.6517 12.3435 28.4038 10.671 28.4038C9.856 28.4038 9.05558 28.4686 8.26975 28.5983C7.48391 28.7281 6.69891 28.9239 5.91475 29.1858C5.2853 29.4417 4.6978 29.3649 4.15225 28.9554C3.60641 28.5463 3.3335 27.9871 3.3335 27.2779V11.4187C3.3335 10.9751 3.44864 10.5653 3.67891 10.1892C3.90947 9.81306 4.23377 9.54278 4.65183 9.37833C5.59905 8.99222 6.58002 8.71083 7.59475 8.53417C8.60919 8.3575 9.63461 8.26917 10.671 8.26917C12.4957 8.26917 14.1325 8.51236 15.5814 8.99875C17.03 9.48542 18.4916 10.1892 19.966 11.11C20.2018 11.2511 20.3897 11.4481 20.5297 11.7008C20.6695 11.9536 20.7393 12.2278 20.7393 12.5233V29.2158C22.1296 28.4444 23.527 27.8801 24.9314 27.5229C26.3356 27.1657 27.8016 26.9871 29.3293 26.9871C30.3379 26.9871 31.2682 27.049 32.1202 27.1729C32.9724 27.2971 33.676 27.4503 34.231 27.6325C34.4874 27.7394 34.7224 27.7235 34.936 27.5846C35.1496 27.4457 35.2564 27.2267 35.2564 26.9275V9.36417C35.2931 9.37361 35.3289 9.38403 35.3639 9.39542C35.3992 9.40681 35.4346 9.4225 35.4702 9.4425C35.8599 9.62528 36.1567 9.89125 36.3606 10.2404C36.5648 10.5893 36.6668 10.9821 36.6668 11.4187V27.2779C36.6668 27.9932 36.3664 28.5464 35.7656 28.9375C35.1647 29.3289 34.5385 29.3903 33.8868 29.1217C33.1427 28.8767 32.3886 28.6958 31.6247 28.5792C30.8609 28.4622 30.0957 28.4038 29.3293 28.4038C27.6532 28.4038 26.0304 28.6528 24.461 29.1508C22.8916 29.6486 21.4124 30.359 20.0235 31.2821ZM25.2268 23.5021V6.795L30.7693 5V21.72L25.2268 23.5021Z"
                  fill="white"
                />
              </g>
            </svg>

            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              Admissions Enquiry
            </span>
          </a>
        </Link>

        <Link href="#footer" legacyBehavior>
          <a className="" rel="noopener noreferrer">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <mask
                id="mask0_3366_385"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40">
                <rect width="40" height="40" fill="white" />
              </mask>
              <g mask="url(#mask0_3366_385)">
                <path
                  d="M4.55127 33.5897V6.25014L11.9979 1.28223L19.4229 6.25014V11.9768H35.4488V33.5897H4.55127ZM5.96169 32.1797H11.2929V26.8485H5.96169V32.1797ZM5.96169 25.4381H11.2929V20.1285H5.96169V25.4381ZM5.96169 18.7181H11.2929V13.3868H5.96169V18.7181ZM5.96169 11.9768H11.2929V6.66681H5.96169V11.9768ZM12.7029 11.9768H18.0129V6.66681H12.7029V11.9768ZM12.7029 32.1797H34.0384V13.3868H12.7029V32.1797ZM23.3975 20.1285V18.7181H29.1134V20.1285H23.3975ZM23.3975 26.8485V25.4381H29.1134V26.8485H23.3975ZM18.0129 20.1285V18.7181H19.4229V20.1285H18.0129ZM18.0129 26.8485V25.4381H19.4229V26.8485H18.0129Z"
                  fill="white"
                />
              </g>
            </svg>

            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              Book a Tour
            </span>
          </a>
        </Link>
      </div>
    </>
  );
}

export default Home;
