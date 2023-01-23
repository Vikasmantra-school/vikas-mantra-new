import { Breadcrumb } from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const Technology = () => {

    const pageTitle = 'Campus'

    return (

        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <div className='AnimeStarts'>
                            <h2 className={styles.headingPdng + ' AnimeElement'}>Technology</h2>
                        </div>

                    </div>

                </div>

            </section>

            <section className={'whitebg py-5 position-relative ' + styles.vectorImg8 + ' ' + styles.vectorImg12}>

                <div className="container">

                    <div className='row'>

                        <div className='col-lg-6 col-md-12 position-relative'>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>Interweaving technology
                                    with traditional learning
                                    techniques,</h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'>Life at VIKAS MANTRA PUBLIC SCHOOL aims to go beyond
                                    gadgets and transform the very nature of learning in the 21st century.
                                    Life at VIKAS MANTRA PUBLIC SCHOOL believes in leveraging technology
                                    as a tool to enhance learning, as opposed to using technology for
                                    technology’s sake. This balanced approach ensures that students
                                    are exposed to and benefit from the digital revolution but not
                                    at the expense of thorough conceptual learning through the chalk
                                    and talk method.
                                </p>
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-12 position-relative'>

                            <div className='imgBgColor pastelYellow imgUp bgImageMargin AnimeStarts'>

                                {/* <img src='/assets/campus/technology.png' alt="image" className={styles.libraryImg + ' AnimeElement'} /> */}

                                <picture>
                                    <source srcSet='/assets/campus/technology.webp' />
                                    <source srcSet='/assets/campus/technology.png' />
                                    <img src='/assets/campus/technology.png' alt="image" className={styles.libraryImg + ' AnimeElement'} />
                                </picture>

                            </div>

                        </div>

                    </div>

                    <div className={styles.sectionPdng + ' row'}>

                        <div className='col-md-8'>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>VIKAS MANTRA PUBLIC SCHOOL has embraced technology to promote learning through:</h3>
                            </div>

                        </div>

                        <div className='col-md-4'>
                            <div></div>
                        </div>

                        <div className='col-md-8 position-relative pt-5'>

                            <ul className='list-points AnimeStarts'>

                                <li className='pt-3 AnimeElement'> <img src="/assets/icons/blue-point.png" alt='list-point' /> Junior Computer Lab for younger students which introduce them to computers and facilitate computer-aided learning
                                </li>

                                <li className='pt-3 AnimeElement'> <img src="/assets/icons/pink-point.png" alt='list-point' />  Senior Computer Lab with relevant software and internet access for developing learning skills such as critical thinking,
                                    research, problem-solving and communication
                                </li>

                                <li className='pt-3 AnimeElement'> <img src="/assets/icons/yellow-point.png" alt='list-point' /> Each classroom at VIKAS MANTRA PUBLIC SCHOOL has Wi-Fi-connectivity and a dedicated LCD projection system to
                                    facilitate technology-enabled learning
                                </li>

                                <li className='pt-3 AnimeElement'> <img src="/assets/icons/lightgreen-point.png" alt='list-point' /> Other labs and learning centres such as libraries are Wi-Fi enabled for easy access to the internet.
                                </li>


                            </ul>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'>Life at VIKAS MANTRA PUBLIC SCHOOL adheres to strict standards and policies for internet security to ensure that our students are
                                    protected from inappropriate content on the internet.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Technology;