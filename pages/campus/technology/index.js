import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import styles from './style.module.css'

const Technology = () => {

    const pageTitle = 'Campus'

    return (

        <>

            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Technology</h2>

                    </div>

                </div>

            </section>

            <section className={'whitebg py-5 position-relative ' + styles.vectorImg8 + ' ' + styles.vectorImg12}>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-5 position-relative'>

                            {/* <img src='/assets/vectors/Vector12.png' alt="image" className={styles.vectorImg12} /> */}

                            <h3 className='ulineRed'>Interweaving technology
                                with traditional learning
                                techniques,</h3>

                            <p className='pt-5'>Life at VIKAS MANTRA PUBLIC SCHOOL aims to go beyond
                                gadgets and transform the very nature of learning in the 21st century.
                                Life at VIKAS MANTRA PUBLIC SCHOOL believes in leveraging technology
                                as a tool to enhance learning, as opposed to using technology for
                                technology’s sake. This balanced approach ensures that students
                                are exposed to and benefit from the digital revolution but not
                                at the expense of thorough conceptual learning through the chalk
                                and talk method.
                            </p>

                        </div>

                        <div className='col-md-7 position-relative'>

                            <img src='/assets/campus/classroom.png' alt="image" className={styles.libraryImg} />

                        </div>

                    </div>

                    <div className={styles.sectionPdng + ' row'}>

                        <div className='col-md-8'>

                            <h3 className='ulineRed'>VIKAS MANTRA PUBLIC SCHOOL has embraced technology to promote learning through:</h3>

                        </div>

                        <div className='col-md-4'>
                            <div></div>
                        </div>

                        <div className='col-md-8 position-relative pt-5'>

                            <ul>

                                <li className='pt-3'>Junior Computer Lab for younger students which introduce them to computers and facilitate computer-aided learning
                                </li>

                                <li className='pt-3'> Senior Computer Lab with relevant software and internet access for developing learning skills such as critical thinking,
                                    research, problem-solving and communication
                                </li>

                                <li className='pt-3'>Each classroom at VIKAS MANTRA PUBLIC SCHOOL has Wi-Fi-connectivity and a dedicated LCD projection system to
                                    facilitate technology-enabled learning
                                </li>

                                <li className='pt-3'>Other labs and learning centres such as libraries are Wi-Fi enabled for easy access to the internet.
                                </li>


                            </ul>

                            <p className='pt-5'>Life at VIKAS MANTRA PUBLIC SCHOOL adheres to strict standards and policies for internet security to ensure that our students are
                                protected from inappropriate content on the internet.
                            </p>

                            {/* <img src='/assets/vectors/Vector8.png' alt="image" className={styles.vectorImg8} /> */}

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Technology;