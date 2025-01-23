import styles from "./style.module.css";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb";

const MessageFromChairAdvisor = () => {
  const pageTitle = "About";

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className="pt-4">
        <div className="container position-relative">
          <div className={"row py-5"}>
            <div className="col-md-6">
              <div className="AnimeStarts">
                <h2 className="AnimeElement">Know about our Advisor</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          styles.sectionContainer +
          " whitebg position-relative " +
          " " +
          styles.vectorImg2 +
          " " +
          styles.vectorImg7
        }>
        <div className="container">
          <div className="row py-5 ">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className={styles.pdngRight}>
                {/* <div className="AnimeStarts">
                  <h3 className="ulineRed AnimeElement">Dear stake holders,</h3>
                </div> */}

                <div className="AnimeStarts">
                  <p className="AnimeElement">
                    Dr. K R Maalathi is a renowned educationist and visionary
                    leader with over two decades of expertise in transforming
                    K-12 education. Passionate about fostering academic
                    excellence and holistic development, she specializes in
                    mentoring educators, designing innovative curricula, and
                    empowering school leadership teams.
                  </p>
                </div>

                <div className="AnimeStarts">
                  <p className="AnimeElement">
                    As an education consultant, leadership coach, and curriculum
                    expert, Dr. Maalathi has worked with schools across the
                    globe to enhance teacher quality, implement future-ready
                    strategies, and create engaging, child-centered learning
                    environments. A prolific author and advocate for
                    values-based education, she is dedicated to nurturing
                    confident, creative, and compassionate learners who are
                    prepared to excel in life.
                  </p>
                </div>

                <div className="AnimeStarts">
                  <p className="AnimeElement">
                    Vikas Mantra Public School is honoured to have Dr. Maalathi
                    as the Advisor for our group, guiding us in our mission to
                    deliver transformative education.
                  </p>
                </div>

                <div className="AnimeStarts">
                  <p className="AnimeElement"></p>
                </div>

                <div className="AnimeStarts">
                  <h4 className="AnimeElement"></h4>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative  ">
              <div
                className={
                  "imgBgColor pastelBlue5 imgUp AnimeStarts " + styles.ImgMargin
                }>
                <img
                  src="/assets/advisor/maalath-vikas.jpg"
                  alt="image"
                  className={styles.ChairmanImg + " AnimeElement"}
                />
              </div>

              <img
                src="/assets/VMPS.png"
                alt="image"
                className={styles.vmpsImg}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MessageFromChairAdvisor;
