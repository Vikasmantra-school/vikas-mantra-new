import styles from './style.module.css'
import { Breadcrumb } from '../../../components/Breadcrumb/Breadcrumb'

const MessageFromPrincipal = () => {

    const pageTitle = 'About'

    return (

        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4 AnimeStarts'>

                <div className='container position-relative'>

                    <div className={styles + 'row py-5'}>

                        <div className='col-md-6'>

                            <div className='AnimeStarts'>
                                <h2 className='AnimeElement'>Message from Our Principal</h2>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className={styles.sectionContainer + ' whitebg position-relative ' + ' ' + styles.vectorImg1 + ' ' + styles.vectorImg2}>

                <div className='container'>

                    <div className='row py-5 '>

                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>

                            <div className={styles.pdngRight + ''}>


                                <div className='AnimeStarts'>
                                    <h3 className='ulineRed AnimeElement'>Dear all,</h3>
                                </div>

                                <div className='AnimeStarts'>
                                    <p className='pt-5 AnimeElement'>It is my proud privilege to warmly welcome you into the portals of Learning
                                        Community of Vikas Mantra Public School; dedicated to develop skilled/
                                        outstanding students who can pursue their interests and strengths to the
                                        best of their ability so that our enriched students emerge into the society
                                        building a strong generation for a better world tomorrow through dynamic
                                        education.
                                    </p>
                                </div>

                                <div className='AnimeStarts'>
                                    <p className='AnimeElement'>
                                        We aim to create a safe, nurturing yet challenging environment that is
                                        built on positive relationships; developing the whole student – emotionally,
                                        socially and academically.
                                    </p>
                                </div>

                                <div className='AnimeStarts'>
                                    <p className='AnimeElement'>
                                        Vikas Mantra Public School believes that a child’s school is a home away
                                        from home; schooling of a student is not targeted at enabling of the learner
                                        to pass through the narrow tunnel of examination. We empower every child
                                        to create a success story on his/her own. We visualize every child as a unique
                                        storehouse of potential ideas and skills to be discovered and nurtured to
                                        blossom. The extensive lush green campus with an infrastructure at par with global
                                        standards provides the best ambient for a vibrant school career. We are very keen
                                        to involve our community in our learning, developing true partnerships that value
                                        each student.
                                    </p>
                                </div>

                                <div className='AnimeStarts'>
                                    <p className='AnimeElement'>Best Sincerely,</p>
                                </div>

                                <div className='AnimeStarts'>
                                    <h4 className='AnimeElement'>Mrs. Priyanka Ghosh Jesuraj</h4>
                                </div>

                            </div>

                        </div>

                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative'>

                            <div className={'imgBgColor pastelBrown3 imgUp AnimeStarts ' + styles.ImgMargin}>

                                {/* <img src='/assets/banners/principal.png' alt="image" className={styles.PrincipalImg + ' AnimeElement'} /> */}

                                <picture>
                                    <source srcSet='/assets/banners/principal.webp' />
                                    <source srcSet='/assets/banners/principal.png' />
                                    <img src='/assets/banners/principal.webp' alt="image" className={styles.PrincipalImg + ' AnimeElement'} />
                                </picture>

                            </div>

                            <img src='/assets/VMPS.png' alt="image" className={styles.vmpsImg} />

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default MessageFromPrincipal;