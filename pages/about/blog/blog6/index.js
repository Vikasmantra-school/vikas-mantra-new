import styles from './style.module.css'
import { BlogDates } from '../../../../components/BlogDates/BlogDates'
import { Breadcrumb } from '../../../../components/Breadcrumb/Breadcrumb'

const Blog5 = () => {

    const pageTitle = 'About'

    return (
        <>
            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <div className='col-lg-6 col-md-10 AnimeStarts'>

                            <h2 className='AnimeElement'>Fostering Unity in Diversity: A Glimpse into Celebrations at VMPS</h2>

                        </div>

                    </div>

                </div>

            </section>

            <section className='whitebg position-relative sectionContainer BlogvectorImg2 BlogvectorImg3'>

                <div className='container'>

                    <div className='row py-5 align-items-start '>

                        <div className='col-lg-6 col-md-12'>

                            <div className='AnimeStarts'>
                                

                                <p className='AnimeElement'>At Vikas Mantra Public School, we believe that celebrations play a pivotal role in creating a vibrant and inclusive learning environment. Beyond the routine of classes and textbooks, the festivities at our school serve as opportunities for students to connect, learn and embrace the richness of our diverse community.
                                </p>

                            </div>

                        </div>

                        <div className='col-lg-6 col-md-12 position-relative AnimeStarts'>

                            <img src='/assets/blogs/blog-6.png' alt="image" className='BlogCntImg AnimeElement' />

                        </div>


                    </div>

                    <div className='row'>

                        <div className='col-lg-8 col-md-12 '>

                            {/* <div className='AnimeStarts'>

                                <p className='AnimeElement'>Despite being multi-talented, a vast majority of today’s children feel lonely, get quickly bored, isolate themselves, and lack curiosity and satisfaction. Most of the time, they either find themselves highly stressed and anxious or sad and depressed.</p>

                                <p className='AnimeElement'>There is no doubt that technology and the latest innovation have provided many opportunities, regardless of the age group. But these have also made us disconnect from ourselves, snatching our natural ability to take time, ponder, introspect, and respond mindfully.</p>

                                <p className='AnimeElement'>Now the most important question is, how and where should children strike the right balance? How do they learn to stay connected to their inner self while maintaining a sense of awareness of everything going on around them? This is where Yoga comes into the picture. Today, Yoga is recognized and practiced all over the world. Almost everyone knows the significance of practicing yoga, i.e., it not only looks after one’s physical health but also fosters emotional, mental, and spiritual well-being.</p>

                                <p className='AnimeElement'>Unlike workouts that target only one single body part at a time, Yoga is a full-body workout that enhances the overall health and fitness of your body. Let’s have a look at some of the benefits of yoga for children.</p>

                            </div> */}

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Embracing Cultural Harmony:</h4>

                                <p className='AnimeElement'>The varied celebrations at VMPS are a testament to the cultural diversity within our walls. These events provide a platform for students to not only observe but actively engage in different traditions, broadening their perspectives and fostering mutual respect. The vibrant array of customs and rituals becomes a shared experience that strengthens the cultural fabric of our school.</p>

                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Building a Sense of Belonging:</h4>

                                <p className='AnimeElement'>In the hustle and bustle of academic life, celebrations offer moments of unity and belonging. Whether it's through festive decorations, collaborative performances, or shared meals, students and staff come together to create a sense of community. These shared experiences contribute to a positive school culture where everyone feels valued and connected.
                                </p>

                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Learning Beyond Textbooks:</h4>

                                <p className='AnimeElement'>While our students excel academically, we recognize the importance of holistic education. Celebrations provide unique opportunities for experiential learning. From organizing events to participating in cultural activities, students develop essential life skills such as teamwork, leadership, and organization – skills that go beyond the traditional classroom setting.
                                </p>

                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Cultivating a Joyful Atmosphere:</h4>

                                <p className='AnimeElement'>The atmosphere during celebrations is charged with positivity and joy. Laughter, music, and the spirit of togetherness permeate the air, creating an environment conducive to both learning and personal growth. These moments of joy contribute to the overall well-being of our students and staff.
                                </p>

                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Promoting Inclusivity:</h4>

                                <p className='AnimeElement'>In our commitment to inclusivity, every celebration is designed to be accessible and enjoyable for all. Students from diverse backgrounds find common ground in shared festivities, fostering a sense of unity that transcends differences.
                                </p>

                                <p className='AnimeElement'>
                                As we reflect on the celebrations that have graced Vikas Mantra Public School, we see more than just events on the calendar. We see opportunities for cultural exchange, for building lasting friendships, and for nurturing a positive and dynamic learning community. These celebrations, whether big or small, are integral to the ethos of [Your School Name], where unity in diversity is not just a slogan but a lived experience.
                                </p>

                                <p className='AnimeElement'>
                                Here's to the many more celebrations that await, enriching our school community and creating memories that last a lifetime.s
                                </p>

                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Conclusion</h4>

                                <p className='AnimeElement'>In a world where the pursuit of academic excellence often overshadows the importance of emotional health, Vikas Mantra Public School stands as a beacon of holistic education. With a commitment to nurturing hearts and minds, we empower our students with the resilience and emotional intelligence needed to confront life's challenges successfully. Join us on this transformative journey at Vikas Mantra Public School, Mahindra World City – where the well-being of every child is not just a priority but a fundamental aspect of education.
                                </p>

                            </div>

                            
                        </div>

                        <div className='col-lg-4 col-md-8 '>

                            <BlogDates />

                        </div>


                    </div>

                </div>

            </section>

        </>
    )
}
export default Blog5;