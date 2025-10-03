import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HomeSlider from "../components/HomeSlider";
import { Button, Col, Container, Row } from "react-bootstrap";
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
          <Row className="g-0 position-relative">
            <div className={styles.centerSvg}>
              <svg
                width="304"
                height="298"
                viewBox="0 0 304 298"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M155.826 178.472C161.287 177.754 167.438 178.057 171.878 178.029C174.609 177.67 178.688 174.911 177.636 171.158C175.828 157.5 176.519 158.521 187.407 152.643C190.467 150.573 191.454 145.441 188.363 143.068C178.397 134.93 170.832 128.143 181.689 117.822C184.387 113.021 180.243 106.896 175.802 106.924C153.599 107.064 151.889 106.733 157.878 84.8241C158.537 81.4026 154.064 76.9883 149.294 78.727C125.445 87.4209 113.505 89.5467 97.9817 68.7988C95.2192 64.7154 88.0484 65.1024 86.0411 70.9246C84.0662 81.1891 81.4006 90.4327 79.4256 100.697C78.7673 104.119 77.0891 108.23 77.1214 112.673C78.535 119.157 76.4954 120.536 69.2923 116.481C60.082 118.248 52.2205 117.614 43.7008 120.402C38.931 122.14 37.9435 127.273 41.7258 130.666C50.3102 136.763 58.8945 142.86 67.4788 148.957C67.1174 146.226 66.0653 142.473 65.7038 139.742C55.8674 149.372 46.7217 160.024 36.8853 169.654C33.4967 173.435 35.9301 179.229 40.3707 179.201C44.4821 180.884 71.158 185.158 73.2299 188.22C79.4455 197.408 68.9185 206.018 63.8519 213.91C60.4633 217.69 63.5873 224.505 69.0477 223.787C76.2185 223.4 102.107 213.327 106.218 215.009C112.731 218.044 112.628 250.851 115.422 259.377C116.475 263.129 123.316 264.453 125.685 261.362C130.752 253.471 136.509 246.6 143.977 240.059C155.852 229.049 151.412 229.077 160.028 239.616C165.883 246.072 166.935 249.825 175.158 253.19C178.578 253.852 180.289 254.183 182.658 251.093C192.494 241.462 191.377 228.825 196.773 219.222C204.538 206.529 222.365 215.302 236.016 213.507C239.766 212.458 242.134 209.367 241.082 205.615C238.978 198.11 236.183 189.584 234.079 182.079C230.232 169.801 229.245 174.933 238.094 170.435C245.923 166.627 253.455 168.971 260.594 164.142C262.633 162.762 263.291 159.341 262.93 156.609C262.865 147.724 252.571 141.296 248.065 132.44C243.889 121.872 250.04 122.175 253.397 113.952C253.726 112.242 254.384 108.82 252.674 108.489C246.458 99.3015 239.616 97.9777 233.039 86.0585C231.264 76.8428 232.549 65.5575 228.405 59.4324C226.333 56.3698 224.623 56.0389 222.222 54.6871C219.821 53.3353 216.761 55.405 214.36 54.0533C204.427 50.3569 196.895 48.0122 193.738 36.7549C192.686 33.0025 188.575 31.3197 185.845 31.6787C179.035 34.7973 176.996 36.1771 170.877 40.3165C164.758 44.456 171.665 54.6644 177.783 50.525C181.863 47.7654 185.612 46.7165 189.692 43.9569C187.291 42.6051 184.89 41.2533 182.489 39.9015C185.283 48.4273 186.729 59.3536 194.623 64.4299C207.319 72.2096 211.333 60.5653 215.574 80.0175C217.71 91.9647 217.052 95.3862 227.018 103.525C230.8 106.918 236.951 107.221 238.694 111.995C239.384 113.015 232.575 116.134 232.936 118.866C231.981 128.44 231.981 128.44 236.486 137.297C241.682 147.174 252.274 147.449 243.457 156.39C238.029 161.55 231.846 156.805 226.056 159.234C207.668 167.21 227.367 198.525 230.523 209.782C231.872 207.382 234.241 204.291 235.59 201.891C223.649 204.016 202.369 190.139 191.513 200.46C177.926 211.14 194.269 250.678 166.773 227.613C162.3 223.199 163.288 218.067 154.407 218.123C140.065 218.897 121.806 244.642 115.719 253.224C119.14 253.886 122.561 254.547 125.982 255.209C122.826 243.952 128.06 212.138 117.074 204.689C105.399 196.219 80.5622 210.045 66.9112 211.84C68.9831 214.903 70.0352 218.655 72.107 221.718C80.9236 212.777 91.0892 201.435 93.3933 189.46C94.0517 186.039 92.6704 183.997 90.2694 182.645C77.5736 174.865 58.43 172.936 43.3654 168.247C44.4175 171.999 46.4894 175.062 46.8508 177.793C56.6872 168.163 65.833 157.511 75.6694 147.88C78.0381 144.79 75.9663 141.727 72.8746 139.355C64.9809 134.278 56.3966 128.181 49.5226 122.415C48.8643 125.837 48.206 129.258 47.5477 132.68C60.1465 127.133 67.6788 129.477 78.961 130.773C81.6912 130.414 84.4214 130.055 85.7704 127.654C94.8839 112.56 95.413 91.3695 98.7046 74.262C94.9546 75.3109 91.2047 76.3597 86.7641 76.3878C92.289 84.5545 100.609 101.247 111.562 104.254C123.206 108.281 143.601 94.4828 152.45 89.9844C151.069 87.9427 147.977 85.57 144.886 83.1974C142.22 92.4411 137.515 103.065 138.961 113.991C139.322 116.723 140.703 118.764 144.124 119.426C154.387 121.412 166.327 119.286 176.919 119.561C174.847 116.498 173.795 112.746 171.723 109.683C166.986 115.865 160.867 120.004 157.84 126.516C156.491 128.917 156.852 131.648 157.543 132.669C163.068 140.836 172.672 146.243 179.546 152.009C180.204 148.588 180.863 145.166 180.501 142.435C162.803 151.431 161.422 149.39 165.004 172.263C168.064 170.194 169.413 167.793 171.452 166.413C165.992 167.131 159.841 166.828 155.4 166.856C146.519 166.912 147.636 179.549 155.826 178.472Z"
                  fill="#B5FBDD"
                />
              </svg>
            </div>
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
                          src="/assets/banners/homeBannerChengal.jpg"
                          alt="Image 1"
                        />
                      </div>
                      {/* <div className={styles.sliderContentWrapper}>
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
                      </div> */}
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
                      {/* <div className={styles.sliderContentWrapper}>
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
                      </div> */}
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </Col>

            <Col className="d-none d-md-block" md={6}>
              <div
                className={styles.bannerSideWrapper}
                style={{ backgroundColor: "#FFEBEB" }}>
                <div className={`${styles.innercont} AnimeStarts `}>
                  <h2 className="AnimeElement">
                    Success in Every Step, Excellence in Every Lesson
                  </h2>

                  <Link href="/chengalpattu-site" passHref>
                    <a className={`${styles.innerBtn1} AnimeElement`}>
                      <span className={styles.txt}>
                        Visit Chengalpattu Campus
                      </span>
                      <span className={styles.arrow}>
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.84625 11.6538L8.79225 10.5693L12.6115 6.75H0.5V5.25H12.6115L8.79225 1.43075L9.84625 0.346252L15.5 6L9.84625 11.6538Z"
                            fill="#1C1B1F"
                          />
                        </svg>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>

            <Col className="d-none d-md-block" md={6}>
              <div
                className={styles.bannerSideWrapper}
                style={{
                  backgroundColor: "#FFFEF0",
                }}>
                <div className={`${styles.innercont} AnimeStarts`}>
                  <h2 className="AnimeElement">
                    Every child’s growth is guided with meaning and momentum.
                  </h2>

                  <Link href="/mambakkam-site" passHref>
                    <a className={`${styles.innerBtn2} AnimeElement`}>
                      <span className={styles.txt}>Visit Mambakkam Campus</span>
                      <span className={styles.arrow}>
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.84625 11.6537L8.79225 10.5692L12.6115 6.74994H0.5V5.24994H12.6115L8.79225 1.43069L9.84625 0.346191L15.5 5.99994L9.84625 11.6537Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </a>
                  </Link>
                </div>
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
                          src="/assets/banners/homebannernew3.jpeg"
                          alt="Image 1"
                        />
                      </div>
                      {/* <div className={styles.sliderContentWrapper}>
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
                      </div> */}
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
                      {/* <div className={styles.sliderContentWrapper}>
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
                      </div> */}
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
                          src="/assets/banners/homeBannerChengal.jpg"
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
                          src="/assets/banners/homebannernew3.jpeg"
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

        <Link href="#footerForm" legacyBehavior>
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
