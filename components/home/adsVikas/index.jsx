import { Container } from "react-bootstrap";
import AdmissionsBtnWrapper from "../admissionbtn";
import styles from "./style.module.css";

const BannerAdsVikasCommon = () => {
  return (
    <div className={styles.bannerSectionVikas}>
      <Container>
        <div className={styles.bannerTitle}>
          <div className={styles.mainContentAdsVikas}>
            <h3>
              <span>Admissions Open for the Academic Year 2025-26</span>
              <span className={styles.cribes}>Pre-KG to XI</span>
            </h3>
            <AdmissionsBtnWrapper
              schoolName="Enroll Now"
              buttonInfo="Download Prospectus"
              bgStyles={{
                backgroundColor: "#E02D53",
                color: "white",
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerAdsVikasCommon;
