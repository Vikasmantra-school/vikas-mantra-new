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
                                <h2 className='AnimeElement'>Message from the Principal</h2>
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
                                    <h3 className='ulineRed AnimeElement'>Dear Parents & Wellwishers,</h3>
                                </div>

                                <div className='AnimeStarts'>
                                    <p className='pt-5 AnimeElement'>At Vikas Mantra Public School, we believe that every child deserves a nurturing environment where learning is joyful, meaningful, and secure. Our dedicated team of educators are committed to delivering academic excellence while ensuring the safety and well-being of each student under our care.
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
                                        We follow a future-ready curriculum that encourages critical thinking, creativity, and character building—empowering students to grow into confident, compassionate individuals. With strong safety protocols, structured routines, and a vibrant learning culture, we strive to make every school day enriching and reassuring for both students and parents.
                                    </p>
                                </div>
                                 <div className='AnimeStarts'>
                                    <p className='AnimeElement'>
                                        Thank you for placing your trust in us. Together, let’s shape a brighter tomorrow for our children.
                                    </p>
                                </div>

                                

                                <div className='AnimeStarts'>
                                    <p className='AnimeElement'>Warm regards,</p>
                                </div>

                                <div className='AnimeStarts'>
                                    <h4 className='AnimeElement'>Mrs. C. S. Mahalakshmi</h4>
                                    <h5 className='' style={{
                                        fontStyle: 'italic'}}>Principal</h5>
                                    <p className='mb-0'>Vikas Mantra Public School</p>
                                    <p>Mahindra World City Campus</p>
                                </div>

                            </div>

                        </div>

                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative'>

                            <div className={'imgBgColor pastelBrown3 imgUp AnimeStarts ' + styles.ImgMargin}>

                                <img src='/assets/banners/principal.png' alt="image" className={styles.PrincipalImg + ' AnimeElement'} />

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