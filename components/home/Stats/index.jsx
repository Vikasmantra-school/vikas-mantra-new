import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { stats } from "../../../data/homepageData";

const Stats = () => {
  return (
    <section className={styles.homeaboutSection}>
      <div className={styles.aboutVikasSmall}>
        <Container fluid="xl">
          <Row>
            <Col lg={6}>
              <div className={styles.statMain}>
                <div className={styles.abtHeading}>
                  <h2>
                    <span>Inspiring Learning,</span> <br />
                    <span className={styles.underLined}>Empowering Lives!</span>
                  </h2>
                  <div className={styles.heartIcon}>
                    <img
                      src="/images/bgs/heart.png"
                      alt="heart"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <p className={styles.abtPara}>
                  VIKAS MANTRA PUBLIC SCHOOL, a CBSE institution in Chengalpattu
                  Kanchipuram, builds a distinctive learning environment
                  blending international techniques with traditional Indian
                  values.{" "}
                </p>
                <p>
                  We empower students to think freely, dream big, and stay
                  rooted in reality. Learning goes beyond books and classrooms,
                  nurturing holistic development. Students are encouraged to
                  explore their interests and showcase talents through diverse
                  co-curricular activities.
                </p>
                <button className={styles.abtBtn}>
                  <span>Know More</span>
                </button>
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.rightStatWrapper}>
                <div className={styles.statImg}>
                  <img src="/images/bgs/statsImg.png" alt="AboutImage" />

                  <div className={styles.stars}>
                    <img
                      src="/images/bgs/star.png"
                      alt="star"
                      aria-hidden="true"
                    />
                  </div>
                  <div className={styles.sticker}>
                    <img
                      src="/images/bgs/sticker.png"
                      alt="sticker"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.cardXWrapper}>
        <Container fluid="xl">
          <Row className="justify-content-center">
            {stats.map((stat, index) => {
              return (
                <Col lg={2} key={stat.id}>
                  <div className={styles.statCard}>
                    <h3>{stat.title}</h3>
                    <small>{stat.caption}</small>
                    <div className={styles.statsIcon}>
                      <img src={stat.icon} alt="Icons" />
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Stats;
