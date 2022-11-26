import { Breadcrumb } from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const Healthcare = () => {

    const pageTitle = 'Campus'

    return (

        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <div className='AnimeStarts'>
                            <h2 className={styles.headingPdng + ' AnimeElement'}>Healthcare</h2>
                        </div>

                    </div>

                </div>

            </section>

            <section className={styles.sectionPdng + ' whitebg position-relative ' + ' ' + styles.vectorImg12 + ' ' + styles.vectorImg10}>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-6 position-relative'>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>Security at VIKAS MANTRA
                                    PUBLIC SCHOOL
                                </h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'>The good health of our students, faculty and staff is
                                    of the utmost importance to us. To ensure this, VIKAS MANTRA PUBLIC SCHOOL
                                    has set up a dedicated, fully-functional healthcare centre staffed with a
                                    qualified nurse. The nurse is present during school hours and attends to
                                    day to day ailments, conducts regular health check-ups and holds workshops
                                    on hygiene, sanitation and medical safety. In addition, there is also a
                                    provision for a doctor on call, should the need arise for a doctor to be
                                    present on campus. For emergencies and situations that are beyond the
                                    scope of the healthcare centre, we have tied up with a leading hospital
                                    located within 15 minutes from the school campus. VIKAS MANTRA PUBLIC
                                    SCHOOL also has access to ambulance services from nearby hospitals for
                                    any medical emergencies.
                                </p>
                            </div>

                            <div className='AnimeStarts '>
                                <h3 className='ulineRed pt-5 AnimeElement'>Our healthcare centre
                                    infrastructure includes:</h3>
                            </div>

                            <ul className='pt-5 list-points AnimeStarts'>

                                <li className='pt-3 AnimeElement'>  <img src="/assets/icons/blue-point.png" alt='list-point' />First aid kits, basic medicines & medical supplies</li>

                                <li className='pt-3 AnimeElement'> <img src="/assets/icons/pink-point.png" alt='list-point' />Full-time qualified nurse</li>

                            </ul>

                        </div>

                        <div className='col-md-6 position-relative'>

                            <div className='imgBgColor imgUp pastelBlue2 bgImageMargin'>

                                <img src='/assets/campus/healthcare.png' alt="image" className={styles.securityImg + ' AnimeElement'} />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Healthcare;