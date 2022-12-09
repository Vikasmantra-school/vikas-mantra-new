import { Breadcrumb } from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const SpecialityRoom = () => {

    const pageTitle = 'Campus'

    return (
        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4 '>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <div className='AnimeStarts'>
                            <h2 className={styles.headingPdng + ' AnimeElement'}>Speciality Rooms</h2>
                        </div>

                    </div>

                </div>

            </section>

            <section className={'whitebg py-5 position-relative ' + styles.vectorImg10 + ' ' + styles.vectorImg12}>

                <div className="container">

                    <div className='row'>

                        <div className='col-lg-6 col-md-12 position-relative'>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>VIKAS MANTRA PUBLIC
                                    SCHOOL
                                </h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'>has incorporated a number of specialty rooms to strengthen
                                    and support core academic learning and co-curricular programmes. Specialty rooms
                                    are built with a view to enhance student experience through advanced equipment
                                    and technologies.
                                </p>
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-12 position-relative'>

                            <div className='imgBgColor imgUp pastelBrown bgImageMargin AnimeStarts'>

                                {/* <img src='/assets/campus/Speciality-room.png' alt="image" className={styles.classroomImg + ' AnimeElement'} /> */}

                                <picture>
                                    <source srcSet='/assets/campus/Speciality-room.webp' />
                                    <source srcSet='/assets/campus/Speciality-room.png'/>
                                    <img src='/assets/campus/Speciality-room.webp' alt="image" className={styles.classroomImg + ' AnimeElement'} />
                                </picture>

                            </div>

                        </div>

                    </div>

                    <div className={styles.sectionPdng + ' row '}>

                        <div className='col-lg-6 col-md-12'>

                            <div className='AnimeStarts'>
                                <h3 className={' ulineRed AnimeElement ' + styles.uLineMargin}>Specialty Rooms at
                                    VIKAS MANTRA PUBLIC SCHOOL include</h3>
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-0'>
                            <div></div>
                        </div>

                        <div className={styles.pdngZero + ' col-lg-2 col-md-3 py-5'}>

                            <ul className='list-points AnimeStarts'>
                                <li className='AnimeElement'>
                                    <img src="/assets/icons/blue-point.png" alt='list-point' />
                                    Audio Video Lab
                                </li>
                            </ul>

                        </div>

                        <div className={styles.pdngZero + ' col-lg-2 col-md-3 py-5'}>

                            <ul className='list-points AnimeStarts'>

                                <li className='AnimeElement'>
                                    <img src="/assets/icons/pink-point.png" alt='list-point' />
                                    Music and Dance studios
                                </li>

                            </ul>

                        </div>

                        <div className={styles.pdngZero + ' col-lg-2 col-md-3 py-5'}>

                            <ul className='list-points AnimeStarts'>

                                <li className='AnimeElement'>
                                    <img src="/assets/icons/yellow-point.png" alt='list-point' />
                                    Media Centre
                                </li>

                            </ul>

                        </div>

                        <div className={styles.pdngZero + ' col-lg-2 col-md-3 py-5 '}>

                            <ul className='list-points AnimeStarts'>

                                <li className='AnimeElement'>
                                    <img src="/assets/icons/lightgreen-point.png" alt='list-point' />
                                    Multipurpose Hall
                                </li>

                            </ul>

                        </div>

                        <div className='col-md-8'>

                            <div className='AnimeStarts'>
                                <p className='AnimeElement'>VIKAS MANTRA PUBLIC SCHOOL is proud to announce the launch of HOME Economics for the first time in India equipping
                                    children to learn the life skills to lead a complete independent life in their later years.
                                </p>
                            </div>

                        </div>


                        <div className='col-md-3 position-relative'>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default SpecialityRoom;