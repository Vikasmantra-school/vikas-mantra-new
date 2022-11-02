import styles from './style.module.css'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const FacilitiesAndInfrastructure = () => {

    const pageTitle = 'Campus'

    return (
        <>
            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Facilities and <br/> Infrastructure</h2>

                    </div>

                </div>

            </section>

            <section className={ 'greybg py-5 position-relative ' + styles.vectorImg5 + ' ' + styles.vectorImg10 }>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-5 position-relative'>

                            {/* <img src='/assets/vectors/Vector5.png' alt="image" className={styles.vectorImg5} /> */}

                            <h3 className='ulineRed'>VIKAS MANTRA PUBLIC SCHOOL
                                Campus is located in Mahindra
                                city one of the top rated cities in
                                India.
                            </h3>


                            <p className='pt-5'>The VIKAS MANTRA PUBLIC SCHOOL Campus is spread over
                                4.0 acres and communicates a sense of space to support
                                an active learning environment. The atmosphere encourages
                                collaboration, an open exchange of ideas and free movement
                                within the school premises. Classrooms at VIKAS MANTRA PUBLIC SCHOOL
                                Campus, apart from being spacious and vibrant, are at the forefront
                                of technology and interactive learning.
                            </p>

                        </div>

                        <div className='col-md-7 position-relative'>

                            <img src='/assets/campus/school-building3.png' alt="image" className={styles.schlBuildingImg} />

                        </div>

                        <div className='col-md-8 position-relatives'>

                            <p className='py-3'>Complementing these 21st century classrooms are a multitude of learning
                                centres and labs such as science , ICT  and maths laboratories, junior
                                and senior libraries, indoor sports arena, music, dance and performing
                                art studios amongst others.
                            </p>

                            <p className='pb-4'>Each floor within the VIKAS MANTRA PUBLIC SCHOOL Campus main school building
                                is meant to be its own little “mini” learning centre and includes smaller,
                                less obvious, but effective multi-purpose learning spaces in the form of
                                utility rooms, open terraces  which will also be used for small workshops.
                                All these elements come together as a collective whole to create an
                                environment that enhances experiential learning.
                            </p>

                            {/* <img src='/assets/vectors/Vector10.png' alt="image" className={styles.vectorImg10} /> */}

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default FacilitiesAndInfrastructure;