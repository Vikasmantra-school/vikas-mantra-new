// import styles from './style.module.css'
import { BlogDates } from "../../../../components/BlogDates/BlogDates";
import { Breadcrumb } from "../../../../components/Breadcrumb/Breadcrumb";

const Blog11 = () => {
  const pageTitle = "About";

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className="pt-4">
        <div className="container position-relative">
          <div className="row py-5">
            <div className="col-lg-6 col-md-10 AnimeStarts">
              <h2 className="AnimeElement">
                Nurturing Balance Through Yoga: A Path to Inner and Outer Growth
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
                  In today&apos;s fast-paced and competitive world, children are
                  constantly exposed to new experiences and learning
                  opportunities. While this opens up exciting avenues for
                  exploration and growth, it also places immense pressure on
                  young minds to constantly perform and keep up.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 position-relative AnimeStarts">
              <img
                src="/assets/blogs/blog-11.JPG"
                alt="image"
                className="BlogCntImg AnimeElement"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-12 ">
              <div className="AnimeStarts">
                <p className="AnimeElement">
                  At Vikas Mantra Public School, we recognize that in the race
                  to succeed, children often miss out on the essence of their
                  childhood—the joy of simply being in the moment.
                </p>
              </div>

              <div className="AnimeStarts">
                <p className="AnimeElement">
                  Despite their many talents, a growing number of children today
                  experience feelings of loneliness, boredom, and disconnection.
                  They may struggle with anxiety, lack of curiosity, and
                  emotional fatigue. While modern technology has broadened
                  access to knowledge and convenience, it has also distanced us
                  from self-awareness and the ability to pause, reflect, and
                  respond with mindfulness.
                </p>
              </div>

              <div className="AnimeStarts">
                <p className="AnimeElement">
                  This raises an important question: how can children stay in
                  touch with their inner selves while thriving in a dynamic,
                  ever-changing world?
                </p>
              </div>

              <div className="AnimeStarts">
                <p className="AnimeElement">
                  The answer lies in Yoga—a practice deeply rooted in harmony
                  and balance. Recognized globally for its holistic benefits,
                  yoga nurtures the physical, mental, emotional, and spiritual
                  well-being of an individual.
                </p>
              </div>

              <div className="AnimeStarts">
                <p className="AnimeElement">
                  Unlike typical exercises that target specific body parts, yoga
                  offers a full-body experience that promotes overall health and
                  balance. Here&apos;s how yoga can benefit children:
                </p>
              </div>

              <div className="AnimeStarts">
                <p className="AnimeElement">
                  1. Flexibility for Life Children are naturally flexible, and
                  with regular yoga practice, they can preserve this flexibility
                  well into adulthood. It helps keep their muscles supple and
                  joints healthy, allowing for free and confident movement.
                </p>
              </div>

              <div className="AnimeStarts">
                <p className="AnimeElement">
                  2. Building Self-Awareness Yoga encourages children to tune
                  into their bodies and emotions. By focusing on breath and
                  movement, they develop a deeper understanding of how their
                  body functions and how it connects to their thoughts and
                  feelings. This self-awareness lays the foundation for
                  self-love and acceptance.
                </p>
              </div>
              <div className="AnimeStarts">
                <p className="AnimeElement">
                  3. Strengthening Immunity A strong immune system is vital,
                  especially for children who are still developing. Yoga helps
                  boost immunity naturally, equipping their bodies to resist
                  illnesses and build long-term health.
                </p>
              </div>
              <div className="AnimeStarts">
                <p className="AnimeElement">
                  4. Correcting Posture Poor posture has become increasingly
                  common due to screen time, heavy school bags, and sedentary
                  habits. Yoga helps realign the spine, strengthen muscles, and
                  improve overall posture—while also enhancing blood flow and
                  reducing physical discomfort.
                </p>
              </div>
              <div className="AnimeStarts">
                <p className="AnimeElement">
                  5.Improving Focus and Concentration In a world full of
                  distractions, yoga helps children train their minds to stay
                  present. It enhances concentration, sharpens memory, and
                  develops mindfulness—skills that are essential in both studies
                  and life.
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
export default Blog11;
