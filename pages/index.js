import Head from "next/head";
import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Link from 'next/link'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import HomeSlider from '../components/HomeSlider'
// import PopupModal from "../components/Popup/PopupModal";

function Home() {

  const getVideo = useRef(null)
  // const PlayImageRef = useRef(null)
  // const PauseImageRef = useRef(null)
  const controlParent = useRef(null)

  // const playVideo = () => {
  //   getVideo.current.play()
  //   controlParent.current.classList.add('playBtn')
  // };

  // const pauseVideo = () => {
  //   getVideo.current.pause();
  //   controlParent.current.classList.remove('playBtn')

  // };

  const [count, setCount] = useState(0)

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

  const [controls, setControls] = useState(false)

  useEffect(() => {

    let windowSize = window.innerWidth;
    function addAttrForMob() {
      if (windowSize < 660) {
        setControls(true)
      }
      else {
        setControls(false)
      }
    }
    addAttrForMob()
    // console.log(controls + ' attrb');

    /*------------------*/
    gsap.registerPlugin(ScrollTrigger)
    const parentTrigger = document.querySelectorAll('.parentAnimeStarts')
    parentTrigger.forEach(staggerAnimeFunc)

    // titleAnime()
    function staggerAnimeFunc(elem) {
      let text = elem.querySelectorAll('.bottomToTop')
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
            start: 'top center',
            end: 'bottom bottom',
            ease: Power3.easeOut,
            toggleActions: 'play',
          },
        }
      )
    }
    ScrollTrigger.refresh();
  }, [])

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
      <HomeSlider />

      <section
        className={
          styles.homeabout +
          ' ' +
          'pt60' +
          ' ' +
          'pb60' +
          ' ' +
          'greybg parentAnimeStarts'
        }
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='mb-5 col-lg-6 col-md-12 col-sm-12'>
              <h2 className='bottomToTop'>About VMPS</h2>

              <p className='bottomToTop'>
                VIKAS MANTRA PUBLIC SCHOOL, A CBSE School in Chengalpattu
                Kanchipuram is building a distinctive educational platform
                through a mix of international learning techniques, experienced
                academicians and modern facilities. By blending 21st century
                learning methodologies and traditional Indian values, we equip
                our students to think freely, dream big and pursue their
                passions, yet remain firmly connected to ground realities.{' '}
              </p>

              <p className='bottomToTop'>
                Learning is not only limited to books and classroom at Vikas
                Mantra Public School, our students are encouraged to pursue
                their interests and are given sufficien opportunities to exhibit
                their talents through numerous co-curricular activities that are
                conducted frequently.
              </p>

              <button className={'outlineBtn' + ' btn bottomToTop'}>
                <Link href='/about' legacyBehavior>
                  <a>Know More</a>
                </Link>
              </button>
            </div>

            <div className='col-lg-6 col-md-12 col-sm-12 '>

              <div className='AnimeStarts'>
                {/* <img
                  src='/assets/home-abt-vmps.png'
                  alt='image'
                  className='img-fluid AnimeElement'  
                /> */}
                <picture>
                  <source srcSet='/assets/home-abt-vmps.png' />
                  <source srcSet='/assets/home-abt-vmps.png' />
                  <img src='/assets/home-abt-vmps.png' alt="Our Students" className='img-fluid AnimeElement' />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          styles.welcomeSection + ' ' + 'pt60' + ' ' + 'pb60 parentAnimeStarts'
        }
      >
        <div className='container'>
          <div className={'row yy' + ' ' + 'mb-xl-5 mb-0'}>
            <div className={'z1' + ' ' + 'col-lg-8 col-md-10 col-sm-12'}>
              <h1 className='bottomToTop text-light'>
                Welcome to Vikas Mantra Public School
              </h1>
              <p className='bottomToTop'>
                Vikas Mantra Public School, is located in a sprawling campus of
                5 acres in the serene Mahindra World City away from the hustle
                and bustle of Chennai.
              </p>
              <button className={'whiteoutlineBtn' + ' btn bottomToTop'}>
                <Link href='/learning' legacyBehavior>
                  <a>Know More</a>
                </Link>
              </button>
            </div>
          </div>

          <div className={'row' + ' ' + 'pt60' + ' ' + styles.vkApproch}>
            <div
              className={
                'z1' + ' ' + 'mb-xl-0 mb-5 col-xl-3 col-lg-6 col-md-6 col-sm-12'
              }
            >
              {/* <img
                className='bottomToTop'
                width='81'
                height='74'
                src='/assets/icons/holistic-approach.png'
                alt='image'
              /> */}
              <picture>
                <source srcSet='/assets/icons/holistic-approach.png' />
                <source srcSet='/assets/icons/holistic-approach.png' />
                <img src='/assets/icons/holistic-approach.png' alt="holistic logo" width='81' height='74' className='bottomToTop' />
              </picture>


              <h4 className='bottomToTop'>Holistic Approach</h4>

              <p className='bottomToTop'>
                We place equal emphasis on academic excellence and on the
                social, physical emotional and development of our students.
              </p>
            </div>

            <div
              className={
                'z1' + ' ' + 'mb-xl-0 mb-5 col-xl-3 col-lg-6 col-md-6 col-sm-12'
              }
            >
              <img
                className='bottomToTop'
                width='81'
                height='74'
                src='/assets/icons/holistic-approach.png'
                alt='holistic logo'
              ></img>

              <div className={styles.borderLeft}>
                <h4 className='bottomToTop'>Global Outlook</h4>

                <p className='bottomToTop'>
                  Blending 21st century education techniques with the best from
                  traditional methods of teaching, Vikas Mantra offers a unique
                  programme for students of the emerging India.
                </p>
              </div>
            </div>

            <div
              className={
                'z1' + ' ' + 'mb-xl-0 mb-5 col-xl-3 col-lg-6 col-md-6 col-sm-12'
              }
            >
              <img
                width='81'
                height='74'
                className='bottomToTop'
                src='/assets/icons/holistic-approach.png'
                alt='holistic logo'
              ></img>

              <div className={styles.borderLeft}>
                <h4 className='bottomToTop'>Talented Faculty</h4>

                <p className='bottomToTop'>
                  VIKAS MANTRA PUBLIC SCHOOL faculty have been handpicked to
                  ensure that they bring the right attitude and approach in
                  engaging with students.
                </p>
              </div>
            </div>

            <div
              className={
                'z1' + ' ' + 'mb-xl-0 mb-5 col-xl-3 col-lg-6 col-md-6 col-sm-12'
              }
            >
              <img
                width='81'
                className='bottomToTop'
                height='74'
                src='/assets/icons/holistic-approach.png'
                alt='holistic logo'
              ></img>

              <div className={styles.borderLeft}>
                <h4 className='bottomToTop'>Rich Curriculum</h4>

                <p className='bottomToTop'>
                  VIKAS MANTRA PUBLIC SCHOOL offers a unique curriculum which
                  comprises of a rigorous academic programme that deepens and
                  broadens knowledge of our students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          styles.vmpsSection +
          ' ' +
          'pt60' +
          ' ' +
          'pb60' +
          ' ' +
          'greybg parentAnimeStarts'
        }
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-3 col-lg-6 col-md-7 col-sm-8'>
              <h2 className='cursiveFont bottomToTop'>
                Life at VMPS Our Happy Faces
              </h2>
            </div>

            <div className='col-xl-9 col-lg-6 col-md-5 col-sm-4'>
              <hr className={styles.hrline} />
            </div>
          </div>

          <div className={'row' + ' ' + 'vmpsslide'}>
            <div className='col-md-12'>
              <Splide options={{
                arrows: false
              }}>
                <SplideSlide>
                  <div className='row align-items-center bottomToTop'>
                    <div className='col-xl-4 col-lg-5 col-md-12 col-sm-12'>
                      <p className={styles.textdate}>June 28, 2022</p>

                      <h4 className={styles.uline}>
                        Holistic education for the 21st century
                      </h4>

                      <p className='pt-4'>
                        At Vikas Mantra Public School, we believe in making every child
                        grow up to become the best version of themselves. State-of-the-art
                        infrastructure, a vibrantly positive environment, experienced teaching
                        faculty, and a multitude of activities and programs, are just a few of
                        what we provide for the sole purpose of enabling children to develop
                        into self-aware, socially responsible, intellectually advanced and
                        strongly empathetic individuals.
                      </p>

                      <button className='outlineBtn  btn'>
                        <Link href='/about/blog'>
                          <a>
                            Know More
                          </a>
                        </Link>
                      </button>
                    </div>

                    <div
                      className={
                        styles.vslideimage +
                        ' ' +
                        'col-xl-6 offset-xl-2 col-lg-6 offset-lg-1 col-md-12 col-sm-12'
                      }
                    >
                      <div className='AnimeStarts'>
                        <img
                          src='/assets/home-happy-face.png'
                          alt='Environmental harmony'
                          className='img-fluid AnimeElement'
                        />
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.videoSection + ' ' + 'parentAnimeStarts'}>
        <div className='container'>
          <div className='row'>
            <div
              className={
                styles.bannercontent +
                ' ' +
                'col-xl-6 col-lg-8 col-md-10 col-sm-12'
              }
            >
              <h1 className='bottomToTop'>
                Inside the World of Vikas Mantra Public School
              </h1>
              <p className='bottomToTop'>
                It is a place where diversity is respected and where curiosity,
                collaboration and contribution all come together to shape
                considerate individuals with a culturally-sensitive outlook.
              </p>
            </div>
          </div>
        </div>
      </section> */}


      <section className={styles.SchoolVideoSection + ' whitebg parentAnimeStarts '}>
        <div className='VideoContainer' onMouseOver={onHover} onMouseLeave={onLeave}>
          <video
            // ref={getVideo}
            width='100%'
            height='auto'
            id='myvid'
            type="video/mp4"
            // controls={controls}
            autoPlay
            muted
            loop
            playsInline
            className='bottomToTop'
          >
            <source src="/assets/videos/school-video-new.mp4" type='video/mp4' />
          </video>


          {/* <a ref={controlParent} onClick={videoPlayer} className='PlayIconContainer'>
            <svg ref={PlayImageRef} className="w-6 h-6 playSvg " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>

            <svg ref={PauseImageRef} className="w-6 h-6 pauseSvg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a> */}
        </div>
      </section>


      <section className={styles.SchoolVideoSection + ' whitebg parentAnimeStarts '}>
        <div className='VideoContainerMbl' onMouseOver={onHover} onMouseLeave={onLeave}>
          <video
            // ref={getVideo}
            width='100%'
            height='auto'
            id='myvid'
            type="video/mp4"
            // controls={controls}
            autoPlay
            muted
            loop
            playsInline
            className='bottomToTop'
          >
            <source src="/assets/videos/school-video-mbl.mp4" type='video/mp4' />
          </video>


          {/* <a ref={controlParent} onClick={videoPlayer} className='PlayIconContainer'>
            <svg ref={PlayImageRef} className="w-6 h-6 playSvg " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
            <svg ref={PauseImageRef} className="w-6 h-6 pauseSvg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a> */}
        </div>
      </section>


      {/* testimonial start */}
      <section className={styles.testimonials}>
        <div className='container testimonialSplide'>
          <div className='row'>
            <div className='col-md-12'>
              <Splide
                options={{
                  rewind: true,
                  gap: '1rem',
                  perPage: 2,
                  pagination: true,
                  arrows: false,
                  breakpoints: {
                    992: {
                      perPage: 1,
                    },

                  },
                }}
              >
                <SplideSlide>
                  <div className={styles.testimonialcard}>
                    <div>
                      <img src='/assets/Parent-1.png' alt='parent Image' />
                    </div>

                    <div className={styles.testimonialcontent}>
                      <h4>
                        Parent of <br /> <span>Kavitha (SR.KG)</span>
                      </h4>

                      <p>
                        The event is very nice to bring up hidden talents of the
                        kids and also helps to shed their shyness and
                        inhibitions to face number of people. Keep up the good
                        work.
                      </p>
                    </div>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className={styles.testimonialcard}>
                    <div>
                      <img src='/assets/Parent-2.png' alt='parent Image' />
                    </div>

                    <div className={styles.testimonialcontent}>
                      <h4>
                        Parent of <br /> <span>Anirudhi (Grade – II)</span>
                      </h4>

                      <p>
                        It’s a very good platform for the students to show cast
                        their ideas, thoughts and skills without any fear to
                        elaborate themselves in front of all hands….
                      </p>
                    </div>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className={styles.testimonialcard}>
                    <div>
                      <img src='/assets/Parent-3.png' alt='parent Image' />
                    </div>

                    <div className={styles.testimonialcontent}>
                      <h4>
                        Parent of <br /> <span>Riddhi (Grade – II)</span>
                      </h4>

                      <p>
                        It’s a very good opportunity to the students to enhance
                        their extracurricular skills n to know about themselves
                        where they are good at..!
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
