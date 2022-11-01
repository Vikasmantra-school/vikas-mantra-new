import React from 'react'
import styles from "./style.module.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'


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

                    <Nav className="flex-column">

                    <Dropdown className={styles.dropdowns}>

                        <Dropdown.Toggle id="dropdown-basic">

                        <Nav.Item>
                            <Nav.Link className={styles.tabNavLink} eventKey="first">Beach Day</Nav.Link>
                            </Nav.Item>
                               
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={styles.dropMenu}>
                            <Dropdown.Item>

                            <Nav.Item>
                                <Nav.Link className={styles.tabNavLink} eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>

                            </Dropdown.Item>

                            <li><hr className="dropdown-divider" /></li>

                            <Dropdown.Item>

                            <Nav.Item>
                                <Nav.Link className={styles.tabNavLink} eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>

                            </Dropdown.Item>
                        
                        </Dropdown.Menu>
                    </Dropdown>

                    </Nav>

                </div>

            </div>

            <Tab.Content>

            <Tab.Pane eventKey="first">

                <section className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60'}>

                    <div className='container'>

                        <div className='row'>

                            <div className='col-md-6'>

                                <h2 className='ulineRed'>Beach Day for Kg </h2>

                                <p className='pt-4'>We the tiny n happy fishes in the marine world. Today at Vikas Mantra Public School organized The Beach Day as a part of monthly concept. Children learnt the concept of going to beach in summer. Underwater creatures were taught through songs.</p>

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

                                <h2 className='ulineRed'>Beach Day</h2>

                                <p className='pt-4'>We the tiny n happy fishes in the marine world. Today at Vikas Mantra Public School organized The Beach Day as a part of monthly concept. Children learnt the concept of going to beach in summer. Underwater creatures were taught through songs.</p>

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