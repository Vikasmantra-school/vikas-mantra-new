import { Breadcrumb } from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const Security = () => {

    const pageTitle = 'Campus'

    return (
        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <div className='AnimeStarts'>
                            <h2 className={styles.headingPdng + ' AnimeElement'}>Security</h2>
                        </div>

                    </div>

                </div>

            </section>

            <section className={styles.sectionPdng + ' whitebg position-relative ' + ' ' + styles.vectorImg10 + ' ' + styles.vectorImg11}>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-6 position-relative'>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>Security at VIKAS MANTRA
                                    PUBLIC SCHOOL</h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'>is maintained through a combination of trained and
                                    well-qualified security personnel who man various entry and exit points.
                                    Strategically located CCTV cameras at various points in the campus
                                    monitor and keep track of movement within the premises. Security measures
                                    such as fire alarms, fire extinguishers, key card access, etc. are
                                    installed as per government norms and follow best practice in security
                                    management. Entry of non-authorised personnel on the campus is strictly
                                    prohibited.
                                </p>
                            </div>

                        </div>

                        <div className='col-md-6 position-relative'>

                            <div className='imgBgColor imgUp pastelRed2 bgImageMargin AnimeStarts'>

                                <img src='/assets/campus/security.png' alt="image" className={styles.securityImg + ' AnimeElement'} />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Security;