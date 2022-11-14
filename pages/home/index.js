import React, { useEffect, useRef } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles from './style.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Link from 'next/link'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
function Home() {
  let title = useRef(null)

  function staggerAnimeFunc(elem, index) {
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
    console.error(text)
  }

  function titleAnime() {
    gsap.fromTo(
      title,
      { opacity: 0 },
      {
        duration: 1.2,
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
      }
    )
  }

  useEffect(() => {
    const parentTrigger = document.querySelectorAll('.parentAnimeStarts')
    parentTrigger.forEach(staggerAnimeFunc)
    titleAnime()
  }, [])

  return (
    <>
      <section className={styles.bannerSection}>
        <div className='container'>
          <div className='row'>
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
              <h1 className='box'>
                To educate young minds to be lifelong learners in this dynamic
                world
              </h1>
              <p className='box'>
                Vikas Mantra Public School offers CBSE Curriculum and was
                launched in the academic year 2019-22.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                VIKAS MANTRA PUBLIC SCHOOL, a CBSE School in Chengalpattu
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

              <Link href='/about' legacyBehavior><a>Know More</a></Link>

              </button>
            </div>

            <div className='col-lg-6 col-md-12 col-sm-12'>
              <img
                src='/assets/home-abt-vmps.png'
                alt='image'
                className='img-fluid'
              />
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
              <h2 className='bottomToTop'>
                Welcome to Vikas Mantra Public School
              </h2>
              <p className='bottomToTop'>
                Vikas Mantra Public School, is located in a sprawling campus of
                5 acres in the serene Mahindra World City away from the hustle
                and bustle of Chennai.
              </p>
              <button className={'whiteoutlineBtn' + ' btn bottomToTop'}>
              <Link href='/learning' legacyBehavior><a>Know More</a></Link>
              </button>
            </div>
          </div>

          <div className={'row' + ' ' + 'pt60' + ' ' + styles.vkApproch}>
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
                alt='image'
              ></img>

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
                alt='image'
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
                alt='image'
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
                alt='image'
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
              <Splide>
                <SplideSlide>
                  <div className='row align-items-center'>
                    <div className='col-xl-4 col-lg-5 col-md-12 col-sm-12'>
                      <p className={styles.textdate}>June 28, 2022</p>

                      <h4 className={styles.uline}>
                        Et harum quidem rerum facilis est et expedita distinctio
                        cum soluta nobis.
                      </h4>

                      <p className='pt-4'>
                        vero eos et accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium voluptatum.
                      </p>

                      <button className={'outlineBtn' + ' btn'}>
                        Know More
                      </button>
                    </div>

                    <div
                      className={
                        styles.vslideimage +
                        ' ' +
                        'col-xl-6 offset-xl-2 col-lg-6 offset-lg-1 col-md-12 col-sm-12'
                      }
                    >
                      <img
                        src='/assets/home-happy-face.png'
                        alt='image'
                        className='img-fluid'
                      ></img>
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.videoSection}>
        <div className='container'>
          <div className='row'>
            <div
              className={
                styles.bannercontent +
                ' ' +
                'col-xl-6 col-lg-8 col-md-10 col-sm-12'
              }
            >
              <h1>Inside the World of Vikas Mantra Public School</h1>
              <p>
                It is a place where diversity is respected and where curiosity,
                collaboration and contribution all come together to shape
                considerate individuals with a culturally-sensitive outlook.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                    640: {
                      perPage: 1,
                    },
                  },
                }}
              >
                <SplideSlide>
                  <div className={styles.testimonialcard}>
                    <div>
                      <img src='/assets/rectangle.png' alt='image' />
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
                      <img src='/assets/rectangle.png' alt='image' />
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
                      <img src='/assets/rectangle.png' alt='image' />
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
