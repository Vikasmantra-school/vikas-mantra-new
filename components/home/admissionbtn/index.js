import styles from "./style.module.css";

const AdmissionsBtnWrapper = ({
  schoolName,
  bgStyles,
  buttonlink = "/",
  buttonInfo = "Admission Open  2025 - 2026",
}) => {
  return (
    <div className={styles.admissioncheck}>
      {schoolName && (
        <div className={styles.schoolName} style={bgStyles}>
          {schoolName}
        </div>
      )}
      <a style={{ textDecoration: "none", color: "inherit" }} href={buttonlink}>
        <button className={styles.admissionBtn}>{buttonInfo}</button>
      </a>
    </div>
  );
};

export default AdmissionsBtnWrapper;
