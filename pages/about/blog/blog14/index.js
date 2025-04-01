// import styles from './style.module.css'
import { BlogDates } from "../../../../components/BlogDates/BlogDates";
import { Breadcrumb } from "../../../../components/Breadcrumb/Breadcrumb";

const Blog14 = () => {
  const pageTitle = "About";

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className="pt-4">
        <div className="container position-relative">
          <div className="row py-5">
            <div className="col-lg-6 col-md-10 AnimeStarts">
              <h2 className="AnimeElement">
                Experience the VMPS Difference: Where Learning Meets Excellence
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="whitebg position-relative sectionContainer BlogvectorImg2 BlogvectorImg3">
        <div className="container">
          <div className="row py-5 align-items-start ">
            <div className="col-lg-6 col-md-12">
              <div className="AnimeStarts">
                <p className="AnimeElement">
                  As the admission season approaches, so begins the important
                  journey of selecting the right school for your child. At Vikas
                  Mantra Public School, we offer more than just academics—we
                  offer a transformative educational journey. Discover what
                  makes VMPS the preferred choice for parents who seek a
                  balanced and forward-thinking education for their children.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 position-relative AnimeStarts">
              <img
                src="/assets/blogs/blog-14.JPG"
                alt="image"
                className="BlogCntImg AnimeElement"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-12 ">
              <div className="AnimeStarts">
                <p className="AnimeElement">
                  What makes us unique is our approach—a harmonious blend of
                  21st-century learning techniques and deep-rooted Indian
                  values. This fusion creates an inspiring environment where
                  students are encouraged to think independently, dream without
                  limits, and grow into well-rounded individuals who are
                  connected to both the modern world and their cultural
                  heritage.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">
                  World-Class Infrastructure That Fuels Learning
                </h4>

                <p className="AnimeElement">
                  At VMPS, we believe that a supportive environment plays a
                  crucial role in a child&apos;s learning journey. That&apos;s why we&apos;ve
                  invested in top-tier infrastructure to ensure every student
                  has access to the tools and spaces they need to excel.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">Modern Science Labs</h4>

                <p className="AnimeElement">
                  Our advanced science labs in physics, chemistry, and biology
                  allow students to experiment, observe, and understand
                  scientific concepts through hands-on experiences.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">Cutting-Edge Computer Labs</h4>

                <p className="AnimeElement">
                  Designed to promote digital literacy and tech-savviness, our
                  computer labs provide a safe space where students learn
                  coding, computing, and other vital digital skills.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">Creative Art Studio</h4>

                <p className="AnimeElement">
                  A dedicated zone for self-expression—our art studio is where
                  creativity takes form through painting, sculpting, and various
                  other artistic pursuits.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">Music & Dance Rooms</h4>

                <p className="AnimeElement">
                  These vibrant spaces allow students to explore rhythm, melody,
                  and movement, fostering a lifelong appreciation for the
                  performing arts.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">
                  A Library That Inspires Curiosity
                </h4>

                <p className="AnimeElement">
                  Our library is a quiet, resource-rich sanctuary for curious
                  minds. Stocked with a wide range of books, journals, digital
                  content, and reference material, it&apos;s a hub where students can
                  dive deep into subjects and expand their knowledge beyond
                  textbooks.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">Technology-Driven Classrooms</h4>

                <p className="AnimeElement">
                  Recognizing the importance of tech in today&apos;s world, VMPS
                  integrates smart tools into everyday learning. With
                  interactive teaching aids and access to the latest educational
                  software, we prepare our students for the digital age from an
                  early stage.
                </p>
              </div>
              <div className="AnimeStarts">
                <h4 className="AnimeElement">Safety First, Always</h4>

                <p className="AnimeElement">
                  We take our students&apos; safety seriously. From monitored campus
                  entry points to CCTV surveillance and well-trained staff,
                  every measure is taken to create a safe and secure environment
                  for worry-free learning.
                </p>
              </div>
              <div className="AnimeStarts">
                <h4 className="AnimeElement">On-Campus Healthcare Support</h4>

                <p className="AnimeElement">
                  A healthy student is a happy learner. That&apos;s why our campus is
                  equipped with a dedicated health center and trained medical
                  staff ready to respond swiftly to any health-related concerns
                  or emergencies.
                </p>
              </div>
              <div className="AnimeStarts">
                <h4 className="AnimeElement">
                  Reliable and Safe Transportation
                </h4>

                <p className="AnimeElement">
                  To make daily commuting smooth and secure, VMPS offers a
                  dependable transport system. Our fleet of buses is
                  well-maintained and operated by experienced drivers, ensuring
                  timely pick-up and drop-offs with complete safety.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">Why Choose VMPS?</h4>

                <p className="AnimeElement">
                  Selecting the right school is one of the most significant
                  decisions for a parent. At Vikas Mantra Public School, we go
                  beyond academic success—we focus on shaping future-ready
                  individuals with strong values, creativity, confidence, and
                  compassion.
                </p>
                <p className="AnimeElement">
                  We welcome you to explore our campus and offerings. Choose
                  VMPS—where your child&apos;s journey towards excellence truly
                  begins.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-8 ">
              <BlogDates />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog14;
