import styles from './style.module.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import React, { useEffect } from 'react'

const OurTeam = () => {


    const staffTeam = [
        { staffImage: '/assets/staffs/staff1.png', heading: 'Kirthika Manimaran', para: 'VP & HOD - English', ImgContainer: 'ImgContainer1' },
        { staffImage: '/assets/staffs/staff2.png', heading: 'Ms. Vidhya', para: 'Primary coordinator', ImgContainer: 'ImgContainer2' },
        { staffImage: '/assets/staffs/staff3.png', heading: 'Primary coordinator', para: 'HOD - Science', ImgContainer: 'ImgContainer3' },
        { staffImage: '/assets/staffs/staff4.png', heading: 'Raja Varadarajan', para: 'HOD - Maths', ImgContainer: 'ImgContainer4' },
        { staffImage: '/assets/staffs/staff5.png', heading: 'Shobana Kesavan', para: 'HOD - Computer Science', ImgContainer: 'ImgContainer5' },
        { staffImage: '/assets/staffs/staff6.png', heading: 'Sujatha Gangadharan', para: 'HOD - Tamil', ImgContainer: 'ImgContainer6' },
        { staffImage: '/assets/staffs/staff7.png', heading: 'Sumathi Elumalai', para: 'HOD - Physical Education', ImgContainer: 'ImgContainer7' },
        { staffImage: '/assets/staffs/staff8.png', heading: 'Ms. Maheshwari', para: 'Pre-Primary Coordinator', ImgContainer: 'ImgContainer8' },
        { staffImage: '/assets/staffs/staff9.png', heading: 'Vivek Sathyan', para: 'HOD - Dance', ImgContainer: 'ImgContainer9' },
        { staffImage: '/assets/staffs/staff10.png', heading: 'Kavitha Yadav', para: 'HOD - Hindi', ImgContainer: 'ImgContainer10' },
        { staffImage: '/assets/staffs/staff11.png', heading: 'Soundarrajan Venkatesan', para: 'HOD - Art & Craft', ImgContainer: 'ImgContainer11' },
    ];

    //lazy-load
    useEffect(() => {
        gsap.utils.toArray(".lazy").forEach(image => {

            let a = image.src.split("/"),
                newImage = document.createElement("img"),
                newSRC, loaded,
                loadImage = () => {
                    if (!loaded) {
                        a.length -= 2; // chop off the last two numbers
                        newSRC = a.join("/") + "/" + fullRes;
                        newImage.onload = () => {
                            newImage.onload = null; // avoid recursion
                            newImage.src = image.src; // swap the src
                            image.src = newSRC;
                            // place the low-res version on TOP and then fade it out.
                            gsap.set(newImage, {
                                position: "absolute",
                                top: image.offsetTop,
                                left: image.offsetLeft,
                                width: image.offsetWidth,
                                height: image.offsetHeight
                            });
                            image.parentNode.appendChild(newImage);
                            gsap.to(newImage, {
                                opacity: 0,
                                onComplete: () => newImage.parentNode.removeChild(newImage)
                            });
                            st && st.kill();
                        }
                        newImage.src = newSRC;
                        loaded = true;
                    }
                },
                st = ScrollTrigger.create({
                    trigger: image,
                    start: "-50% bottom",
                    onEnter: loadImage,
                    onEnterBack: loadImage // make sure it works in either direction
                });
        });

    },[])

    let fullRes = "1200/600"; // replace the final two values in the low-res URLs with these

    ScrollTrigger.config({ limitCallbacks: true });


    const pageTitle = 'About'
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

                                    <div className={item.ImgContainer + ' ImgContainer'}>

                                        <img src={item.staffImage} alt='image' className={styles.staffImg + ' img-fluid lazy '} />

                                        <h6 className='pt-4 text-center fw-bold '>{item.heading}</h6>

                                        <p className='text-center pb-2'>{item.para}</p>

                                    </div>

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