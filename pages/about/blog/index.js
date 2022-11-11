import styles from './style.module.css'
import Link from 'next/link'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
const Blog = () => {

    const pageTitle = 'About'

    return (
        <>
            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className={styles.blogRow1 + 'row py-5'}>

                        <h2>Blog</h2>

                    </div>

                </div>

            </section>

            <section className={' whitebg position-relative pt-2 pb-5 ' + ' ' + styles.vectorImg2}>

                <div className='container'>

                    <div className={'row p-4 align-items-center ' + styles.rowBox}>

                        <div className={'col-md-6 ' + styles.colPdng1}>

                            {/* <img src='/assets/vectors/Vector1.png' alt="image" className={styles.vectorImg2} /> */}

                            <h3 className='ulineRed'>TEACHING ECO-FRIENDLY PRACTICES TO CHILDREN</h3>

                            <p className='pt-5'>Teaching our children the value of making eco-friendly
                                decisions in their everyday lives can be difficult in
                                a culture that promotes mass consumption. But it’s more
                                important than ever today to bring up ecologically
                                conscious kids. Here we bring to you a few yet effective
                                eco-friendly practices you can start …</p>

                            <Link href='/about/blog/blogs'><button className='btn outlineBtn'>Know More</button></Link>

                        </div>

                        <div className='col-md-6 position-relative'>

                            <div className={'imgBgColor pastelBlue'}>

                                <img src='/assets/blog1.png' alt="image" className={styles.Blog1Img} />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className={' whitebg position-relative py-5 ' + styles.vectorImg3 + ' ' + styles.sectionContainer} >

                <div className='container'>

                    <div className={'row p-4 align-items-center ' + styles.rowBox}>

                        <div className='col-md-6 position-relative'>

                            <div className={' pastelBlue imgBgColor '}>

                                <img src='/assets/blog2.png' alt="image" className={styles.Blog2Img} />

                            </div>

                        </div>

                        <div className={'col-md-6 ' + styles.colPdng2}>

                            <h3 className='ulineRed'>BENEFITS OF YOGA FOR SCHOOL STUDENTS</h3>

                            <p className='pt-5'>The growing levels of competition have made children pursue a variety
                                of fresh and interesting experiences. They have paved the way for a
                                variety of programs, making students get exposed to a wide array of
                                knowledge that inspires and pushes children to learn, grow, thrive,
                                and succeed. But the truth …</p>

                            <Link href='/about/blog/blogs'><button className='btn outlineBtn'>Know More</button></Link>

                            {/* <img src='/assets/vectors/Vector2.png' alt="image" className={styles.vectorImg3} /> */}

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Blog;