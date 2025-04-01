// import styles from './style.module.css'
import { BlogDates } from "../../../../components/BlogDates/BlogDates";
import { Breadcrumb } from "../../../../components/Breadcrumb/Breadcrumb";

const Blog12 = () => {
  const pageTitle = "About";

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className="pt-4">
        <div className="container position-relative">
          <div className="row py-5">
            <div className="col-lg-6 col-md-10 AnimeStarts">
              <h2 className="AnimeElement">
                Celebrations at Vikas Mantra Public School: Nurturing Joy, Unity
                & Learning
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
                  At Vikas Mantra Public School, we believe that celebrations
                  are more than just festive occasions—they are essential to
                  building a joyful, inclusive, and dynamic learning
                  environment. While academics form the foundation of education,
                  it&apos;s through celebrations that students truly connect, grow,
                  and experience the richness of life beyond the classroom.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 position-relative AnimeStarts">
              <img
                src="/assets/blogs/blog-12.JPG"
                alt="image"
                className="BlogCntImg AnimeElement"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-12 ">
              <div className="AnimeStarts">
                <h4 className="AnimeElement">Celebrating Cultural Diversity</h4>

                <p className="AnimeElement">
                  Every celebration at VMPS is a beautiful reflection of our
                  culturally rich and diverse school community. These events
                  offer students the chance to actively participate in
                  traditions from different backgrounds, deepening their
                  understanding and respect for others. Whether it&apos;s a festival,
                  a national holiday, or a school-specific event, each
                  celebration becomes a bridge that brings cultures together and
                  strengthens our school&apos;s spirit of unity.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">Fostering a Sense of Belonging</h4>

                <p className="AnimeElement">
                  In the midst of academic schedules and daily routines,
                  celebrations provide a much-needed space for connection and
                  bonding. Be it through colorful decorations, collaborative
                  performances, or sharing festive meals, our students and
                  teachers come together as one community. These shared
                  experiences foster a sense of belonging, where every
                  individual feels seen, heard, and valued.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">Learning Through Experience</h4>

                <p className="AnimeElement">
                  Education at VMPS goes far beyond books and exams. Our
                  celebrations offer hands-on opportunities for students to
                  explore leadership, teamwork, event planning, and creative
                  expression. These moments serve as powerful lessons in
                  real-life skills that shape confident, responsible, and
                  capable individuals.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">
                  Creating Joyful School Memories
                </h4>

                <p className="AnimeElement">
                  There&apos;s a special kind of energy that fills the campus during
                  celebrations—an atmosphere of laughter, excitement, and
                  camaraderie. These joyful moments not only uplift the mood but
                  also play a vital role in nurturing emotional well-being. They
                  remind us all that learning can be joyful, and school can be a
                  place where happiness and growth go hand in hand.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">Championing Inclusion</h4>

                <p className="AnimeElement">
                  We ensure that every celebration is welcoming and inclusive,
                  so all students—regardless of background—can participate and
                  feel a sense of ownership. These shared events encourage
                  students to appreciate differences and find common ground,
                  strengthening the bonds within our school community.
                </p>
              </div>

              <div className="AnimeStarts">
                <p className="AnimeElement">
                  As we look back at the many wonderful celebrations we&apos;ve had
                  at Vikas Mantra Public School, we see more than just events—we
                  see moments of togetherness, learning, cultural exchange, and
                  lifelong memories in the making. These experiences play a key
                  role in shaping a vibrant and compassionate school culture,
                  where diversity is embraced and unity is celebrated every day.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">Conclusion</h4>

                <p className="AnimeElement">
                  In an age where academic success often takes center stage,
                  Vikas Mantra Public School stands apart with its holistic
                  approach to education. Here, we don&apos;t just nurture minds—we
                  nurture hearts. By prioritizing emotional well-being, cultural
                  appreciation, and joyful learning, we prepare our students to
                  face the world with confidence, compassion, and resilience.
                </p>

                <p className="AnimeElement">
                  Join us at Vikas Mantra Public School, Mahindra World
                  City—where every child is celebrated, every voice matters, and
                  every day is a step toward a brighter, more balanced future.
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
export default Blog12;
