import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Index = () => {

    gsap.registerPlugin(ScrollTrigger)

    //gsap-integration

    useEffect(() => {
        const parentTrigger = document.querySelectorAll('.parentAnimeStarts')
        parentTrigger.forEach(fadeIn)
        function fadeIn(elem) {
            let text = elem.querySelectorAll('.fading')
            gsap.fromTo(
                text,
                {
                    autoAlpha: 0,
                    y: 50
                },
                {
                    delay: 0.5,
                    duration: 1,
                    autoAlpha: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: text,
                        animation: text,
                        toggleActions: 'play none none none',
                        once: true,
                    }
                }
            )
        }
    }, [])

    return (
        <>

            <section className={styles.sectionPdng + ' whitebg position-relative pt80 pb60 VectorDot parentAnimeStarts'}>

                <div className='container'>

                    <div className='row'>

                        <div className='col-md-8'>
                            <h2 className='ulineRed fading'>As learners we all strive to be:</h2>
                        </div>

                    </div>

                    <div className='row pt60'>

                        <div className='col-lg-4 col-md-4 col-sm-12'>

                            <div className='card-wrapper one'>
                                <div className="card-header">
                                    <h1 className="card-header-text2 fading">Inquirers</h1>
                                    <p className="card-header-text3 fading">We nurture curiosity while developing skills for inquiry and research. We know how to make children learn independently and with others. We make them learn with enthusiasm and sustain their love of learning throughout life. </p>
                                </div>
                                <div className="card-footer">
                                    <div className="footer-content-wrap">
                                        <div className="footer-text-wrap">
                                            <h1 className='fading'>01</h1>
                                            <p className='fading'>step</p>
                                        </div>

                                        <FontAwesomeIcon icon={faAnglesRight} className={styles.plusIcon + ' fading'} />

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12'>

                            <div className="card-wrapper two">
                                <div className="card-header">
                                    <h1 className="card-header-text2 fading">Caring</h1>
                                    <p className="card-header-text3 fading">We show empathy, compassion and respect. We have a commitment to service, and we act to make a positive difference in the lives of others and in the world around us.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="footer-content-wrap">
                                        <div className="footer-text-wrap fading">
                                            <h1 className='fading'>02</h1>
                                            <p className='fading'>step</p>
                                        </div>
                                        <FontAwesomeIcon icon={faAnglesRight} className={styles.plusIcon + ' fading'} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12'>

                            <div className="card-wrapper one">
                                <div className="card-header">
                                    <h1 className="card-header-text2 fading">Knowledgeable</h1>
                                    <p className="card-header-text3 fading">We develop and use conceptual understanding across a range of disciplines. We engage the students with issues and ideas that have local and global significance.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="footer-content-wrap">
                                        <div className="footer-text-wrap">
                                            <h1 className='fading'>03</h1>
                                            <p className='fading'>step</p>
                                        </div>
                                        <FontAwesomeIcon icon={faAnglesRight} className={styles.plusIcon} />
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className='col-lg-4 col-md-4 col-sm-12'>

                            <div className="card-wrapper two">
                                <div className="card-header">
                                    <h1 className="card-header-text2 fading">Risk-takers</h1>
                                    <p className="card-header-text3 fading">We approach uncertainty with forethought and determination; we work independently and cooperatively to explore new ideas and innovative strategies. We are resourceful and resilient in the face of challenges and change.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="footer-content-wrap">
                                        <div className="footer-text-wrap">
                                            <h1 className='fading'>04</h1>
                                            <p className='fading'>step</p>
                                        </div>
                                        <FontAwesomeIcon icon={faAnglesRight} className={styles.plusIcon} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12'>

                            <div className="card-wrapper one">
                                <div className="card-header">
                                    <h1 className="card-header-text2 fading">Thinkers</h1>
                                    <p className="card-header-text3 fading">We strive to develop critical and creative thinking skills in minds of our students to make them good decision maker who is responsible for all of their actions. We encourages our children to think independently and make them an independent thinker.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="footer-content-wrap">
                                        <div className="footer-text-wrap">
                                            <h1 className='fading'>05</h1>
                                            <p className='fading'>step</p>
                                        </div>
                                        <FontAwesomeIcon icon={faAnglesRight} className={styles.plusIcon} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12'>

                            <div className="card-wrapper two">
                                <div className="card-header">
                                    <h1 className="card-header-text2 fading">Balanced</h1>
                                    <p className="card-header-text3 fading">We understand the importance of balancing different aspects of our lives – intellectual, physical, and emotional – to achieve well-being for ourselves and others. We recognise our interdependence with other people and with the world in which we live and we make sure that this is passed on to our students as well .</p>
                                </div>
                                <div className="card-footer">
                                    <div className="footer-content-wrap">
                                        <div className="footer-text-wrap">
                                            <h1 className='fading'>06</h1>
                                            <p className='fading'>step</p>
                                        </div>
                                        <FontAwesomeIcon icon={faAnglesRight} className={styles.plusIcon} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12'>

                            <div className="card-wrapper one">
                                <div className="card-header">
                                    <h1 className="card-header-text2 fading">Principled</h1>
                                    <p className="card-header-text3 fading">We act with integrity and honesty, with a strong sense of fairness and justice, and with respect for the dignity and rights of people everywhere. We take responsibility for our actions and their consequences.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="footer-content-wrap">
                                        <div className="footer-text-wrap">
                                            <h1 className='fading'>07</h1>
                                            <p className='fading'>step</p>
                                        </div>
                                        <FontAwesomeIcon icon={faAnglesRight} className={styles.plusIcon} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12'>

                            <div className="card-wrapper two">
                                <div className="card-header">
                                    <h1 className="card-header-text2 fading">Reflective</h1>
                                    <p className="card-header-text3 fading">As part of personal development, we make our students thoughtful and let them understand their strengths and weaknesses. This helps them become responsible members of local, national, and global communities.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="footer-content-wrap">
                                        <div className="footer-text-wrap">
                                            <h1 className='fading'>08</h1>
                                            <p className='fading'>step</p>
                                        </div>
                                        <FontAwesomeIcon icon={faAnglesRight} className={styles.plusIcon} />
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className='col-lg-4 col-md-4 col-sm-12'>

                            <div className="card-wrapper one">
                                <div className="card-header">
                                    <h1 className="card-header-text2 fading">Open-minded</h1>
                                    <p className="card-header-text3 fading">We critically appreciate our own cultures and personal histories, as well as the values and traditions of others. We make sure that our students seek and evaluate a range of points of view, so that they are willing to grow from the experience.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="footer-content-wrap">
                                        <div className="footer-text-wrap">
                                            <h1 className='fading'>09</h1>
                                            <p className='fading'>step</p>
                                        </div>
                                        <FontAwesomeIcon icon={faAnglesRight} className={styles.plusIcon} />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Index