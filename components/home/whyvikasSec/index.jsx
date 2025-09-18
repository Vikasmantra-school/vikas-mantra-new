import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { vikasdataGrid1, vikasdataGrid2 } from "../../../data/whyvikasData";
import SlideIn from "../../Animation/SlideIn";

const WhyVikasSection = () => {
  return (
    <div className={styles.whyVikasSection}>
      <Container>
        <h3 className={styles.whyVikasTitle}>Why Vikas Mantra?</h3>
        <Row className="gx-0 gx-md-5">
          <Col lg={6}>
            <div className={styles.GridWrapper}>
              {vikasdataGrid1.map((item, index) => (
                <div className={`${styles.GridItem} AnimeStarts`} key={item.id}>
                  <a href="/learning">
                    <div className={`${styles.gridImage} AnimeElement`}>
                      <img src={item.imgUrl} alt={item.title} />
                    </div>
                  </a>
                  <SlideIn direction="left">
                    <h3 className={`${styles.gridTitle} AnimeElement`}>
                      {item.title}
                    </h3>

                    <div className={`${styles.gridDesc} AnimeElement`}>
                      {item.desc}
                    </div>
                  </SlideIn>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.GridWrapper}>
              <div className={styles.dummySpace} aria-hidden="true"></div>
              {vikasdataGrid2.map((item, index) => (
                <div className={`${styles.GridItem} AnimeStarts`} key={item.id}>
                  <a href="/learning">
                    <div className={`${styles.gridImage} AnimeElement`}>
                      <img src={item.imgUrl} alt={item.title} />
                    </div>
                  </a>
                  <SlideIn direction="right">
                    <h3 className={`${styles.gridTitle} AnimeElement`}>
                      {item.title}
                    </h3>
                    <div className={`${styles.gridDesc} AnimeElement`}>
                      {item.desc}
                    </div>
                  </SlideIn>
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
