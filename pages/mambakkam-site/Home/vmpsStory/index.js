
"use client";
import styles from "./style.module.css";

const VmpsStory = () => {
  return (
    <>
      <section className={styles.vmpsStory + " " + "mbkm-section-padding AnimeStarts"}>
        <div className="container">
          <div className="row align-items-center ">
            <div className="mb-5 col-lg-6 col-md-12 col-sm-12 AnimeStarts ">
              <img
                className={`${styles.vmpsBanner} AnimeElement`}
                src="/images/banner/vmps-stoy-banner.png"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 AnimeStarts">
              <h2 className={`${styles.storyHeading} AnimeElement`}>
                <span className="d-flex flex-column">
                  The VMPS <br /> Mambakkam
                  <svg
                    width="412"
                    height="11"
                    viewBox="0 0 412 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M230.568 2.57334C239.64 3.2034 246.825 1.243 257.886 1.73628C268.948 2.23864 270.57 3.40339 283.257 3.42371C295.925 3.43904 308.594 4.55591 314.246 4.2292C319.878 3.89828 320.466 5.37104 328.474 5.28031C335.681 5.1992 340.394 5.47391 346.328 6.04704C346.978 6.10929 347.642 6.17511 348.327 6.24445C355.322 6.94528 376.836 8.13225 384.652 7.8972C392.539 7.65739 401.379 9.04111 406.75 9.50901C408.413 9.65597 409.712 9.81218 410.706 9.95744C411.127 10.019 411.318 10.1156 411.314 10.2021C411.314 10.2021 411.314 10.2022 411.314 10.2022C411.309 10.3098 411.001 10.4018 410.457 10.3908C407.816 10.3376 403.845 10.3352 399.078 10.54C390.348 10.9411 389.323 10.0592 377.519 10.0098C366.111 9.97175 359.114 10.498 346.21 9.66751C345.675 9.63322 345.138 9.59689 344.586 9.55801C330.687 8.58953 327.39 10.6618 307.769 8.85407C288.133 7.08435 285.991 9.27475 266.387 9.05403C246.773 8.8332 222.053 7.16112 210.218 7.07364C208.788 7.06156 207.307 7.05128 205.761 7.04154C194.53 6.97046 180.485 6.92733 165.763 6.50053C149 6.0126 128.32 6.50891 109.802 5.87266C91.2667 5.22757 65.1667 4.48244 53.0636 4.03798C40.9263 3.59033 38.0138 3.49224 26.3765 3.75229C19.7147 3.90311 10.5387 3.77857 2.69659 3.26229C-1.1473 3.00245 -0.296879 2.61675 3.59819 2.42C9.41704 2.13272 14.0578 2.30241 17.0784 1.82009C23.029 0.857399 25.568 0.488694 33.0256 1.04505C40.5464 1.60309 44.0268 0.347569 48.424 0.500687C52.8743 0.658866 52.7144 1.38458 74.9643 0.901816C97.114 0.430121 109.378 0.387209 117.739 0.315764C126.213 0.245358 143.695 1.05487 157.425 0.983739C169.598 0.912641 192.893 1.37473 205.851 1.35611C207.505 1.35303 208.979 1.34107 210.249 1.31826C221.489 1.11712 221.499 1.94993 230.568 2.57334Z"
                      fill="#FFB800"
                    />
                  </svg>
                </span>{" "}
                <span>Story</span>
              </h2>

              <p className={`${styles.desc} AnimeElement`}>
                VIKAS MANTRA PUBLIC SCHOOL, a CBSE School in Mambakkam Chennai
                is building a distinctive educational platform through a mix of
                international learning techniques, experienced academicians and
                modern facilities.
              </p>

               <p className={`${styles.desc} AnimeElement`}>
                By blending 21st century learning methodologies and traditional
                Indian values, we equip our students to think freely, dream big
                and pursue their passions, yet remain firmly connected to ground
                realities.
              </p>

              <button class="outlineBtn btn bottomToTop AnimeElement">
                <a href="/about">Know More</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VmpsStory;
