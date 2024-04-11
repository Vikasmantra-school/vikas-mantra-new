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

                            <h2 className='AnimeElement'>DISCOVER YOUR CHILD’S PRIMARY LEARNING STYLE</h2>

                        </div>

                    </div>

                </div>

            </section>

            <section className='whitebg position-relative sectionContainer BlogvectorImg2 BlogvectorImg3'>

                <div className='container'>

                    <div className='row py-5 align-items-start '>

                        <div className='col-lg-6 col-md-12'>

                            <div className='AnimeStarts'>


                                <p className='AnimeElement'>According to research, every child is born with the ability to learn. But in the majority of cases, kids (and even adults) have a particular, individual learning style that changes throughout the course of their lives. A youngster can continue to learn in many different ways, but he or she will often favor one learning method over the others. For instance, whereas you might be able to spell a word just by seeing it, your child might not be able to recall the spelling of some words unless he or she first writes them down word by word to spell them. Yet, there is no such thing as a good or bad learning style in general. It&apos;s important to remember that parents&apos; techniques for determining primary learning styles may be very different from those of your child or even from those of other people. In the models listed below, determine your child&apos;s preferred method of learning.
                                </p>

                            </div>

                        </div>

                        <div className='col-lg-6 col-md-12 position-relative AnimeStarts'>

                            <img src='/assets/blogs/blog-7.png' alt="image" className='BlogCntImg AnimeElement' />

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

                                <h6 className='AnimeElement'>What is the VARK model ?</h6>

                                <p className='AnimeElement'>Visual, Auditory, Read/Write, and kinesthetic!</p>
                                <ul>
                                    <h5>1. Visual</h5>
                                    <li>Your child will become much more engaged with the arts. </li>
                                    <li>They exhibit a keen vision and knowledge of maps. </li>
                                    <li>Children might prefer to watch videos instead of reading. </li>
                                </ul>
                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Once you've determined whether your child learns best using visual methods, you can assist their preferred method of learning by offering them different study advice, like: </h4>

                                <ul>
                                    <li>Encourage them in studying notes using color </li>
                                    <li>Help them to create concept maps while studying or planning projects </li>
                                    <li>Constantly suggest watching informative videos or documentaries</li>
                                </ul>

                                <h5>2. Auditory</h5>
                                <ul>
                                    <li>They enjoy conversing and having discussions. </li>
                                    <li>They frequently sing along to songs or are passionate about music. </li>
                                    <li>They exhibit the ability to recognize sounds that others do not observe. </li>
                                </ul>
                            </div>

                            <div className='AnimeStarts'>

                                <h6 className='AnimeElement'>Once you&apos;ve determined whether your child learns best using auditory methods, you can assist their preferred method of learning by offering them different study advice, like: </h6>

                                <ul>
                                    <li>Teaching or explaining to a friend what they are learning </li>
                                    <li>Questioning and debating concepts</li>
                                    <li>Making a recording of a lesson to listen to later.</li>
                                </ul>

                                <h5>3. Read/Write</h5>

                                <ul>
                                    <li>They prefer reading the information displayed as words
                                    </li>
                                    <li>They enjoy text-based inputs and outputs</li>
                                    <li>Their go-to guide will be dictionaries, encyclopedias, quotations, journals, blogs, reports, PowerPoint, the Internet, and words.</li>
                                </ul>
                            </div>

                            <div className='AnimeStarts'>

                                <h6 className='AnimeElement'>Once you&apos;ve determined whether your child learns best using Read/Write methods, you can assist their preferred method of learning by offering them different study advice, like: </h6>

                                <ul>
                                    <li>Assisting your children with manuals, reports, and homework.</li>
                                    <li>Help them develop their passion by providing fresh essay and report writing topics.</li>
                                    <li>Make sure they read a lot of books.</li>
                                </ul>

                                 <h4>Kinesthetic</h4>
                                 <ul>
                                    <li>They prefer utilizing their practice and experience.</li>
                                    <li>Case studies, practicals, and applications are typically used to connect them to reality.</li>
                                    <li>Enjoying applied activities like painting, mechanics, sports, and artwork.</li>
                                 </ul>

                            </div>

                            <div className='AnimeStarts'>

                                <h4 className='AnimeElement'>Once you&apos;ve determined whether your child learns best using kinesthetic methods, you can assist their preferred method of learning by offering them different study advice, like: </h4>

                                <ul>
                                    <li>Urge them to use their own experiences to obtain knowledge and put it into practice.</li>
                                    <li>Utilize demonstrations and simulations in their study.</li>
                                    <li>Encourage them to watch more educational movies and videos.</li>
                                </ul>                              
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