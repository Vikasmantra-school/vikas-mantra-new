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
            <section className={styles.bannerSection + ' ' + styles.banner1 + ' ' + ''}>
              <div className='container'>
                <div className='row homeBanner'>
                  <div ref={(el) => { title = el }}
                    className={styles.bannercontent + ' ' + 'col-xl-6 col-lg-8 col-md-10 col-sm-12 '} >

                    <div className='AnimeStarts d-none d-sm-block '>

                      <h1 className='box AnimeElement'>
                        To educate young minds to be lifelong learners in this dynamic
                        world
                      </h1>

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

                      <h1 className='box AnimeElement'>
                        To educate young minds to be lifelong learners in this dynamic
                        world
                      </h1>

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

                      <h1 className='box'>
                        Award for Academic Excellence
                      </h1>
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

                      <h1 className='box AnimeElement'>
                        Award for Academic Excellence
                      </h1>

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
                      <h1 className='box'>
                        Best Emerging School ( Holistic)
                      </h1>
                      <p className='box'>
                        Vikas Mantra Public school received the Indian Icon of the year awards for Best Emerging School of the year 2021
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
                        Best Emerging School ( Holistic)
                      </h1>

                      <p className='box AnimeElement'>
                        Vikas Mantra Public school received the Indian Icon of the year awards for Best Emerging School of the year 2021
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
                      <h1 className='box'>
                        Investiture Ceremony
                      </h1>
                      <p className='box'>
                        Vikas Mantra Public school  Investiture Ceremony
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
                        Investiture Ceremony
                      </h1>

                      <p className='box AnimeElement'>
                        Vikas Mantra Public school  Investiture Ceremony
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </section>

          </SplideSlide>

          <SplideSlide>
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

          </SplideSlide>

        </Splide>

      </div>



    </>
  )
}

export default HomeSlider