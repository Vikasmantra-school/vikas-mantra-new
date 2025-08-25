import styles from "./style.module.css";
import { Breadcrumb } from "/components/Breadcrumb/Breadcrumb";

const MessageFromPrincipal = () => {
  const pageTitle = "About";

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className="pt-4 AnimeStarts">
        <div className="container position-relative">
          <div className={styles + "row py-5"}>
            <div className="col-md-6">
              <div className="AnimeStarts">
                <h2 className="AnimeElement">Message from the Principal</h2>
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
          styles.vectorImg1 +
          " " +
          styles.vectorImg2
        }
      >
        <div className="container">
          <div className="row py-5 ">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className={styles.pdngRight + ""}>
                <div className="AnimeStarts">
                  <h3 className="ulineRed AnimeElement">
                    Dear Parents, Students, and Well-Wishers,
                  </h3>
                </div>

                <div className="AnimeStarts">
                  <p className="pt-5 AnimeElement">
                    Greetings from Vikas Mantra Public School!
                  </p>
                </div>

                <div className="AnimeStarts">
                  <p className=" AnimeElement">
                    At VMPS, we believe that education is the most powerful
                    catalyst for shaping a better future. Our mission is to
                    nurture young minds through knowledge, strong values, and a
                    spirit of inquiry—enabling them to grow into confident,
                    responsible, and compassionate individuals.
                  </p>
                </div>

                <div className="AnimeStarts">
                  <p className="AnimeElement">
                    We are dedicated to creating a learning environment that is
                    safe, holistic, and inspiring—where every student is
                    encouraged to think critically, act with integrity, and
                    pursue excellence in all areas of life. Backed by a
                    committed team of educators, a forward-looking curriculum,
                    and a strong emphasis on character-building, we aim to
                    prepare our students not just for academic success but for
                    life’s many challenges and opportunities.
                  </p>
                </div>
                <div className="AnimeStarts">
                  <p className="AnimeElement">
                    I take great pride in the strides our school has made and
                    warmly invite you to join us in our journey of empowering
                    the next generation.
                  </p>
                </div>

                <div className="AnimeStarts">
                  <p className="AnimeElement">Warm regards,</p>
                </div>

                <div className="AnimeStarts">
                  <h4 className="AnimeElement">Mr. V. G. Suresh</h4>
                  <h5
                    className=""
                    style={{
                      fontStyle: "italic",
                    }}
                  >
                    Principal
                  </h5>
                  <p className="mb-0">Vikas Mantra Public School</p>
                  <p>Mambakkam Campus</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative">
              <div
                className={
                  "imgBgColor pastelBrown3 imgUp AnimeStarts " +
                  styles.ImgMargin
                }
              >
                <img
                  src="/assets/banners/principal.png"
                  alt="image"
                  className={styles.PrincipalImg + " AnimeElement"}
                />
              </div>

              <img
                src="/assets/VMPS.png"
                alt="image"
                className={styles.vmpsImg}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MessageFromPrincipal;
