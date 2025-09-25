import { Col, Container, Row } from 'react-bootstrap';
import styles from './style.module.css';
import { vikasdataGrid1, vikasdataGrid2 } from '../../../data/whyvikasData';
import SlideIn from '../../Animation/SlideIn';
import Link from 'next/link';

const WhyVikasSection = () => {
  return (
    <div className={styles.whyVikasSection}>
      <Container>
        <h3 className={styles.whyVikasTitle}>Why Vikas Mantra?</h3>
        <Row className="gx-0 gx-md-5 overflow-hidden">
          <Col lg={6}>
            <div className={styles.GridWrapper}>
              {vikasdataGrid1.map((item, index) => (
                <div className={`${styles.GridItem} AnimeStarts`} key={item.id}>
                  <Link href="/learning" passHref>
                    <a className="position-relative">
                      <div className={`${styles.gridImage} AnimeElement`}>
                        <img src={item.imgUrl} alt={item.title} />
                      </div>
                    </a>
                  </Link>
                  <SlideIn direction="left">
                    <div className={styles.contentG}>
                      <h3 className={`${styles.gridTitle} AnimeElement`}>
                        {item.title}
                      </h3>
                      <div className={`${styles.gridDesc} AnimeElement`}>
                        {item.desc}
                      </div>
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
                  <Link href="/learning" passHref>
                    <a>
                      <div className={`${styles.gridImage} AnimeElement`}>
                        <img src={item.imgUrl} alt={item.title} />
                      </div>
                    </a>
                  </Link>
                  <SlideIn direction="right">
                    <div className={styles.contentG}>
                      <h3 className={`${styles.gridTitle} AnimeElement`}>
                        {item.title}
                      </h3>
                      <div className={`${styles.gridDesc} AnimeElement`}>
                        {item.desc}
                      </div>
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
