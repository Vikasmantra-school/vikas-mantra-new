import styles from "./style.module.css";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import PopupModal from "../../components/Popup/PopupModal";

const Mambakkam = () => {
  const pageTitle = "New campus";

  return (
    <>

      <Breadcrumb pageName={pageTitle} />

      <section className="pt-4 ">
        <div className="container position-relative">
          <div className="row py-5">
            <div className="AnimeStarts">
              <h2 className={styles.headingPdng + " AnimeElement"}>
                Exciting News
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          styles.sectionStyle +
          " " +
          " whitebg position-relative " +
          " " +
          styles.vectorImg2
        }>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 position-relative ">
              <div className={styles.margin + " pb-5 "}>
                <div className="AnimeStarts">
                  <h2 className="ulineRed AnimeElement">New Campus At Mambakkam</h2>
                </div>

                <div className="AnimeStarts">
                  <p className={"pt-5 AnimeElement " + styles.pLineHeight}>
                    We are thrilled to announce the launch of our brand-new
                    campus at Mambakkam, bringing world-class education closer
                    to your neighborhood! Admissions are now open for KG to
                    Grade 8 for the Academic Year 2025-26.
                  </p>
                </div>

                <div
                  className={
                    styles.ResponsiveGroupImageContainer + " AnimeStarts"
                  }>
                  <picture>
                    <source srcSet="/assets/banners/school-building.webp" />
                    <source srcSet="/assets/banners/school-building.png" />
                    <img
                      src="/assets/banners/school-building.png"
                      alt="image"
                      className={styles.ResponsiveGroupImage + " AnimeElement"}
                    />
                  </picture>
                </div>

                <div className="AnimeStarts">
                  <p className={styles.pLineHeight + " AnimeElement"}>
                    At Vikas Mantra, we are committed to nurturing excellence
                    through a holistic curriculum, cutting-edge facilities, and
                    a safe, inclusive environment. Join us in shaping young
                    minds for a bright future.
                  </p>
                </div>

                <div className="AnimeStarts">
                  <p className={styles.pLineHeight + "AnimeElement"}>
                    Limited seats available – Enroll now!
                  </p>
                </div>
                <div className="AnimeStarts">
                  <p className={styles.pLineHeight + "AnimeElement"}>
                    For admissions and inquiries, contact us at: Phone:
                    7092450450 Email: info@vikasmantra.org
                  </p>
                </div>

                <div className="AnimeStarts">
                  <p className={styles.pLineHeight + "AnimeElement"}>
                    <div className="AnimeStarts">
                      <p className={styles.pLineHeight + "AnimeElement"}>
                        Limited seats available – Enroll now!
                      </p>
                    </div>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 offset-lg-1 col-md-12 position-relative">
              <div className="AnimeStarts">
                <picture>
                  <source srcSet="/assets/banners/school-building.webp" />
                  <source srcSet="/assets/banners/school-building.png" />
                  <img
                    src="/assets/banners/school-building.png"
                    alt="image"
                    className={styles.schoolBuildingImg + " AnimeElement"}
                  />
                </picture>
              </div>

              <div className="position-relative">
                <img
                  src="/assets/VMPS.png"
                  alt="image"
                  className={styles.vmpsImg}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5 col-md-12 position-relative ">
              <div>
                <div className="AnimeStarts">
                  <h3 className="ulineRed AnimeElement">
                    Know about our Advisor,
                  </h3>
                </div>

                
                <div
                  className={
                    styles.ResponsiveGroupImageContainer + " AnimeStarts"
                  }>
                  <picture>
                    <source srcSet="/assets/advisor/maalath-vikas.jpg" />
                    <source srcSet="/assets/advisor/maalath-vikas.jpg" />
                    <img
                      src="/assets/advisor/maalath-vikas.jpg"
                      alt="image"
                      className={styles.ResponsiveGroupImage + " AnimeElement"}
                    />
                  </picture>
                </div>

                <div className="AnimeStarts pt-3">
                  <p className={styles.pLineHeight + "AnimeElement mt-3"}>
                    Dr. K R Maalathi is a renowned educationist and visionary
                    leader with over two decades of expertise in transforming
                    K-12 education. Passionate about fostering academic
                    excellence and holistic development, she specializes in
                    mentoring educators, designing innovative curricula, and
                    empowering school leadership teams.
                  </p>
                </div>

                <div className="AnimeStarts">
                  <p className={styles.pLineHeight + "AnimeElement"}>
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
                  <p className={styles.pLineHeight + "AnimeElement"}>
                    Vikas Mantra Public School is honoured to have Dr. Maalathi
                    as the Advisor for our group, guiding us in our mission to
                    deliver transformative education.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-12 position-relative">
              <div className="AnimeStarts">
                <picture>
                  <source srcSet="/assets/advisor/maalath-vikas.jpg" />
                  <source srcSet="/assets/advisor/maalath-vikas.jpg" />
                  <img
                    src="/assets/advisor/maalath-vikas.jpg"
                    alt="image"
                    className={styles.schoolBuildingImg + " AnimeElement"}
                  />
                </picture>
              </div>

              <div className="position-relative">
                <img
                  src="/assets/VMPS.png"
                  alt="image"
                  className={styles.vmpsImg}
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Mambakkam;
