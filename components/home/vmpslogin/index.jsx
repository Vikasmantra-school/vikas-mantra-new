import { Col, Container } from "react-bootstrap";
import styles from "./style.module.css";

const VmpsLogin = () => {
  return (
    <div className={`${styles.vmpsloginBanner} AnimeStarts`}>
      <Container className="h-100">
        <Col sm={6} className="h-100">
          <div className={`${styles.vmpsloginwrapper} AnimeElement`}>
            <h2 className={styles.vmpsloginTitle}>VMPS login</h2>
            <p className={styles.vmpsDesc}>
              Welcome to the Vikas Mantra Admissions Portal your gateway to
              providing your child with a meaningful and future-ready education.
            </p>
            <a style={{ textDecoration: "none", color: "inherit" }} href="https://www.parentsalarmapp.com/" target="_blank">
              <button className={styles.vmpsloginButton}>Apply Now</button>
            </a>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default VmpsLogin;
