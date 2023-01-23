import { Breadcrumb } from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const Transportation = () => {

    const pageTitle = 'Campus'

    return (

        <>


            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <div className='AnimeStarts'>
                            <h2 className={styles.headingPdng + ' AnimeElement'}>Transportation</h2>
                        </div>

                    </div>

                </div>

            </section>

            <section className={styles.sectionPdng + ' whitebg position-relative ' + ' ' + styles.vectorImg11}>

                <div className="container">

                    <div className='row'>

                        <div className='col-lg-6 col-md-12 position-relative'>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>VIKAS MANTRA
                                    PUBLIC SCHOOL   </h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'>has access to a fleet of buses to accommodate student and
                                    staff transportation to and from the school. School bus movement can be
                                    tracked via SMS allowing parents to predict arrival and departure times
                                    accurately. Bus fees for students are payable on term basis and are based
                                    on distances between the school and the student’s pick-up/drop-off point.
                                </p>
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-12 position-relative'>

                            <div className='imgBgColor imgUp pastelBrown2 bgImageMargin AnimeStarts'>

                                {/* <img src='/assets/campus/school-bus.png' alt="image" className={styles.schlBusImg + ' AnimeElement'} /> */}

                                <picture>
                                    <source srcSet='/assets/campus/school-bus.webp' />
                                    <source srcSet='/assets/campus/school-bus.png'/>
                                    <img src='/assets/campus/school-bus.png' alt="image" className={styles.schlBusImg + ' AnimeElement'} />
                                </picture>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Transportation;