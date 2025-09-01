import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { vikasdataGrid1, vikasdataGrid2 } from "../../../data/whyvikasData";

const WhyVikasSection = () => {
  return (
    <div className={styles.whyVikasSection}>
      <Container>
        <h3 className={styles.whyVikasTitle}>Why Vikas Mantra?</h3>
        <Row className="gx-5">
          <Col lg={6}>
            <div className={styles.GridWrapper}>
              {vikasdataGrid1.map((item, index) => (
                <div className={styles.GridItem} key={item.id}>
                  <div className={styles.gridImage}>
                    <img src={item.imgUrl} alt={item.title} />
                  </div>
                  <h3 className={styles.gridTitle}>{item.title}</h3>
                  <div className={styles.gridDesc}>{item.desc}</div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.GridWrapper}>
              <div className={styles.dummySpace}
                aria-hidden="true"
              ></div>
              {vikasdataGrid2.map((item, index) => (
                <div className={styles.GridItem} key={item.id}>
                  <div className={styles.gridImage}>
                    <img src={item.imgUrl} alt={item.title} />
                  </div>
                  <h3 className={styles.gridTitle}>{item.title}</h3>
                  <div className={styles.gridDesc}>{item.desc}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyVikasSection;
