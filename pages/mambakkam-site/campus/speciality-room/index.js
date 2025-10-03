import { Breadcrumb } from "/components/Breadcrumb/Breadcrumb";
import styles from "./style.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container } from "react-bootstrap";

//
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SpecialityRoom = () => {
  const pageTitle = "Campus";

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className="pt-4 ">
        <div className="container position-relative">
          <div className="row py-5">
            <div className="AnimeStarts">
              <h2 className={styles.headingPdng + " AnimeElement"}>
                Speciality Rooms
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section
        className={
          "pt-5 whitebg position-relative " +
          styles.vectorImg5 +
          " " +
          styles.vectorImg10 +
          " " +
          styles.sectionPdngBtm
        }>
        <div className=" container position-relative">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="AnimeStarts">
                <h3 className="ulineRed AnimeElement">Dance Room</h3>
              </div>

              <div className="AnimeStarts">
                <p className="pt-5 AnimeElement">
                  {" "}
                  The Dance rooms is a place where students learn classical as
                  well as contemporary dance. The performance outputs of this
                  room are a special attraction in the school functions.
                </p>
              </div>
            </div>

            <div className="col-md-6 position-relative ">
              <div className="imgBgColor2 pastelSkyBlue AnimeStarts">
                <img
                  src="/images/campaign/Speciality-room.webp"
                  alt="image"
                  className={styles.labImg1 + " AnimeElement"}
                />
              </div>
            </div>
          </div>

          <div className={styles.sectionPdng + " row align-items-center"}>
            <div className={styles.order2 + " col-md-6  position-relative"}>
              <div className="imgBgColorLeft pastelLightGreen AnimeStarts">
                <img
                  src="/assets/campus/art-lab.png"
                  alt="image"
                  className={styles.labImg2 + " AnimeElement"}
                />
              </div>
            </div>

            <div className={styles.order1 + " col-md-6"}>
              <div className="AnimeStarts">
                <h3 className="ulineRed AnimeElement">Art Room</h3>
              </div>

              <div className="AnimeStarts">
                <p className="pt-5 AnimeElement">
                  {" "}
                  Under the guidance of our dedicated educators, the chemistry
                  lab becomes a haven for exploration, experimentation, and
                  enlightenment. It is here that students learn to navigate the
                  periodic table, decipher the language of equations, and
                  witness the beauty of chemical transformations firsthand.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="AnimeStarts">
                <h3 className="ulineRed AnimeElement"> Music Room</h3>
              </div>

              <div className="AnimeStarts">
                <p className="pt-5 AnimeElement">
                  {" "}
                  The Music room is used as a place for students to practice and
                  play their preferred instruments. Students who choose to be
                  part of the Music Club in Vikas mantra can join the music
                  club.
                </p>
              </div>
            </div>

            <div className="col-md-6 position-relative ">
              <div className="imgBgColor2 pastelSkyBlue AnimeStarts">
                <img
                  src="/assets/campus/music-room.png"
                  alt="image"
                  className={styles.labImg1 + " AnimeElement "}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          "whitebg py-5 position-relative " +
          styles.vectorImg10 +
          " " +
          styles.vectorImg12 +
          " " +
          styles.ourRooms
        }>
        <Container>
          <div className=" row">
            <div className="col-lg-6 col-md-12">
              <div className="AnimeStarts">
                <h3 className={" ulineRed AnimeElement " + styles.uLineMargin}>
                  Specialty Rooms at VIKAS MANTRA PUBLIC SCHOOL include
                </h3>
              </div>
            </div>
          </div>

          <div className={`${styles.mainContent} d-none d-md-block`}>
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={20}
              loop={true}
              autoplay={{
                disableOnInteraction: false,
                delay: 2500,
              }}
              slidesPerView={1.2}
              navigation={{
                prevEl: ".swiper-prev-blog",
                nextEl: ".swiper-next-blog",
              }}
              aria-label="My Favorite Images">
              <SwiperSlide>
                <div className={styles.gridCardContent}>
                  <div className={styles.Cardxcontainer}>
                    <div className={`${styles.card} ${styles.topleft}`}>
                      <img
                        src="/images/spitcardImages/g1.png"
                        alt="Smart Classrooms"
                      />
                      <div className={styles.caption}>Smart Classrooms</div>
                    </div>
                    <div
                      className={`${styles.card} ${styles.topright} ${styles.right}`}>
                      <img
                        src="/images/spitcardImages/g2.png"
                        alt="Co-Curricular Activities"
                      />
                      <div className={styles.caption}>
                        Co-Curricular Activities
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.gridCardContent}>
                  <div className={styles.Cardxcontainer}>
                    <div className={`${styles.card} ${styles.bottomleft}`}>
                      <img
                        src="/images/spitcardImages/g3.png"
                        alt="Transportation"
                      />
                      <div className={styles.caption}>Transportation</div>
                    </div>
                    <div
                      className={`${styles.card} ${styles.bottomright} ${styles.right}`}>
                      <img src="/assets/campus/library2.jpeg" alt="Library" />
                      <div className={styles.caption}>Library</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.gridCardContent}>
                  <div className={styles.Cardxcontainer}>
                    <div className={`${styles.card} ${styles.topleft}`}>
                      <img
                        src="/images/spitcardImages/g1.png"
                        alt="Smart Classrooms"
                      />
                      <div className={styles.caption}>Smart Classrooms</div>
                    </div>
                    <div
                      className={`${styles.card} ${styles.topright} ${styles.right}`}>
                      <img
                        src="/images/spitcardImages/g2.png"
                        alt="Co-Curricular Activities"
                      />
                      <div className={styles.caption}>
                        Co-Curricular Activities
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.gridCardContent}>
                  <div className={styles.Cardxcontainer}>
                    <div className={`${styles.card} ${styles.topleft}`}>
                      <img
                        src="/images/spitcardImages/g1.png"
                        alt="Smart Classrooms"
                      />
                      <div className={styles.caption}>Smart Classrooms</div>
                    </div>
                    <div
                      className={`${styles.card} ${styles.topright} ${styles.right}`}>
                      <img
                        src="/images/spitcardImages/g2.png"
                        alt="Co-Curricular Activities"
                      />
                      <div className={styles.caption}>
                        Co-Curricular Activities
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className={`${styles.mainContentMob} d-block d-md-none`}>
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={20}
              loop={true}
              autoplay={{
                disableOnInteraction: false,
                delay: 2500,
              }}
              slidesPerView={1.2}
              navigation={{
                prevEl: ".swiper-prev-blog",
                nextEl: ".swiper-next-blog",
              }}
              aria-label="My Favorite Images">
              <SwiperSlide>
                <div className={`${styles.card}`}>
                  <img
                    src="/images/spitcardImages/g1.png"
                    alt="Smart Classrooms"
                  />
                  <div className={styles.caption}>Smart Classrooms</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.card} `}>
                  <img
                    src="/images/spitcardImages/g2.png"
                    alt="Co-Curricular Activities"
                  />
                  <div className={styles.caption}>Co-Curricular Activities</div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={`${styles.card}`}>
                  <img
                    src="/images/spitcardImages/g3.png"
                    alt="Transportation"
                  />
                  <div className={styles.caption}>Transportation</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.card} `}>
                  <img src="/assets/campus/library2.jpeg" alt="Library" />
                  <div className={styles.caption}>Library</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="AnimeStarts">
                <p className="AnimeElement">
                  VIKAS MANTRA PUBLIC SCHOOL is proud to announce the launch of
                  HOME Economics for the first time in India equipping children
                  to learn the life skills to lead a complete independent life
                  in their later years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialityRoom;
