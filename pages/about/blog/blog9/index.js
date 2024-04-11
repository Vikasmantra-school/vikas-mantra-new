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

                            <h2 className='AnimeElement'>The Importance of Summer Camp: </h2>

                        </div>

                    </div>

                </div>

            </section>

            <section className='whitebg position-relative sectionContainer BlogvectorImg2 BlogvectorImg3'>

                <div className='container'>

                    <div className='row py-5 align-items-start '>

                        <div className='col-lg-6 col-md-12'>

                            <div className='AnimeStarts'>
                                

                                <p className='AnimeElement'>As the temperatures rise and the school year draws to a close, parents may find themselves pondering how best to keep their children engaged and entertained during the long summer break. In today&apos;s fast-paced world, where screens often dominate free time, the traditional summer camp experience holds more value than ever before. At Vikas Mantra Public School in Chengalpattu, we understand the significance of summer camp in nurturing holistic development and fostering lifelong skills in children.
                                </p>

                            </div>

                        </div>

                        <div className='col-lg-6 col-md-12 position-relative AnimeStarts'>

                            <img src='/assets/blogs/blog-9.png' alt="image" className='BlogCntImg AnimeElement' />

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

                                <p className='AnimeElement'>Summer camp offers a unique opportunity for children to break away from their routine, explore new interests, and develop essential life skills in a supportive and enriching environment. Here are some compelling reasons why summer camp is important:</p>

                                <ul>
                                    <li><b>Social Development: </b>
                                    Summer camp provides children with the chance to make new friends, interact with peers from diverse backgrounds, and learn valuable social skills such as teamwork, communication, and cooperation. Through shared experiences and collaborative activities, campers build lasting friendships and develop a sense of belonging.
                                    </li>

                                    <li><b>Personal Growth: </b>
                                    Camp encourages children to step out of their comfort zones, take on new challenges, and discover their strengths and abilities. Whether it&apos;s conquering a high ropes course, performing in a talent show, or learning a new hobby, campers gain confidence, resilience, and a sense of accomplishment that extends beyond the campfire.
                                    </li>

                                    <li><b>Physical Activity:  </b>
                                    In today&apos;s digital age, where sedentary lifestyles are prevalent, summer camp offers a welcome opportunity for children to unplug and engage in physical activity. From outdoor adventures like hiking, swimming, and sports to creative pursuits like dance, yoga, and arts and crafts, camp provides ample opportunities for children to stay active, healthy, and energized.
                                    </li>

                                    <li><b>Nature Connection:  </b>
                                    Camp allows children to reconnect with nature, explore the great outdoors, and develop a deeper appreciation for the natural world. Whether it&apos;s roasting marshmallows around a campfire, stargazing under the night sky, or embarking on nature hikes and wildlife explorations, campers develop a sense of environmental stewardship and conservation ethics.
                                    </li>

                                    <li><b>Life Skills:  </b>
                                    Summer camp equips children with practical life skills that extend beyond the classroom. From problem-solving and decision-making to leadership and resilience, campers learn valuable skills that prepare them for success in school, career, and life.
                                    </li>
                                </ul>
                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Mindful Engagement Approach:</h4>

                                <p className='AnimeElement'>Amid the academic hustle, Vikas Mantra prioritizes a continuous state of awareness within the classroom. This approach focuses more on engagement and encouragement to students to actively immerse themselves in each moment, facilitating focus on the present, self-awareness and sensitivity to their thoughts and surroundings.
                                </p>

                            </div>


                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Conclusion</h4>

                                <p className='AnimeElement'>At Vikas Mantra Public School, we recognize the importance of summer camp in shaping well-rounded individuals and nurturing future leaders. That&apos;s why we host our annual summer camp every year, offering a diverse range of enriching activities and experiences for children of all ages. This year, our summer camp will be held from April 25th to May 11th, providing two weeks of fun-filled learning and adventure. Contact us today to learn more about our summer camp offerings and give your child the gift of a memorable summer experience.
                                </p>

                                <p className='AnimeElement'>Remember, the memories made at summer camp last a lifetime, and the lessons learned extend far beyond the summer months. So why wait? Enroll your child in summer camp today and watch them thrive!
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