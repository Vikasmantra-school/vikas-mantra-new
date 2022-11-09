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

  const [gallery, setGallery] = useState([])

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      {/* <img src={gallery.url}></img> */}

      <section className={'pt60'}>
        <div className={'container-fluid' + ' ' + styles.tabSpace}>
          <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
            <div className='row pt-5'>
              <div className={'col-md-5' + ' ' + styles.eventText}>
                <h2>Events</h2>

                <EventsNav events={events} />
              </div>
            </div>

            {events.map((data, key) => {
              return (
                <Tab.Content>
                  <Tab.Pane eventKey={data.id}>
                    <section
                      className={'whitebg' + ' ' + 'pt60' + ' ' + 'pb60'}
                    >
                      <div className='container'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <h2 className='ulineRed'>{data.title} </h2>

                            <p className='pt-4'>
                              We the tiny n happy fishes in the marine world.{' '}
                            </p>
                            <p>
                              Today at Vikas Mantra Public School organized The
                              Beach Day as a part of monthly concept. Children
                              learnt the concept of going to beach in summer.
                              Underwater creatures were taught through songs.
                            </p>
                          </div>

                          <div className='col-md-6'>
                            <div className='imgUp'>
                              <img
                                src={data.image}
                                alt='image'
                                className='img-fluid'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section
                      className={
                        'greybg VectorSpiralPink' +
                        ' ' +
                        'pt60' +
                        ' ' +
                        'pb60' +
                        ' ' +
                        styles.eventGallery
                      }
                    >
                      <div className='container'>
                        <div className={'row' + ' ' + 'vmpsslide'}>
                          <div className='col-md-12'>
                            <Splide
                              options={{
                                rewind: true,
                                gap: '1rem',
                                perPage: 3,
                                pagination: false,
                                arrows: true,
                              }}
                            >
                              <SplideSlide>
                                <img
                                  src='/assets/events/beachday.png'
                                  alt='image'
                                  className='img-fluid'
                                />
                              </SplideSlide>
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
