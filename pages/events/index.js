import React from 'react'
import styles from "./style.module.css"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Tab from 'react-bootstrap/Tab';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import EventsNav from '../../components/EventsNav';


function index() {

    const pageTitle = 'Events'

  return (
    <>

   <Breadcrumb pageName={pageTitle} />

    <section className={'pt60'}>

       <div className={'container-fluid' + ' ' + styles.tabSpace}>

         <Tab.Container id="left-tabs-example" defaultActiveKey="first">

            <div className='row pt-5'>

                <div className={'col-md-5' + ' ' + styles.eventText}>

                    <h2>Events</h2>

                    <EventsNav />

                </div>

            </div>

            <Tab.Content>

            <Tab.Pane eventKey="first">

                <section className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60'}>

                    <div className='container'>

                        <div className='row'>

                            <div className='col-md-6'>

                                <h2 className='ulineRed'>Beach Day for Kg </h2>

                                <p className='pt-4'>We the tiny n happy fishes in the marine world. </p>
                                <p>Today at Vikas Mantra Public School organized The Beach Day as a part of monthly concept. Children learnt the concept of going to beach in summer. Underwater creatures were taught through songs.</p>

                            </div>

                            <div className='col-md-6'>

                                <div className='imgUp'>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </div>

                            </div>
                    
                        </div>

                    </div>

                </section>

                <section className={'greybg VectorSpiralPink' + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + styles.eventGallery}>

                <div className='container'>

                    <div className={'row' + ' ' + 'vmpsslide'}>
                        <div className='col-md-12'>
                            <Splide options={{
                                rewind: true,
                                gap: '1rem',
                                perPage: 3,
                                pagination: false,
                                arrows: true,
                                }}>
                          
                                    

                                <SplideSlide>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </SplideSlide>

                              

                            </Splide>
                        </div>
                    </div>

                </div>

                </section>
              
            </Tab.Pane>

            <Tab.Pane eventKey="second">

                <section className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60'}>

                    <div className='container'>

                        <div className='row'>

                            <div className='col-md-6'>

                                <h2 className='ulineRed'>Launch of BE THE CHANGE</h2>

                                <p className='pt-4'>Oct 8, 2019 marked a historic day in the school&apos;s calendar by launching BE THE CHANGE – an initiative by the school joining hands with BE THE CHANGE to inculcate social responsibilities among children to bring out their innate talents. Chief Guest of the day – Actor and Celebrity Jeeva Ravi.</p>

                            </div>

                            <div className='col-md-6'>

                                <div className='imgUp'>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </div>

                            </div>
                    
                        </div>

                    </div>

                </section>

                <section className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + styles.eventGallery}>

                <div className='container'>

                    <div className={'row' + ' ' + 'vmpsslide'}>
                        <div className='col-md-12'>
                            <Splide options={{
                                rewind: true,
                                gap: '1rem',
                                perPage: 3,
                                pagination: false,
                                arrows: true,
                                }}>

                                <SplideSlide>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </SplideSlide>

                                <SplideSlide>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </SplideSlide>

                            </Splide>
                        </div>
                    </div>

                </div>

                </section>

            </Tab.Pane>

            <Tab.Pane eventKey="third">

                <section className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60'}>

                    <div className='container'>

                        <div className='row'>

                            <div className='col-md-6'>

                                <h2 className='ulineRed'>Best Emerging School Award</h2>

                                <p className='pt-4'>We are happy to announce that our school Vikas Mantra Public school received the Indian icon of the year awards for Best Emerging School ( Holistic) of the year 2021 😀</p>

                            </div>

                            <div className='col-md-6'>

                                <div className='imgUp'>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </div>

                            </div>
                    
                        </div>

                    </div>

                </section>

                <section className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + styles.eventGallery}>

                <div className='container'>

                    <div className={'row' + ' ' + 'vmpsslide'}>
                        <div className='col-md-12'>
                            <Splide options={{
                                rewind: true,
                                gap: '1rem',
                                perPage: 3,
                                pagination: false,
                                arrows: true,
                                }}>

                                <SplideSlide>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </SplideSlide>

                                <SplideSlide>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </SplideSlide>

                            </Splide>
                        </div>
                    </div>

                </div>

                </section>

            </Tab.Pane>

            <Tab.Pane eventKey="forth">

                <section className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60'}>

                    <div className='container'>

                        <div className='row'>

                            <div className='col-md-6'>

                                <h2 className='ulineRed'>Children&apos;s Day at Raj Nivas</h2>

                                <p className='pt-4'>On the eve of Childrens Day as a part of our Be The Change initiative the students of Vikas Mantra Public School were invited to Raj Nivas Puducherry to meet Lieutenant governor Dr Kiran Bedi. She encouraged the children and interacted with them. Indeed a memorable day in the life of students of VMPS.</p>

                            </div>

                            <div className='col-md-6'>

                                <div className='imgUp'>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </div>

                            </div>
                    
                        </div>

                    </div>

                </section>

                <section className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + styles.eventGallery}>

                <div className='container'>

                    <div className={'row' + ' ' + 'vmpsslide'}>
                        <div className='col-md-12'>
                            <Splide options={{
                                rewind: true,
                                gap: '1rem',
                                perPage: 3,
                                pagination: false,
                                arrows: true,
                                }}>

                                <SplideSlide>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </SplideSlide>

                                <SplideSlide>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </SplideSlide>

                            </Splide>
                        </div>
                    </div>

                </div>

                </section>

            </Tab.Pane>

            <Tab.Pane eventKey="fifth">

                <section className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60'}>

                    <div className='container'>

                        <div className='row'>

                            <div className='col-md-6'>

                                <h2 className='ulineRed'>Friendship Day Celebration</h2>

                                <p className='pt-4'>Students of VMPS celebrated Friendship Day in school to show love and respect to their friends. They were engaged in the card making activity. The entire concept was to inculcate the value of friendship not only to school mates but also a special card was asked to be made to be given to their teacher or mother or father or even a helper at home.</p>

                            </div>

                            <div className='col-md-6'>

                                <div className='imgUp'>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </div>

                            </div>
                    
                        </div>

                    </div>

                </section>

                <section className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + styles.eventGallery}>

                <div className='container'>

                    <div className={'row' + ' ' + 'vmpsslide'}>
                        <div className='col-md-12'>
                            <Splide options={{
                                rewind: true,
                                gap: '1rem',
                                perPage: 3,
                                pagination: false,
                                arrows: true,
                                }}>

                                <SplideSlide>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </SplideSlide>

                                <SplideSlide>

                                    <img src='/assets/events/beachday.png' alt='image' className='img-fluid' />

                                </SplideSlide>

                            </Splide>
                        </div>
                    </div>

                </div>

                </section>

            </Tab.Pane>

          </Tab.Content>

        </Tab.Container>

        </div>

    </section>

    </>
  )
}

export default index