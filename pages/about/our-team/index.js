import styles from './style.module.css'
import { Breadcrumb } from '../../../components/Breadcrumb/Breadcrumb'
import { motion } from "framer-motion";

const OurTeam = () => {

    const staffTeam = [
        { staffImage: '/assets/staffs/staff2.png', heading: 'Ms. Vidhya', para: 'Primary coordinator', ImgContainer: 'ImgContainer2' },
        { staffImage: '/assets/staffs/staff3.png', heading: 'Ms. Pratheeba', para: 'Primary Coordinator HOD - Science', ImgContainer: 'ImgContainer3' },
        { staffImage: '/assets/staffs/staff4.png', heading: 'Raja Varadarajan', para: 'HOD - Maths', ImgContainer: 'ImgContainer4' },
        { staffImage: '/assets/staffs/staff5.png', heading: 'Shobana Kesavan', para: 'HOD - Computer Science', ImgContainer: 'ImgContainer5' },
        { staffImage: '/assets/staffs/staff6.png', heading: 'Sujatha Gangadharan', para: 'HOD - Tamil', ImgContainer: 'ImgContainer6' },
        { staffImage: '/assets/staffs/staff7.png', heading: 'Prince Sounderrajan K', para: 'HOD - Physical Education', ImgContainer: 'ImgContainer7' },
        { staffImage: '/assets/staffs/staff8.png', heading: 'Ms. Maheshwari', para: 'Pre-Primary Coordinator', ImgContainer: 'ImgContainer8' },
        { staffImage: '/assets/staffs/staff9.png', heading: 'Vivek Sathyan', para: 'HOD - Dance', ImgContainer: 'ImgContainer9' },
        { staffImage: '/assets/staffs/staff10.png', heading: 'Kavitha Yadav', para: 'HOD - Hindi', ImgContainer: 'ImgContainer10' },
        { staffImage: '/assets/staffs/staff11.png', heading: 'Soundarrajan Venkatesan', para: 'HOD - Art & Craft', ImgContainer: 'ImgContainer11' },
        { staffImage: '/assets/staffs/staff12.jpg', heading: 'Ms.Gayathri', para: 'HOD - English', ImgContainer: 'ImgContainer1' },
    ];

    const pageTitle = 'About'

    const exampleVariant = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    // const { scrollYProgress } = useScroll();

    return (

        <>
            <Breadcrumb pageName={pageTitle} />

            <section
                className={styles.rowPdng + ' py-4 position-relative ' + ' ' + styles.vectorImg6 + ' ' + styles.vectorImg8}   >

                <div className='container'>

                    <div className='row pt-4'>

                        <div className='col-md-12 position-relative'>

                            <div className='AnimeElement-x-x'>
                                <h2 className='AnimeElement-x'>Our Team</h2>
                            </div>

                            <img src='/assets/vectors/Vector5.png' alt="image" className={styles.vectorImg5} />

                        </div>

                        {staffTeam?.map((item, i) => {

                            return (

                                <div className=' col-sm-6 col-md-6 col-lg-4 py-4' key={i}>

                                    <motion.div initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.5,
                                            ease: [0, 0.71, 0.2, 1.01]
                                        }}
                                        className={item.ImgContainer + ' ImgContainer'}>

                                        <div className='AnimeElement-x-x'>
                                            <img src={item.staffImage} alt='image' className={styles.staffImg + ' img-fluid AnimeElement-x'} />
                                        </div>

                                        <div className='AnimeElement-x-x'>
                                            <h6 className='pt-4 text-center fw-bold AnimeElement-x '>{item.heading}</h6>
                                        </div>

                                        <div className='AnimeElement-x-x'>
                                            <p className='text-center pb-2 AnimeElement-x'>{item.para}</p>
                                        </div>

                                    </motion.div>

                                </div>

                            )
                        })}

                    </div>

                    <div className='row '>

                        <div className='col-md-12 position-relative'>

                            <img src='/assets/VMPS.png' alt="image" className={styles.vmpsImg} />

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default OurTeam;