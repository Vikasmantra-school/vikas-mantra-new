import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const Library = () => {

    const pageTitle = 'Campus'

    return (

        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Library</h2>

                    </div>

                </div>

            </section>

            <section className={'whitebg pt-5 position-relative ' + ' ' + styles.vectorImg10}>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-5 position-relative'>

                            <h3 className='ulineRed'>The library is at the heart of
                                learning, research and knowledge
                                assimilation
                            </h3>

                            <p className='pt-5'>at VIKAS MANTRA PUBLIC SCHOOL. Its close proximity to
                                classrooms and visually appealing design makes it a virtual extension of
                                the classroom environment. The library aims to instil a love for reading
                                by providing students with the required depth and breadth of classical
                                and modern-day literature.
                            </p>

                            <p>Within the VIKAS MANTRA PUBLIC SCHOOL has incorporated a number of specialty
                                rooms to strengthen and support core academic learning and co-curricular
                                programmes.campus, the library is a space where students can get away from
                                the rattle and hum of urban living and immerse themselves in a topic or
                                subject of their choice. Besides traditional paper books, the VIKAS MANTRA
                                PUBLIC SCHOOL library is equipped with e-books, videos and electronic
                                databases for referencing and research. The school houses separate Junior
                                and Senior libraries in order to provide relevant and age-appropriate
                                reading resources to its respective target audience.
                            </p>

                        </div>

                        <div className={'col-md-7 position-relative ' + styles.vectorImg5}>

                            <div className='imgBgColor pastelPurple2 '>

                                <img src='/assets/campus/library.png' alt="image" className={styles.libraryImg} />

                            </div>

                        </div>

                    </div>

                    <div className={styles.sectionPdng + ' row'}>

                        <div className='col-md-8'>

                            <h3 className='ulineRed'>The libraries at VIKAS MANTRA PUBLIC SCHOOL offer reading resources such as:</h3>

                        </div>

                        <div className='col-md-4'>
                            <div></div>
                        </div>

                        <div className='col-md-8 position-relative pt-5'>

                            <ul className='list-points'>

                                <li className='pt-3'> <img src="/assets/icons/blue-point.png" alt='list-point' /> A wide spectrum of books, magazines, periodicals, and dailies which support the core learning curriculum.</li>

                                <li className='pt-3'> <img src="/assets/icons/pink-point.png" alt='list-point' /> Abridged novels, children’s story books, early reading tools in the Junior Library.</li>

                                <li className='pt-3'> <img src="/assets/icons/yellow-point.png" alt='list-point' /> Digital resources such as e-books, videos, online databases and other aids to research.</li>

                                <li className='pt-3'> <img src="/assets/icons/lightgreen-point.png" alt='list-point' /> Literature in multiple languages, sourced from around the globe.</li>

                                <li className='pt-3'> <img src="/assets/icons/orange-point.png" alt='list-point' /> Departmental sections which stock subject-specific resources.</li>

                                <li className='pt-3'> <img src="/assets/icons/darkblue-point.png" alt='list-point' /> Computers which allow students to access online publications and journals.</li>

                            </ul>

                            {/* <img src='/assets/vectors/Vector10.png' alt="image" className={styles.vectorImg10} /> */}

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Library;