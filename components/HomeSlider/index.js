import React, { useRef } from 'react'
import styles from './style.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

function HomeSlider({ ref }) {
  let title = useRef(null)
  return (
    <>

      <div className='homeBanner'>

        <Splide
          options={{
            rewind: false,
            gap: '0rem',
            perPage: 1,
            autoplay: false,
            pagination: true,
            arrows: false,
            breakpoints: {
              640: {
                perPage: 1,
              },
            },
          }}
        >

          <SplideSlide>
            <section className={styles.bannerSection + ' ' + styles.bannerTopper + ' ' + ''}>
              <div className='container'>
                <div className='row homeBanner'>
                  <div ref={(el) => { title = el }}
                    className={styles.bannercontent + ' ' + 'col-xl-6 col-lg-8 col-md-10 col-sm-12 '} >

                    <div className='AnimeStarts d-none d-sm-block '>
                      {/* 
                      <h1 className='box AnimeElement'>
                        Vikas Mantra is Y(our) Success Mantra
                      </h1>

                      <p className='box AnimeElement'>
                        STD Xth Toppers & Top Achievers (2023-2024)
                      </p> */}

                    </div>

                  </div>
                </div>
              </div>
            </section>

            <section className='d-block d-sm-none '>
              <div className='container'>
                <div className='row mobileBanner'>
                  <div className='col-md-12'>

                    <div className='AnimeStarts py-2 '>

                      <h2 className='text-light box AnimeElement'>
                        Creating Confident Learners and Leaders.
                      </h2>

                      <p className='box AnimeElement'>
                        We believe in nurturing success in every step and fostering excellence in every lesson.
                        <b>Admissions Open 2025-26.</b>
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </section>

          </SplideSlide>

          <SplideSlide>
            <section className={styles.bannerSection + ' ' + styles.banner1 + ' ' + ''}>
              <div className='container'>
                <div className='row homeBanner'>
                  <div ref={(el) => { title = el }}
                    className={styles.bannercontent + ' ' + 'col-xl-6 col-lg-8 col-md-10 col-sm-12 '} >

                    <div className='AnimeStarts d-none d-sm-block '>

                      <h2 className='box AnimeElement text-light'>
                        To educate young minds to be lifelong learners in this dynamic
                        world
                      </h2>

                      <p className='box AnimeElement'>
                        Vikas Mantra Public School offers CBSE Curriculum and was
                        launched in the academic year 2019-22.
                      </p>

                    </div>

                  </div>
                </div>
              </div>
            </section>

            <section className='d-block d-sm-none '>
              <div className='container'>
                <div className='row mobileBanner'>
                  <div className='col-md-12'>

                    <div className='AnimeStarts py-2 '>

                      <h2 className='box AnimeElement text-light' >
                        To educate young minds to be lifelong learners in this dynamic
                        world
                      </h2>

                      <p className='box AnimeElement'>
                        Vikas Mantra Public School offers CBSE Curriculum and was
                        launched in the academic year 2019-22.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </section>

          </SplideSlide>

          <SplideSlide>
            <section className={styles.bannerSection + ' ' + styles.banner2 + ' ' + ''}>
              <div className='container'>
                <div className='row homeBanner'>

                  <div
                    ref={(el) => {
                      title = el
                    }}
                    className={
                      styles.bannercontent +
                      ' ' +
                      'col-xl-6 col-lg-8 col-md-10 col-sm-12'
                    }
                  >

                    <div className='d-none d-sm-block'>

                      <h2 className='box text-light'>
                        Award for Academic Excellence
                      </h2>
                      <p className='box '>
                        VMPS received the International Education Award for Academic Excellence ( Private School ) of the year 2021 - 22
                      </p>

                    </div>

                  </div>
                </div>
              </div>
            </section>

            <section className='d-block d-sm-none '>
              <div className='container'>
                <div className='row mobileBanner'>
                  <div className='col-md-12'>

                    <div className='AnimeStarts py-4 '>

                      <h2 className='text-light box AnimeElement'>
                        Award for Academic Excellence
                      </h2>

                      <p className='box AnimeElement'>
                        VMPS received the International Education Award for Academic Excellence ( Private School ) of the year 2021 - 22
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </section>

          </SplideSlide>

          <SplideSlide>
            <section className={styles.bannerSection + ' ' + styles.banner3}>
              <div className='container'>
                <div className='row homeBanner'>

                  <div
                    ref={(el) => {
                      title = el
                    }}
                    className={
                      styles.bannercontent +
                      ' ' +
                      'col-xl-6 col-lg-8 col-md-10 col-sm-12'
                    }
                  >

                    <div className='d-none d-sm-block'>
                      <h2 className='text-light box'>
                        Sports Day
                      </h2>
                      <p className='box'>
                        we grandly celebrated our annual sports meet with our indian cricket player Mr.Subramaniam Badrinath who is our chief guest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='d-block d-sm-none '>
              <div className='container'>
                <div className='row mobileBanner'>
                  <div className='col-md-12'>

                    <div className='AnimeStarts py-4 '>

                      <h2 className='text-light box AnimeElement'>
                        Sports Day
                      </h2>

                      <p className='box AnimeElement'>
                        we grandly celebrated our annual sports meet with our indian cricket player Mr.Subramaniam Badrinath who is our chief guest.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </section>

          </SplideSlide>

          <SplideSlide>
            <section className={styles.bannerSection + ' ' + styles.banner4}>
              <div className='container'>
                <div className='row homeBanner'>

                  <div
                    ref={(el) => {
                      title = el
                    }}
                    className={
                      styles.bannercontent +
                      ' ' +
                      'col-xl-6 col-lg-8 col-md-10 col-sm-12'
                    }
                  >

                    <div className='d-none d-sm-block'>
                      <h2 className='text-light box'>
                        kiddies annual sports meet
                      </h2>
                      <p className='box'>
                        A fabulous march past performed by our school kids on kiddies annual sports meet.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </section>

            <section className='d-block d-sm-none '>
              <div className='container'>
                <div className='row mobileBanner'>
                  <div className='col-md-12'>

                    <div className='AnimeStarts py-4 '>

                      <h2 className='text-light box AnimeElement'>
                        kiddies annual sports meet
                      </h2>

                      <p className='box AnimeElement'>
                        A fabulous march past performed by our school kids on kiddies annual sports meet.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </section>

          </SplideSlide>

          {/* <SplideSlide>
            <section className={styles.bannerSection + ' ' + styles.banner5}>
              <div className='container'>
                <div className='row homeBanner'>

                  <div
                    ref={(el) => {
                      title = el
                    }}
                    className={
                      styles.bannercontent +
                      ' ' +
                      'col-xl-6 col-lg-8 col-md-10 col-sm-12'
                    }
                  >
                    <div className='d-none d-sm-block'>
                      <h1 className='box'>
                        Dance Competition 
                      </h1>
                      <p className='box'>
                      Dance competition conducted at vikas mantra
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            
            <section className='d-block d-sm-none '>
              <div className='container'>
                <div className='row mobileBanner'>
                  <div className='col-md-12'>

                    <div className='AnimeStarts py-4 '>

                      <h1 className='box AnimeElement'>
                      Dance Competition 
                      </h1>

                      <p className='box AnimeElement'>
                      Dance competition conducted at vikas mantra
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </section>

          </SplideSlide> */}

        </Splide>

      </div>



    </>
  )
}

export default HomeSlider