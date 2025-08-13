import styles from "./style.module.css";
import Link from "next/link";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb";
const Blog = () => {
  const pageTitle = "About";

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className="pt-4">
        <div className="container position-relative">
          <div className={"row py-5"}>
            <div className="AnimeStarts">
              <h2 className="AnimeElement">Blog</h2>
            </div>
          </div>
        </div>
      </section>
      {/*  2025*/}
      
      <section
        className={
          " whitebg position-relative py-5 " +
          styles.vectorImg3 +
          " " +
          styles.sectionContainer
        }>
        <div className="container">
          <div className={"row p-4 align-items-center " + styles.rowBox}>
            <div className={"col-lg-6 col-md-12 position-relative "}>
              <div
                className={
                  " pastelBlue4 imgBgColorBlog2 AnimeStarts " + styles.order1
                }>
                <img
                  src="/assets/blogs/blog-11.JPG"
                  alt="image"
                  className={styles.Blog2Img + " AnimeElement"}
                />
              </div>
            </div>

            <div className={"col-lg-6 col-md-12 " + styles.colPdng2}>
              <div className={"AnimeStarts " + styles.order3}>
                <h3 className="ulineRed AnimeElement">
                Nurturing Balance Through Yoga: A Path to Inner and Outer Growth
                </h3>
              </div>

              <div className={"AnimeStarts " + styles.order2}>
                <p className="pt-5 AnimeElement">
                In today&apos;s fast-paced and competitive world, children are constantly exposed to new experiences and learning opportunities. While this opens up exciting avenues for exploration and growth, it also places immense pressure on young minds to constantly perform and keep …
                </p>

                <Link href="/about/blog/blog11">
                  <button className="btn outlineBtn AnimeElement">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        className={
          " whitebg position-relative pt-2 pb-5 " + " " + styles.vectorImg2
        }>
        <div className="container">
          <div className={"row p-4 align-items-center " + styles.rowBox}>
            <div
              className={
                "col-lg-6 col-md-12 " + styles.colPdng1 + " " + styles.order2
              }>
              <div className="AnimeStarts">
                <h3 className="ulineRed AnimeElement">
                Celebrations at Vikas Mantra Public School: Nurturing Joy, Unity & Learning
                </h3>
              </div>

              <div className="AnimeStarts">
                <p className="pt-5 AnimeElement">
                At Vikas Mantra Public School, we believe that celebrations are more than just festive occasions—they are essential to building a joyful, inclusive, and dynamic learning environment. While academics form the foundation of education, it&apos;s through celebrations that students truly connect, grow, and experience the richness of life beyo…
                </p>

                <Link href="/about/blog/blog12">
                  <button className="btn outlineBtn AnimeElement">
                    Know More
                  </button>
                </Link>
              </div>
            </div>

            <div
              className={
                "col-lg-6 col-md-12 position-relative " + styles.order1
              }>
              <div className={"imgBgColorBlog1 pastelGreen4 AnimeStarts"}>
                <img
                  src="/assets/blogs/blog-12.JPG"
                  alt="image"
                  className={styles.Blog1Img + " AnimeElement"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        className={
          " whitebg position-relative py-5 " +
          styles.vectorImg3 +
          " " +
          styles.sectionContainer
        }>
        <div className="container">
          <div className={"row p-4 align-items-center " + styles.rowBox}>
            <div className={"col-lg-6 col-md-12 position-relative "}>
              <div
                className={
                  " pastelBlue4 imgBgColorBlog2 AnimeStarts " + styles.order1
                }>
                <img
                  src="/assets/blogs/blog-13.JPG"
                  alt="image"
                  className={styles.Blog2Img + " AnimeElement"}
                />
              </div>
            </div>

            <div className={"col-lg-6 col-md-12 " + styles.colPdng2}>
              <div className={"AnimeStarts " + styles.order3}>
                <h3 className="ulineRed AnimeElement">
                Discover Your Child&apos;s Unique Learning Style
                </h3>
              </div>

              <div className={"AnimeStarts " + styles.order2}>
                <p className="pt-5 AnimeElement">
                Every child is born with the ability to learn. However, the way each child learns best can differ greatly—and understanding this can make a big difference in their academic and personal growth. While children are capable of learning through various methods, most tend to lean towards one particular style that feels more natural and effective  …
                </p>

                <Link href="/about/blog/blog13">
                  <button className="btn outlineBtn AnimeElement">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          " whitebg position-relative pt-2 pb-5 " + " " + styles.vectorImg2
        }>
        <div className="container">
          <div className={"row p-4 align-items-center " + styles.rowBox}>
            <div
              className={
                "col-lg-6 col-md-12 " + styles.colPdng1 + " " + styles.order2
              }>
              <div className="AnimeStarts">
                <h3 className="ulineRed AnimeElement">
                Experience the VMPS Difference: Where Learning Meets Excellence
                </h3>
              </div>

              <div className="AnimeStarts">
                <p className="pt-5 AnimeElement">
                As the admission season approaches, so begins the important journey of selecting the right school for your child. At Vikas Mantra Public School, we offer more than just academics—we offer a transformative educational journey. Discover what makes VMPS the preferred choice for parents who seek a balanced and forward-thinking education  …
                </p>

                <Link href="/about/blog/blog14">
                  <button className="btn outlineBtn AnimeElement">
                    Know More
                  </button>
                </Link>
              </div>
            </div>

            <div
              className={
                "col-lg-6 col-md-12 position-relative " + styles.order1
              }>
              <div className={"imgBgColorBlog1 pastelGreen4 AnimeStarts"}>
                <img
                  src="/assets/blogs/blog-14.JPG"
                  alt="image"
                  className={styles.Blog1Img + " AnimeElement"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2025 ends */}

      <section
        className={
          " whitebg position-relative py-5 " +
          styles.vectorImg3 +
          " " +
          styles.sectionContainer
        }>
        <div className="container">
          <div className={"row p-4 align-items-center " + styles.rowBox}>
            <div className={"col-lg-6 col-md-12 position-relative "}>
              <div
                className={
                  " pastelBlue4 imgBgColorBlog2 AnimeStarts " + styles.order1
                }>
                <img
                  src="/assets/blogs/blog-10.png"
                  alt="image"
                  className={styles.Blog2Img + " AnimeElement"}
                />
              </div>
            </div>

            <div className={"col-lg-6 col-md-12 " + styles.colPdng2}>
              <div className={"AnimeStarts " + styles.order3}>
                <h3 className="ulineRed AnimeElement">
                  The Vital Role of Exercise in Student Development
                </h3>
              </div>

              <div className={"AnimeStarts " + styles.order2}>
                <p className="pt-5 AnimeElement">
                  Physical exercise is not merely a pathway to fitness; it is a
                  cornerstone of holistic development, especially for students.
                  At Vikas Mantra, we believe that a comprehensive approach to
                  education intertwines intellectual learning with physical
                  vitality, fostering well-rounded growth that extends beyond
                  academics …
                </p>

                <Link href="/about/blog/blog10">
                  <button className="btn outlineBtn AnimeElement">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          " whitebg position-relative pt-2 pb-5 " + " " + styles.vectorImg2
        }>
        <div className="container">
          <div className={"row p-4 align-items-center " + styles.rowBox}>
            <div
              className={
                "col-lg-6 col-md-12 " + styles.colPdng1 + " " + styles.order2
              }>
              <div className="AnimeStarts">
                <h3 className="ulineRed AnimeElement">
                  TEACHING ECO-FRIENDLY PRACTICES TO CHILDREN
                </h3>
              </div>

              <div className="AnimeStarts">
                <p className="pt-5 AnimeElement">
                  Teaching our children the value of making eco-friendly
                  decisions in their everyday lives can be difficult in a
                  culture that promotes mass consumption. But it&apos;s more
                  important than ever today to bring up ecologically conscious
                  kids. Here we bring to you a few yet effective eco-friendly
                  practices you can start …
                </p>

                <Link href="/about/blog/blog1">
                  <button className="btn outlineBtn AnimeElement">
                    Know More
                  </button>
                </Link>
              </div>
            </div>

            <div
              className={
                "col-lg-6 col-md-12 position-relative " + styles.order1
              }>
              <div className={"imgBgColorBlog1 pastelGreen4 AnimeStarts"}>
                <img
                  src="/assets/blogs/blog1.png"
                  alt="image"
                  className={styles.Blog1Img + " AnimeElement"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={' whitebg position-relative py-5 ' + styles.vectorImg3 + ' ' + styles.sectionContainer} >

                <div className='container'>

                    <div className={'row p-4 align-items-center ' + styles.rowBox}>

                        <div className={'col-lg-6 col-md-12 position-relative '}>

                            <div className={' pastelBlue4 imgBgColorBlog2 AnimeStarts ' + styles.order1}>

                                <img src='/assets/blogs/blog2.png' alt="image" className={styles.Blog2Img + ' AnimeElement'} />

                            </div>

                        </div>

                        <div className={'col-lg-6 col-md-12 ' + styles.colPdng2}>

                            <div className={'AnimeStarts ' + styles.order3}>
                                <h3 className='ulineRed AnimeElement'>BENEFITS OF YOGA FOR SCHOOL STUDENTS</h3>
                            </div>

                            <div className={'AnimeStarts ' + styles.order2}>
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

            </section> */}

      {/* sep */}
      {/* <section className={' whitebg position-relative pt-2 pb-5 ' + ' ' + styles.vectorImg2}>

                <div className='container'>

                    <div className={'row p-4 align-items-center ' + styles.rowBox}>

                        <div className={'col-lg-6 col-md-12 ' + styles.colPdng1 + ' ' + styles.order2}>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>Experience Excellence at Vikas Mantra Public School: Your Child&apos;s Educational Journey</h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'>Teaching our children the value of making eco-friendly
                                    decisions in their everyday lives can be difficult in
                                    a culture that promotes mass consumption. But it&apos;s more
                                    important than ever today to bring up ecologically
                                    conscious kids. Here we bring to you a few yet effective
                                    eco-friendly practices you can …</p>

                                <Link href='/about/blog/blog3'><button className='btn outlineBtn AnimeElement'>Know More</button></Link>
                            </div>

                        </div>

                        <div className={'col-lg-6 col-md-12 position-relative ' + styles.order1}>

                            <div className={'imgBgColorBlog1 pastelGreen4 AnimeStarts'}>

                                <img src='/assets/blogs/blog-3.png' alt="image" className={styles.Blog1Img + ' AnimeElement'} />

                            </div>

                        </div>

                    </div>

                </div>

            </section> */}

      {/* oct */}
      <section
        className={
          " whitebg position-relative py-5 " +
          styles.vectorImg3 +
          " " +
          styles.sectionContainer
        }>
        <div className="container">
          <div className={"row p-4 align-items-center " + styles.rowBox}>
            <div className={"col-lg-6 col-md-12 position-relative "}>
              <div
                className={
                  " pastelBlue4 imgBgColorBlog2 AnimeStarts " + styles.order1
                }>
                <img
                  src="/assets/blogs/blog-6.png"
                  alt="image"
                  className={styles.Blog2Img + " AnimeElement"}
                />
              </div>
            </div>

            <div className={"col-lg-6 col-md-12 " + styles.colPdng2}>
              <div className={"AnimeStarts " + styles.order3}>
                <h3 className="ulineRed AnimeElement">
                  Mastering Competition: Key Strategies and Mindset Essentials
                </h3>
              </div>

              <div className={"AnimeStarts " + styles.order2}>
                <p className="pt-5 AnimeElement">
                  In a world driven by achievement, competition is a constant
                  companion in both personal and professional spheres. Whether
                  you&apos;re striving for academic excellence, aiming to
                  outperform competitors in business, or pursuing your passions,
                  understanding the dynamics of competition and cultivating the
                  right mindset are essential. This blog delves into competition
                  tips and crucial factors to keep in mind for success in any
                  competitive arena.
                </p>

                <Link href="/about/blog/blog4">
                  <button className="btn outlineBtn AnimeElement">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* nov */}
      <section
        className={
          " whitebg position-relative pt-2 pb-5 " + " " + styles.vectorImg2
        }>
        <div className="container">
          <div className={"row p-4 align-items-center " + styles.rowBox}>
            <div
              className={
                "col-lg-6 col-md-12 " + styles.colPdng1 + " " + styles.order2
              }>
              <div className="AnimeStarts">
                <h3 className="ulineRed AnimeElement">
                  Vikas Mantra Public School&apos;s Dedication to Supporting
                  Emotional Health
                </h3>
              </div>

              <div className="AnimeStarts">
                <p className="pt-5 AnimeElement">
                  In the picturesque enclave of Mahindra World City, Vikas
                  Mantra Public School stands as an educational sanctuary
                  committed not only to academic excellence but, more
                  importantly to the holistic development of each student&apos;s
                  emotional well-being. In the bustling world of education,
                  where the emphasis often leans towards grades and
                  achievements, Vikas Mantra distinguishes itself by recognizing
                  that emotional health is the cornerstone of a thriving and
                  resilient individual.
                </p>

                <Link href="/about/blog/blog5">
                  <button className="btn outlineBtn AnimeElement">
                    Know More
                  </button>
                </Link>
              </div>
            </div>

            <div
              className={
                "col-lg-6 col-md-12 position-relative " + styles.order1
              }>
              <div className={"imgBgColorBlog1 pastelGreen4 AnimeStarts"}>
                <img
                  src="/assets/blogs/blog-5.png"
                  alt="image"
                  className={styles.Blog1Img + " AnimeElement"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* dec */}
      {/* <section className={' whitebg position-relative py-5 ' + styles.vectorImg3 + ' ' + styles.sectionContainer} >

                <div className='container'>

                    <div className={'row p-4 align-items-center ' + styles.rowBox}>

                        <div className={'col-lg-6 col-md-12 position-relative '}>

                            <div className={' pastelBlue4 imgBgColorBlog2 AnimeStarts ' + styles.order1}>

                                <img src='/assets/blogs/blog-4.png' alt="image" className={styles.Blog2Img + ' AnimeElement'} />

                            </div>

                        </div>

                        <div className={'col-lg-6 col-md-12 ' + styles.colPdng2}>

                            <div className={'AnimeStarts ' + styles.order3}>
                                <h3 className='ulineRed AnimeElement'>Fostering Unity in Diversity: A Glimpse into Celebrations at VMPS</h3>
                            </div>

                            <div className={'AnimeStarts ' + styles.order2}>
                                <p className='pt-5 AnimeElement'>At Vikas Mantra Public School, we believe that celebrations play a pivotal role in creating a vibrant and inclusive learning environment. Beyond the routine of classes and textbooks, the festivities at our school serve as opportunities for students to connect, learn and embrace the richness of our diverse community.</p>

                                <Link href='/about/blog/blog6'><button className='btn outlineBtn AnimeElement'>Know More</button></Link>
                            </div>

                        </div>

                    </div>

                </div>

            </section> */}

      {/* jan */}
      {/* <section className={' whitebg position-relative pt-2 pb-5 ' + ' ' + styles.vectorImg2}>

                <div className='container'>

                    <div className={'row p-4 align-items-center ' + styles.rowBox}>

                        <div className={'col-lg-6 col-md-12 ' + styles.colPdng1 + ' ' + styles.order2}>

                            <div className='AnimeStarts'>
                                <h3 className='ulineRed AnimeElement'>DISCOVER YOUR CHILD&apos;S PRIMARY LEARNING STYLE</h3>
                            </div>

                            <div className='AnimeStarts'>
                                <p className='pt-5 AnimeElement'>According to research, every child is born with the ability to learn. But in the majority of cases, kids (and even adults) have a particular, individual learning style that changes throughout the course of their lives. A youngster can continue to learn in many different ways, but he or she will often favor one learning method over the others. For instance, whereas you might be able to spell a word just by seeing it, your child might not be able to recall the spelling of some words unless he or she first writes them down word by word to spell them. </p>

                                <Link href='/about/blog/blog7'><button className='btn outlineBtn AnimeElement'>Know More</button></Link>
                            </div>

                        </div>

                        <div className={'col-lg-6 col-md-12 position-relative ' + styles.order1}>

                            <div className={'imgBgColorBlog1 pastelGreen4 AnimeStarts'}>

                                <img src='/assets/blogs/blog-7.png' alt="image" className={styles.Blog1Img + ' AnimeElement'} />

                            </div>

                        </div>

                    </div>

                </div>

            </section> */}

      {/* feb */}
      <section
        className={
          " whitebg position-relative py-5 " +
          styles.vectorImg3 +
          " " +
          styles.sectionContainer
        }>
        <div className="container">
          <div className={"row p-4 align-items-center " + styles.rowBox}>
            <div className={"col-lg-6 col-md-12 position-relative "}>
              <div
                className={
                  " pastelBlue4 imgBgColorBlog2 AnimeStarts " + styles.order1
                }>
                <img
                  src="/assets/blogs/blog-8.png"
                  alt="image"
                  className={styles.Blog2Img + " AnimeElement"}
                />
              </div>
            </div>

            <div className={"col-lg-6 col-md-12 " + styles.colPdng2}>
              <div className={"AnimeStarts " + styles.order3}>
                <h3 className="ulineRed AnimeElement">
                  Parenting Queries: Tackling Common Concerns with Your Child
                </h3>
              </div>

              <div className={"AnimeStarts " + styles.order2}>
                <p className="pt-5 AnimeElement">
                  Parenting is a rewarding yet challenging journey filled with
                  ups and downs. As parents, it&apos;s natural to encounter
                  various dilemmas and uncertainties when it comes to raising
                  our children. In this blog post, we address common questions
                  and concerns that parents may have and provide practical
                  solutions to help navigate the complexities of parenting and
                  strengthen the bond with your child.
                </p>

                <Link href="/about/blog/blog8">
                  <button className="btn outlineBtn AnimeElement">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mar */}
      <section
        className={
          " whitebg position-relative pt-2 pb-5 " + " " + styles.vectorImg2
        }>
        <div className="container">
          <div className={"row p-4 align-items-center " + styles.rowBox}>
            <div
              className={
                "col-lg-6 col-md-12 " + styles.colPdng1 + " " + styles.order2
              }>
              <div className="AnimeStarts">
                <h3 className="ulineRed AnimeElement">
                  The Importance of Summer Camp:{" "}
                </h3>
              </div>

              <div className="AnimeStarts">
                <p className="pt-5 AnimeElement">
                  As the temperatures rise and the school year draws to a close,
                  parents may find themselves pondering how best to keep their
                  children engaged and entertained during the long summer break.
                  In today&apos;s fast-paced world, where screens often dominate
                  free time, the traditional summer camp experience holds more
                  value than ever before. At Vikas Mantra Public School in
                  Chengalpattu, we understand the significance of summer camp in
                  nurturing holistic development and fostering lifelong skills
                  in children.
                </p>

                <Link href="/about/blog/blog9">
                  <button className="btn outlineBtn AnimeElement">
                    Know More
                  </button>
                </Link>
              </div>
            </div>

            <div
              className={
                "col-lg-6 col-md-12 position-relative " + styles.order1
              }>
              <div className={"imgBgColorBlog1 pastelGreen4 AnimeStarts"}>
                <img
                  src="/assets/blogs/blog-9.png"
                  alt="image"
                  className={styles.Blog1Img + " AnimeElement"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
