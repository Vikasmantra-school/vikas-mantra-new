import styles from './style.module.css'
import Link from 'next/link'
import { Breadcrumb } from '../../../components/Breadcrumb/Breadcrumb'
const Blog = () => {

    const pageTitle = 'About'

    return (
        <>
            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className={'row py-5'}>

                        <div className='AnimeStarts'>
                            <h2 className='AnimeElement'>Blog</h2>
                        </div>

                    </div>

                </div>

            </section>

            <section className={' whitebg position-relative pt-2 pb-5 ' + ' ' + styles.vectorImg2}>

                <div className='container'>

                    <div className={'row p-4 align-items-center ' + styles.rowBox}>

                        <div className={'col-lg-6 col-md-12 ' + styles.colPdng1}>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>TEACHING ECO-FRIENDLY PRACTICES TO CHILDREN</h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'>Teaching our children the value of making eco-friendly
                                    decisions in their everyday lives can be difficult in
                                    a culture that promotes mass consumption. But it’s more
                                    important than ever today to bring up ecologically
                                    conscious kids. Here we bring to you a few yet effective
                                    eco-friendly practices you can start …</p>

                                <Link href='/about/blog/blog1'><button className='btn outlineBtn AnimeElement'>Know More</button></Link>
                            </div>

                        </div>

                        <div className='col-lg-6 col-md-12 position-relative'>

                            <div className={'imgBgColorBlog1 pastelGreen4 AnimeStarts'}>

                                <img src='/assets/blog1.png' alt="image" className={styles.Blog1Img + ' AnimeElement'} />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className={' whitebg position-relative py-5 ' + styles.vectorImg3 + ' ' + styles.sectionContainer} >

                <div className='container'>

                    <div className={'row p-4 align-items-center ' + styles.rowBox}>

                        <div className={'col-lg-6 col-md-12 position-relative ' + styles.order2}>

                            <div className={' pastelBlue4 imgBgColorBlog2 AnimeStarts '}>

                                <img src='/assets/blog2.png' alt="image" className={styles.Blog2Img + ' AnimeElement'} />

                            </div>

                        </div>

                        <div className={'col-lg-6 col-md-12 ' + styles.colPdng2 + ' ' + styles.order1}>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>BENEFITS OF YOGA FOR SCHOOL STUDENTS</h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'>The growing levels of competition have made children pursue a variety
                                    of fresh and interesting experiences. They have paved the way for a
                                    variety of programs, making students get exposed to a wide array of
                                    knowledge that inspires and pushes children to learn, grow, thrive,
                                    and succeed. But the truth …</p>

                                <Link href='/about/blog/blog2'><button className='btn outlineBtn AnimeElement'>Know More</button></Link>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Blog;