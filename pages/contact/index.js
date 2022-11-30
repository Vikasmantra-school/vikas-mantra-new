import styles from './style.module.css'
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'



const Contact = () => {
    const pageTitle = 'Contact'

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        const parentTrigger = document.querySelectorAll('.ContactAnimeStarts')
        parentTrigger.forEach(fadeIn)

        function fadeIn(elem) {
            let text1 = elem.querySelectorAll('.AnimeElement1')

            gsap.fromTo(
                text1,
                {
                    autoAlpha: 0,
                    x: -50
                },
                {
                    delay: 0.5,
                    duration: 1,
                    autoAlpha: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: elem,
                        animation: text1,
                        toggleActions: 'play none none none',
                        once: true,
                    }
                }
            )
        }
    }, [])


    useEffect(() => {

        const parentTrigger2 = document.querySelectorAll('.ContactAnimeStarts2')
        parentTrigger2.forEach(fadeIn2)

        function fadeIn2(elem) {
            let text2 = elem.querySelectorAll('.AnimeElement2')

            gsap.fromTo(
                text2,
                {
                    autoAlpha: 0,
                    x: -100
                },
                {
                    delay: 0.7,
                    duration: 1,
                    autoAlpha: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: elem,
                        animation: text2,
                        toggleActions: 'play none none none',
                        once: true,
                    }
                }
            )
        }
    }, [])

    useEffect(() => {

        const parentTrigger3 = document.querySelectorAll('.ContactAnimeStarts3')
        parentTrigger3.forEach(fadeIn3)

        function fadeIn3(elem) {
            let text3 = elem.querySelectorAll('.AnimeElement3')
            gsap.fromTo(
                text3,
                {
                    autoAlpha: 0,
                    x: -150
                },
                {
                    delay: 0.8,
                    duration: 1,
                    autoAlpha: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: elem,
                        animation: text3,
                        toggleActions: 'play none none none',
                        once: true,
                    }
                }
            )
        }
    }, [])

    return (
        <>
            <Breadcrumb pageName={pageTitle} />

            <section className={'pt60' + ' ' + 'pb60'}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'>

                            <div className='AnimeStarts'>
                                <h2 className='AnimeElement'>Contact Us</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className={'whitebg VectorYellowHalfSpiral' + ' ' + 'pt60'}>

                <div className='container'>

                    <div className='row'>

                        <div className='col-md-6'></div>

                        <div className='col-lg-6 col-md-12'>

                            <div className={'imgUp imgBgColor pastelGreen2 ContactAnimeStarts3 ' + ' ' + styles.careerImg}>

                                <img
                                    src='/assets/campus/school-building3.png'
                                    alt='image'
                                    className='img-fluid AnimeElement3'
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className={' whitebg pb60 position-relative ' + ' ' + styles.vectorImg10}>
                <div className='container'>
                    <div className={styles.rowPdng + ' row text-center'}>



                        <div className={'col-md-4 ' + ' ' + styles.mobColPdng}>


                            <div className='ContactAnimeStarts'>
                                <img src=' /assets/icons/mail.png' alt='image' className={styles.iconsImg + ' AnimeElement1'} />
                            </div>

                            <div className={styles.paraAlign}>

                                <div className='ContactAnimeStarts'>
                                    <h4 className='py-4 m-0 AnimeElement1'>Postal address</h4>
                                </div>


                                <div className='ContactAnimeStarts'>
                                    <p className='m-0 AnimeElement1'>
                                        S.No:168,168/3,
                                    </p>
                                </div>

                                <div className='ContactAnimeStarts'>
                                    <p className='m-0 AnimeElement1'>
                                        Off Mahindra World City,
                                    </p>
                                </div>


                                <div className='ContactAnimeStarts'>
                                    <p className='m-0 AnimeElement1'>
                                        Anjur - 603204, Chengalpattu
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className={'col-md-4 ' + ' ' + styles.mobColPdng}>


                            <div className='ContactAnimeStarts2'>
                                <img src=' /assets/icons/call.png' alt='image' className={styles.iconsImg + ' AnimeElement2'} />
                            </div>

                            <div className={styles.paraAlign}>


                                <div className='ContactAnimeStarts2'>
                                    <h4 className='py-4 AnimeElement2'>Phone & Email</h4>
                                </div>

                                <div className='ContactAnimeStarts2'>
                                    <p className='m-0 AnimeElement2'>info@vikasmantra.org</p>
                                </div>

                                <div className='ContactAnimeStarts2'>
                                    <p className='m-0 AnimeElement2'>
                                        <a href='tel:+91 - 7092 450 450'>+91 - 7092 450 450</a>
                                    </p>
                                </div>

                                <div className='ContactAnimeStarts2'>
                                    <p className='m-0 AnimeElement2'>
                                        <a href='tel:+91 - 8148 143 834'>+91 - 8148 143 834</a>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className={'col-md-4 position-relative ' + ' ' + styles.mobColPdng}>


                            <div className='ContactAnimeStarts3'>
                                <img src='/assets/icons/time.png' alt='image' className={styles.iconsImg + ' AnimeElement3'} />
                            </div>

                            <div className={styles.paraAlign}>

                                <div className='ContactAnimeStarts3'>
                                    <h4 className='py-4 AnimeElement3'>Office hours</h4>
                                </div>

                                <div className='ContactAnimeStarts3'>
                                    <p className='m-0 AnimeElement3'>Monday - Friday</p>
                                </div>

                                <div className='ContactAnimeStarts3'>
                                    <p className='mb-3 AnimeElement3'> 9.00 am - 4.00 pm</p>
                                </div>

                                <div className='ContactAnimeStarts3'>
                                    <p className='m-0 AnimeElement3'> Saturday</p>
                                </div>

                                <div className='ContactAnimeStarts3'>
                                    <p className='m-0 AnimeElement3'> 9.00 am - 1.00 pm</p>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact