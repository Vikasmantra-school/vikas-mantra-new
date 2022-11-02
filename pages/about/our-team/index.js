import styles from './style.module.css'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'

const OurTeam = () => {


    const staffTeam = [
        { staffImage: '/assets/staffs/staff1.png', heading: 'Kirthika Manimaran', para: 'VP & HOD - English' },
        { staffImage: '/assets/staffs/staff2.png', heading: 'Ms. Vidhya', para: 'Primary coordinator' },
        { staffImage: '/assets/staffs/staff3.png', heading: 'Primary coordinator', para: 'HOD - Science' },
        { staffImage: '/assets/staffs/staff4.png', heading: 'Raja Varadarajan', para: 'HOD - Maths' },
        { staffImage: '/assets/staffs/staff5.png', heading: 'Shobana Kesavan', para: 'HOD - Computer Science' },
        { staffImage: '/assets/staffs/staff6.png', heading: 'Sujatha Gangadharan', para: 'HOD - Tamil' },
        { staffImage: '/assets/staffs/staff7.png', heading: 'Sumathi Elumalai', para: 'HOD - Physical Education' },
        { staffImage: '/assets/staffs/staff8.png', heading: 'Ms. Maheshwari', para: 'Pre-Primary Coordinator' },
        { staffImage: '/assets/staffs/staff9.png', heading: 'Vivek Sathyan', para: 'HOD - Dance' },
        { staffImage: '/assets/staffs/staff10.png', heading: 'Kavitha Yadav', para: 'HOD - Hindi' },
        { staffImage: '/assets/staffs/staff11.png', heading: 'Soundarrajan Venkatesan', para: 'HOD - Art & Craft' },
    ];

    const pageTitle ='About'
    return (

        <>
            <Breadcrumb pageName={pageTitle} />

            <section className={styles.rowPdng + ' py-4 position-relative ' + ' ' + styles.vectorImg6 + ' ' + styles.vectorImg8}>

                <div className='container'>

                    <div className='row pt-4'>

                        <div className='col-md-12 position-relative'>

                            <h2>Our Team</h2>

                            <img src='/assets/vectors/Vector5.png' alt="image" className={styles.vectorImg5} />

                        </div>

                        {staffTeam?.map((item, i) => {

                            return (

                                <div className=' col-sm-6 col-md-6 col-lg-4 py-4' key={i}>

                                    <img src={item.staffImage} alt='image' className={styles.staffImg + ' img-fluid'} />

                                    <h6 className='pt-4'>{item.heading}</h6>

                                    <p className='ulineRed'>{item.para}</p>

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