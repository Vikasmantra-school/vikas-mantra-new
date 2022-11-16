import styles from './style.module.css'
import BlogDates from '../../../../components/BlogDates/BlogDates'
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb'

const Blog2 = () => {

    const pageTitle = 'About'

    return (
        <>
            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row py-5'>

                        <div className='col-md-6'>

                            <h2>BENEFITS OF YOGA FOR SCHOOL STUDENTS</h2>

                        </div>

                    </div>

                </div>

            </section>

            <section className='whitebg position-relative sectionContainer BlogvectorImg2 BlogvectorImg3'>

                <div className='container'>

                    <div className='row py-5 align-items-start '>

                        <div className='col-md-6'>

                            {/* <img src='/assets/vectors/Vector1.png' alt="image" className={styles.BlogvectorImg2} /> */}

                            <p>The growing levels of competition have made children pursue a variety of fresh and interesting experiences. They have paved the way for a variety of programs, making students get exposed to a wide array of knowledge that inspires and pushes children to learn, grow, thrive, and succeed.
                            </p>

                            <p>But the truth is, children, in order to keep meeting the demands of the ever-changing and growing competition, tend to forget themselves and enjoy their childhood down the lane.
                            </p>

                        </div>

                        <div className='col-md-6 position-relative'>

                            <img src='/assets/blog2.png' alt="image" className='BlogCntImg'/>

                        </div>


                    </div>

                    <div className='row'>

                        <div className='col-md-8'>

                            <div>

                                <p>Despite being multi-talented, a vast majority of today’s children feel lonely, get quickly bored, isolate themselves, and lack curiosity and satisfaction. Most of the time, they either find themselves highly stressed and anxious or sad and depressed.</p>

                                <p>There is no doubt that technology and the latest innovation have provided many opportunities, regardless of the age group. But these have also made us disconnect from ourselves, snatching our natural ability to take time, ponder, introspect, and respond mindfully.</p>

                                <p>Now the most important question is, how and where should children strike the right balance? How do they learn to stay connected to their inner self while maintaining a sense of awareness of everything going on around them? This is where Yoga comes into the picture. Today, Yoga is recognized and practiced all over the world. Almost everyone knows the significance of practicing yoga, i.e., it not only looks after one’s physical health but also fosters emotional, mental, and spiritual well-being.</p>

                                <p>Unlike workouts that target only one single body part at a time, Yoga is a full-body workout that enhances the overall health and fitness of your body. Let’s have a look at some of the benefits of yoga for children.</p>



                                <h4>Flexibility</h4>

                                <p>Children are naturally flexible. When they practice Yoga regularly, they are able to retain and maintain their body flexibility throughout their lives unlike the rest of the people who tend to lose flexibility with their age. </p>

                                <h4>Self-Awareness</h4>

                                <p>Children who practice Yoga on a regular basis are more aware of themselves than those who don’t practice it. It helps children understand their bodies and connect with themselves. It helps children discover how various body parts coordinate with their breath and bring the entire system together. This heightened self-awareness helps them learn to appreciate, love, and care for their bodies.
                                </p>

                                <h4>Increased Immunity</h4>

                                <p>An immune system is extremely crucial for the survival of humans. It gets all the more essential for children as they are more susceptible to a variety of diseases and conditions. We all know a healthy foundation is the greatest key to a healthy future. Yoga is one of the greatest tools that naturally enhances the immune system, boosts resistance, and helps build a strong defense mechanism, thus helping the child be healthy and strong.
                                </p>

                                <h4>Improved Posture</h4>

                                <p>A lot of activities contribute to bad posture in children including obesity, reduced physical activity, video games, mobile phones, computers/ laptops, poor nutrition, heavy school bags, incorrect sitting position, etc. Practicing Yoga on a regular basis is one of the best ways to improve body posture. Regular practicing of it not only improves body posture but also improves blood circulation to the neck, back, and hip region.
                                </p>

                                <h4>Balance</h4>

                                <p>It teaches children to recognise, process, and deal with their feelings and emotions. This awareness is extremely important as it aids in the development of a balanced state of mind.</p>

                                <h4>Increased Focus & Concentration</h4>

                                <p>Today’s kids are hyperactive, restless, and lack patience compared to the children of the past. Practicing Yoga is one of the best ways to train oneself to be more mindful and patient. It teaches us to pay attention to each and every movement of the body. Regular practicing of yoga can calm down the minds of children and improve their focus, attention, and concentration levels.</p>

                            </div>

                        </div>

                        <div className='col-md-4'>

                            <BlogDates />

                        </div>


                    </div>

                </div>

            </section>

        </>
    )
}
export default Blog2;