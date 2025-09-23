import { Container } from "react-bootstrap";
import AdmissionsBtnWrapper from "../admissionbtn";
import styles from "./style.module.css";
import Link from "next/link";

const BannerAdsVikasCommon = () => {
  return (
    <div className={`${styles.bannerSectionVikas} AnimeStarts`}>
      <Container>
        <div className={styles.bannerTitle}>
          <div className={styles.mainContentAdsVikas}>
            <h3 className="AnimeElement">
              <span>Admissions Open for the Academic Year 2025-26</span>
              <span className={styles.cribes}>Pre-KG to XI</span>
            </h3>
            {/* <AdmissionsBtnWrapper
              schoolName="Enroll Now"
              buttonInfo="Download Prospectus"
              bgStyles={{
                backgroundColor: "#E02D53",
                color: "white",
              }}
              fontSize ="18px"
              buttonlink="/admissions"
    
            /> */}
            <Link href="/enquiry-form" passHref >
              <a
                className="AnimeElement"
                style={{ textDecoration: "none", color: "inherit" }}>
                <button className={styles.enrollNowBtn}>Enroll Now</button>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerAdsVikasCommon;
