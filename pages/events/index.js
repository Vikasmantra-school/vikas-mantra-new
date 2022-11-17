import React, { useState, useEffect } from 'react'
import styles from './style.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Tab from 'react-bootstrap/Tab'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import EventsNav from '../../components/EventsNav'
import { events } from '../../data/events'

function index() {
  const pageTitle = 'Events'

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className={'pt60'}>
        <div className={'container-fluid' + ' ' + styles.tabSpace}>
          <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
            <div className='row pt-5'>
              <div className={'col-md-5' + ' ' + styles.eventText}>
                <h2>Events</h2>
                <EventsNav events={events} />
              </div>
            </div>

            {events.map((data, index) => {
              return (
                <Tab.Content key={index}>
                  <Tab.Pane eventKey={data.id}>
                    <section
                      className={'whitebg' + ' ' + 'pt60' + ' ' + 'pb60'}
                    >
                      <div className='container'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <h2 className='ulineRed'>{data.title} </h2>

                            <p className='pt-4'>{data.desc}</p>
                          </div>

                          <div className='col-md-6'>
                            <div className='imgUp imgBgColor pastelDarkBlue'>
                              <img
                                src={data.mainImage}
                                alt='image'
                                className='img-fluid'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section
                      className={ 'greybg VectorSpiralPink pt80 pb80 ' + styles.eventGallery + ' ' + styles.eventSectionPdng}
                    >
                      <div className='container'>
                        <div className={'row' + ' ' + 'vmpsslide'}>
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
                                    className='eventGallery'
                                    key={index}
                                  >
                                    <img
                                      src={data}
                                      alt='image'
                                      className='img-fluid eventsGallery'
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

export default index
