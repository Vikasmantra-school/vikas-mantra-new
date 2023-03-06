import styles from './style.module.css'
import { Breadcrumb } from '../../../components/Breadcrumb/Breadcrumb'
import { motion } from "framer-motion";
import Image from 'next/image'
import staff1 from '../../../public/assets/staffs/staff2.png'
import staff2 from '../../../public/assets/staffs/staff3.png'
import staff3 from '../../../public/assets/staffs/staff4.png'
import staff4 from '../../../public/assets/staffs/staff5.png'
import staff5 from '../../../public/assets/staffs/staff6.png'
import staff6 from '../../../public/assets/staffs/staff7.png'
import staff7 from '../../../public/assets/staffs/staff8.png'
import staff8 from '../../../public/assets/staffs/staff9.png'
import staff9 from '../../../public/assets/staffs/staff10.png'
import staff10 from '../../../public/assets/staffs/staff11.png'
import staff11 from '../../../public/assets/staffs/staff12.jpg'

const OurTeam = () => {

    const staffTeam = [
        { staffImage: staff1, delay: 0.5, heading: 'Ms. Vidhya', para: 'Primary coordinator', ImgContainer: 'ImgContainer2' },
        { staffImage: staff2, delay: 0.7, heading: 'Ms. Pratheeba', para: 'Primary Coordinator HOD - Science', ImgContainer: 'ImgContainer3' },
        { staffImage: staff3, delay: 0.9, heading: 'Raja Varadarajan', para: 'HOD - Maths', ImgContainer: 'ImgContainer4' },
        { staffImage: staff4, delay: 1, heading: 'Shobana Kesavan', para: 'HOD - Computer Science', ImgContainer: 'ImgContainer5' },
        { staffImage: staff5, delay: 1.2, heading: 'Sujatha Gangadharan', para: 'HOD - Tamil', ImgContainer: 'ImgContainer6' },
        { staffImage: staff6, delay: 1.4, heading: 'Prince Sounderrajan K', para: 'HOD - Physical Education', ImgContainer: 'ImgContainer7' },
        { staffImage: staff7, delay: 1.6, heading: 'Ms. Maheshwari', para: 'Pre-Primary Coordinator', ImgContainer: 'ImgContainer8' },
        { staffImage: staff8, delay: 1.8, heading: 'Vivek Sathyan', para: 'HOD - Dance', ImgContainer: 'ImgContainer9' },
        { staffImage: staff9, delay: 2, heading: 'Kavitha Yadav', para: 'HOD - Hindi', ImgContainer: 'ImgContainer10' },
        { staffImage: staff10, delay: 2.2, heading: 'Soundarrajan Venkatesan', para: 'HOD - Art & Craft', ImgContainer: 'ImgContainer11' },
        { staffImage: staff11, delay: 2.4, heading: 'Ms.Gayathri', para: 'HOD - English', ImgContainer: 'ImgContainer1' },
    ];

    const pageTitle = 'About'

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

                                <div className=' col-sm-6 col-md-6 col-lg-4 col-xl-3 py-4' key={i}>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: item.delay, ease: 'easeInOut' }}
                                        className={item.ImgContainer + ' ImgContainer'} >

                                        <div className='AnimeElement-x-x'>
                                            <Image src={item.staffImage} alt='image'  className={styles.staffImg + ' img-fluid AnimeElement-x'} />
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