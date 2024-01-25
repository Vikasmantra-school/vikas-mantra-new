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

                            <h2 className='AnimeElement'>Vikas Mantra Public School&apos;s Dedication to Supporting Emotional Health</h2>

                        </div>

                    </div>

                </div>

            </section>

            <section className='whitebg position-relative sectionContainer BlogvectorImg2 BlogvectorImg3'>

                <div className='container'>

                    <div className='row py-5 align-items-start '>

                        <div className='col-lg-6 col-md-12'>

                            <div className='AnimeStarts'>
                                

                                <p className='AnimeElement'>In the picturesque enclave of Mahindra World City, Vikas Mantra Public School stands as an educational sanctuary committed not only to academic excellence but, more importantly to the holistic development of each student&apos;s emotional well-being. In the bustling world of education, where the emphasis often leans towards grades and achievements, Vikas Mantra distinguishes itself by recognizing that emotional health is the cornerstone of a thriving and resilient individual.
                                </p>

                            </div>

                        </div>

                        <div className='col-lg-6 col-md-12 position-relative AnimeStarts'>

                            <img src='/assets/blogs/blog-5.png' alt="image" className='BlogCntImg AnimeElement' />

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

                                <h4 className='AnimeElement'>Creating a Supportive Environment:</h4>

                                <p className='AnimeElement'>Beyond the structured classrooms and academic pursuits, Vikas Mantra prides itself on cultivating an environment that acts as a second home for students. Our educators aren&apos;t just disseminators of knowledge but mentors who actively promote open communication and the creation of a supportive community within the school. It&apos;s within this atmosphere that students feel encouraged to express their emotions, fostering a sense of belonging and security.</p>

                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Mindful Engagement Approach:</h4>

                                <p className='AnimeElement'>Amid the academic hustle, Vikas Mantra prioritizes a continuous state of awareness within the classroom. This approach focuses more on engagement and encouragement to students to actively immerse themselves in each moment, facilitating focus on the present, self-awareness and sensitivity to their thoughts and surroundings.
                                </p>

                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Social-Emotional Learning (SEL) Programs:</h4>

                                <p className='AnimeElement'>Vikas Mantra understands that education extends beyond textbooks. Our commitment to nurturing emotionally intelligent individuals is evident in our Social-Emotional Learning (SEL) programs. These initiatives go beyond conventional education, equipping students with vital life skills such as self-awareness, self-regulation, empathy and effective communication. These skills form the foundation for navigating the intricacies of the modern world.
                                </p>

                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Professional Counseling Services:</h4>

                                <p className='AnimeElement'>Acknowledging the unique journey each student traverses, Vikas Mantra offers professional counseling services. Our trained counselors work closely with students, addressing personal challenges, fostering resilience and promoting emotional growth. Seeking help is not only encouraged but seen as a testament to strength and self-awareness, reinforcing the belief that emotional well-being is an essential aspect of personal development.
                                </p>

                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Extracurricular Activities Focused on Well-being:</h4>

                                <p className='AnimeElement'>Vikas Mantra firmly believes that education extends beyond the confines of traditional classrooms. Our diverse range of extracurricular activities, from art therapy to sports and music, is curated to enhance emotional well-being. These activities serve as creative outlets for self-expression, allowing students to explore their passions and build positive relationships outside the academic realm.
                                </p>

                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Conclusion</h4>

                                <p className='AnimeElement'>In a world where the pursuit of academic excellence often overshadows the importance of emotional health, Vikas Mantra Public School stands as a beacon of holistic education. With a commitment to nurturing hearts and minds, we empower our students with the resilience and emotional intelligence needed to confront life&apos;s challenges successfully. Join us on this transformative journey at Vikas Mantra Public School, Mahindra World City – where the well-being of every child is not just a priority but a fundamental aspect of education.
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