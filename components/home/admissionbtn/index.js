import styles from "./style.module.css";

const AdmissionsBtnWrapper = ({
  schoolName,
  bgStyles,
  buttonlink = "/",
  buttonInfo = "Admission Open  2026 - 2027",
  fontSize =""
}) => {
  return (
    <div className={styles.admissioncheck}>
      {schoolName && (
        <div className={styles.schoolName} style={{...bgStyles, fontSize}} >
          <a href={buttonlink}>{schoolName}</a>
        </div>
      )}
      <a style={{ textDecoration: "none", color: "inherit", fontSize}} href={buttonlink}>
        <button className={styles.admissionBtn}>{buttonInfo}</button>
      </a>
    </div>
  );
};

export default AdmissionsBtnWrapper;
