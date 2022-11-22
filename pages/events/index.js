import React, { useRef, useEffect } from 'react'
import styles from './style.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Tab from 'react-bootstrap/Tab'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import EventsNav from '../../components/EventsNav'
import { events } from '../../data/events'
import { gsap, Power3, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Events = () => {
  gsap.registerPlugin(ScrollTrigger)

  const pageTitle = 'Events'

  //animation-for-text
  useEffect(() => {
    const parentTrigger = document.querySelectorAll('.parentAnimeStarts')
    parentTrigger.forEach(staggerAnimeFunc)
    console.log(parentTrigger)
    function staggerAnimeFunc(elem) {
      let text = elem.querySelectorAll('.bottomToTop')
      gsap.fromTo(
        text,
        {
          opacity: 0,
          x: -100,
        },
        {
          x: 0,
          duration: 0.6,
          delay: 0.6,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: elem,
            start: 'top left',
            end: 'bottom right',
            ease: Power3.easeOut,
            toggleActions: 'play',
          },
        }
      )
    }
    ScrollTrigger.refresh()
  }, [])

  //animation-for-gallery
  useEffect(() => {
    const parentTrigger2 = document.querySelectorAll('.parentAnimeStarts2')
    parentTrigger2.forEach(imageAnime)
    function imageAnime(elem) {
      let image = elem.querySelectorAll('.leftToRight')
      gsap.fromTo(
        image,
        {
          opacity: 0,
          x: 50,
        },
        {
          x: 0,
          duration: 0.5,
          delay: 0.5,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: elem,
            start: 'left center',
            end: 'right center',
            ease: Power2.easeOut,
            toggleActions: 'restart restart pause none',
          },
        }
      )
    }
  }, [])

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className='pt60 '>
        <div className={'container-fluid' + ' ' + styles.tabSpace}>
          <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
            <div className='row pt-5'>
              <div className={'col-md-5' + ' ' + styles.eventText}>
                <h2 className='bottomToTop'>Events</h2>
                <EventsNav events={events} />
              </div>
            </div>

            {events.map((data, index) => {
              return (
                <Tab.Content key={index}>
                  <Tab.Pane eventKey={data.id}>
                    <section
                      id={data.id}
                      className='whitebg pt60 pb60 parentAnimeStarts '
                    >
                      <div className='container'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <h2 className='ulineRed bottomToTop '>
                              {data.title}
                            </h2>

                            <p className='pt-4 bottomToTop '>{data.desc}</p>
                          </div>

                          <div className='col-md-6'>
                            <div className='imgUp imgBgColor pastelDarkBlue'>
                              <img
                                src={data.mainImage}
                                alt='image'
                                className='img-fluid bottomToTop'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section
                      className={
                        'greybg  VectorSpiralPink pt80 pb80 parentAnimeStarts2 ' +
                        styles.eventGallery +
                        ' ' +
                        styles.eventSectionPdng
                      }
                    >
                      <div className='container'>
                        <div className='row vmpsslide'>
                          <div className='col-md-12'>
                            <Splide
                              options={{
                                rewind: true,
                                gap: '1rem',
                                perPage: 4,
                                autoplay: true,
                                pagination: false,
                                arrows: true,
                                breakpoints: {
                                  660: {
                                    perPage: 1,
                                  },
                                },
                              }}
                            >
                              {data.gallery?.map((data, index) => {
                                return (
                                  <SplideSlide
                                    className='eventGallery leftToRight'
                                    key={index}
                                  >
                                    <img
                                      src={data}
                                      alt='image'
                                      className='img-fluid eventsGallery '
                                    />
                                  </SplideSlide>
                                )
                              })}
                            </Splide>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Tab.Pane>
                </Tab.Content>
              )
            })}
          </Tab.Container>
        </div>
      </section>
    </>
  )
}

export default Events
