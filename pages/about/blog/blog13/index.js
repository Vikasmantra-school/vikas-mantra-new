// import styles from './style.module.css'
import { BlogDates } from "../../../../components/BlogDates/BlogDates";
import { Breadcrumb } from "../../../../components/Breadcrumb/Breadcrumb";

const Blog13 = () => {
  const pageTitle = "About";

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className="pt-4">
        <div className="container position-relative">
          <div className="row py-5">
            <div className="col-lg-6 col-md-10 AnimeStarts">
              <h2 className="AnimeElement">
                Discover Your Child&apos;s Unique Learning Style
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
                  Every child is born with the ability to learn. However, the
                  way each child learns best can differ greatly—and
                  understanding this can make a big difference in their academic
                  and personal growth. While children are capable of learning
                  through various methods, most tend to lean towards one
                  particular style that feels more natural and effective for
                  them.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 position-relative AnimeStarts">
              <img
                src="/assets/blogs/blog-13.jpg"
                alt="image"
                className="BlogCntImg AnimeElement"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 col-md-12 ">
              <div className="AnimeStarts">
                <p className="AnimeElement">
                  As a parent, identifying your child&apos;s primary learning style
                  helps you support them more effectively at home. One helpful
                  model to understand this is the VARK model, which outlines
                  four main learning styles:
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">What is the VARK Model?</h4>

                <p className="AnimeElement">
                  VARK stands for Visual, Auditory, Read/Write, and
                  Kinesthetic—four primary learning styles that help explain how
                  children absorb and retain information.
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">1. Visual Learners</h4>

                <p className="AnimeElement">
                  These children understand information best when it&apos;s presented
                  visually.
                </p>
                <p className="AnimeElement">Common traits:</p>
                <p className="AnimeElement">
                  ● Love drawing, painting, and creative expression
                </p>
                <p className="AnimeElement">
                  ● Have a strong sense of direction and enjoy looking at maps
                </p>
                <p className="AnimeElement">How to support them:</p>
                <p className="AnimeElement">
                  ● Use colorful notes, diagrams, and mind maps
                </p>
                <p className="AnimeElement">
                  ● Suggest educational videos and documentaries
                </p>
                <p className="AnimeElement">
                  ● Encourage the use of charts and visual aids while studying
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">2. Auditory Learners</h4>

                <p className="AnimeElement">
                  These children absorb information better through listening and
                  speaking.
                </p>
                <p className="AnimeElement">Common traits:</p>
                <p className="AnimeElement">
                  ● Enjoy conversations and group discussions
                </p>
                <p className="AnimeElement">
                  ● Are often drawn to music and may memorize lyrics easily
                </p>
                <p className="AnimeElement">
                  ● Notice subtle sounds or tones that others may not
                </p>
                <p className="AnimeElement">How to support them:</p>
                <p className="AnimeElement">
                  ● Let them teach or explain lessons to others
                </p>
                <p className="AnimeElement">
                  ● Use discussions or debates to explore concepts
                </p>
                <p className="AnimeElement">
                  ● Encourage them to record and listen to lessons or study
                  notes
                </p>
              </div>

              <div className="AnimeStarts">
                <h4 className="AnimeElement">3. Read/Write Learners</h4>

                <p className="AnimeElement">
                  These children learn best through reading and writing
                  activities.
                </p>
                <p className="AnimeElement">Common traits:</p>
                <p className="AnimeElement">
                  ● Prefer information presented in written words
                </p>
                <p className="AnimeElement">
                  ● Enjoy reading books, articles, and reports
                </p>
                <p className="AnimeElement">
                  ● Gravitate toward journals, dictionaries, and online reading
                </p>
                <p className="AnimeElement">How to support them:</p>
                <p className="AnimeElement">
                  ● Provide a variety of books and writing materials
                </p>
                <p className="AnimeElement">
                  ● Offer writing prompts or encourage essay/report writing
                </p>
                <p className="AnimeElement">
                  ● Help them take notes, make lists, and rewrite key concepts
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
export default Blog13;
