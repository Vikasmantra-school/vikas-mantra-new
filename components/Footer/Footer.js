import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import VikasLogo from "../../public/assets/VikasLogo.png";
import styles from "./style.module.css";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import PopupImageOld from "../../public/assets/Popups/Vikas-Social-Ad-2.png";
// import PopupImageNew from '../../public/assets/Popups/popup-creative.png'
import PopupImageNew from "../../public/assets/Popups/Admission-Open-Popup.png";
import InstaLogo from "../../public/assets/icons/InstaLogo.svg";
import FbLogo from "../../public/assets/icons/FbLogo.svg";
import YtLogo from "../../public/assets/icons/YtLogo.svg";
import LinkedInLogo from "../../public/assets/icons/LinkedInLogo.svg";
import { useRouter } from "next/router";
import { useCampus } from "../../hooks/useCampus";

export const Footer = () => {
  const { asPath } = useRouter();

  const { campus, isMambakkam, isChengalpattu } = useCampus();

  //popup-integration

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    //checking if running locally or server

    const isLocalhost = Boolean(
      window.location.hostname === "localhost" ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === "[::1]" ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    );
    // console.log(isLocalhost);

    if (isLocalhost == true) {
      console.log("popup-hidden");
    } else {
      // handleShow()
      console.log("");
    }
  }, []);

  //form-data-clear-after-submit

  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [number, setNumber] = useState("");
 
  const [campusValue, setCampusValue] = useState("");

  //form-sheet-integration

  const formRef = useRef(null);
  const scriptUrlMambakkam =
    "https://script.google.com/macros/s/AKfycbwC0RnSSOM94vWsI55wvD0PZ36ibAE068w1OVBKg5zgKP5pGnpGiFJ5l-qGiqZ1OMDyKQ/exec";
  // above is admissions.mambakkam@vikasmantra.org

  const scriptUrlChengalpattu =
  "https://script.google.com/macros/s/AKfycbz0OUTNqOIYPu3n6jZmmi4tGcw9AAq83Xmnw0RQrN48YwUJ7DA5gjaOq9WS8Nr6_9GFlw/exec";
  // above is admissions@vikasmantra.org

    // "https://script.google.com/macros/s/AKfycbxyDMEsVuTZ1UI_Q0IR5OC8C6dr-AqjYrclp364Df-170anM0Z8RSEvkYBs5a6okfJc3w/exec";
  // above is matheen

  // "https://script.google.com/macros/s/AKfycbzx3dMf1Pp-SqClOxBO0UnERO_cqNBB6kNuLV5y6q84At15I5NwelXIpxuWiB44A2rY/exec";
  // above is original
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let scriptUrl = scriptUrlChengalpattu;
    if (campusValue === "Chengalpattu") {
      scriptUrl = scriptUrlChengalpattu;
    } else if (campusValue === "Mambakkam") {
      scriptUrl = scriptUrlMambakkam;
    }

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        alert("Our admission officer will contact you shortly");
        setLoading(false);
        setName("");
        setEmail("");
        setNumber("");
        
        setCampusValue("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true} centered>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <div>
            <Image
              src={PopupImageNew}
              alt="popup"
              priority
              className={styles.sectionOut}
            />
          </div>
        </Modal.Body>
      </Modal>

      <div className={styles.section + " pt-5 m-0"} id="footer">
        <div className="container footer-container">
          <div
            className="row g-0 pb-5"
            style={{ borderBottom: "1px solid #674A4A" }}>
            <h3 className="mb-3">Vikas Mantra, Mambakkam</h3>

            <div className="col-md-3">
              <div className={styles.footerTags}>
                <p>Best CBSE Schools in Mambakkam</p>
                <p>CBSE Schools Near Ponmar</p>
                <p>CBSE Schools Near Navalur</p>
                <p>CBSE Schools Near Guduvanchery</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className={styles.footerTags}>
                <p>CBSE Schools Near Mambakkam</p>
                <p>CBSE Schools Near Ponmar</p>
                <p>CBSE Schools Near Medavakkam</p>
                <p>CBSE Schools Near Tambaram</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.footerTags}>
                <p>Best CBSE Schools Near Vandalur</p>
                <p>Best CBSE Schools Near Sholinganallur</p>

                <p>CBSE Schools Near Padur</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.footerTags}>
                <p>Best CBSE Schools Near Vandalur</p>
                <p>Best CBSE Schools Near Sholinganallur</p>

                <p>CBSE Schools Near Padur</p>
              </div>
            </div>
          </div>

          <div
            className="row g-0 py-5"
            style={{ borderBottom: "1px solid #fff" }}>
            <h3 className="mb-3">Vikas Mantra, Chengalpattu</h3>

            <div className="col-md-3">
              <div className={styles.footerTags}>
                <p>Best CBSE Schools in Mambakkam</p>
                <p>CBSE Schools Near Ponmar</p>
                <p>CBSE Schools Near Navalur</p>
                <p>CBSE Schools Near Guduvanchery</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className={styles.footerTags}>
                <p>CBSE Schools Near Mambakkam</p>
                <p>CBSE Schools Near Ponmar</p>
                <p>CBSE Schools Near Medavakkam</p>
                <p>CBSE Schools Near Tambaram</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.footerTags}>
                <p>Best CBSE Schools Near Vandalur</p>
                <p>Best CBSE Schools Near Sholinganallur</p>

                <p>CBSE Schools Near Padur</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.footerTags}>
                <p>Best CBSE Schools Near Vandalur</p>
                <p>Best CBSE Schools Near Sholinganallur</p>

                <p>CBSE Schools Near Padur</p>
              </div>
            </div>
          </div>
          <div className="row gx-5 py-5" id="footerForm">
            <div className="col-lg-4 col-md-12">
              <div className={styles.formCol}>
                <div className="mb-3 mb-md-5">
                  <h6>VISIT THE SCHOOL</h6>
                  <h3>FOR AN ADMISSION TOUR</h3>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                  <div className="mb-3">
                    <input
                      type="text"
                      className={styles.formInput + " form-control"}
                      placeholder="Name"
                      required
                      name="Name"
                      onChange={(event) => setName(event.target.value)}
                      value={name}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className={styles.formInput + " form-control"}
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      required
                      name="Email"
                      onChange={(event) => setEmail(event.target.value)}
                      value={mail}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="number"
                      className={styles.formInput + " form-control"}
                      placeholder="Number"
                      required
                      name="Phone"
                      onChange={(event) => setNumber(event.target.value)}
                      value={number}
                    />
                  </div>

                  <div className="mb-3">
                    <select
                      className={styles.formInput + " form-control"}
                      required
                      name="Campus"
                      onChange={(event) => setCampusValue(event.target.value)}
                      value={campusValue}>
                      <option value="" disabled>
                        Select Campus
                      </option>
                      <option value="Chengalpattu">Chengalpattu</option>
                      <option value="Mambakkam">Mambakkam</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <input
                      type="submit"
                      value={loading ? "Loading..." : "Send"}
                      className={styles.sendBtn + " btn btn-light"}
                    />
                  </div>
                </form>

                <p className="mt-4 mb-0">
                  Our admission officer will contact you shortly
                </p>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="row pb-3 align-items-center">
                <div className={"col-md-12 "}>
                  <div className={styles.aboutCol}>
                    <h6 style={{ opacity: "0", pointerEvents: "none" }}>
                      VISIT THE SCHOOL
                    </h6>
                    <h3>ABOUT</h3>
                    <p className="m-0">
                      Vikas Mantra Public School is established with a vision to
                      prepare and equip each child with the necessary survival
                      skills in the 21st century through rigorous academic and
                      technological skills.
                    </p>
                  </div>
                </div>
              </div>

              {isMambakkam ? (
                <>
                  <div className="row py-3 align-items-center"></div>
                  <div className="row align-items-end">
                    <div className={"col-md-5"}>
                      <div className={styles.logoCol}>
                        <Image
                          src={VikasLogo}
                          alt="image"
                          className={styles.logo}
                          fill
                        />
                      </div>
                    </div>
                    <div className={`${styles.contactUs} col-md-5`}>
                      <h3>CONTACT US</h3>
                      <p>Vikas Mantra Public School </p>
                      <p> Vandalur to Kelambakkam Road, </p>
                      <p> Mambakkam, Chennai,</p>
                      <p>Tamil Nadu 600127</p>
                      <p>
                        Landline: <a href="tel:+914427471689">044-2747-1689</a>
                      </p>
                      <p>
                        Mobile: <a href="tel:+917448450450">7448 450 450</a>
                      </p>

                      <p>
                        <a href="mailto:admissions.mambakkam@vikasmantra.org ">
                          admissions.mambakkam@vikasmantra.org
                        </a>
                      </p>
                      <p>
                        <a href="mailto: info.mambakkam@vikasmantra.org">
                          info.mambakkam@vikasmantra.org
                        </a>
                      </p>
                      <div className={`${styles.socialRow}`}>
                        <a
                          href="https://www.instagram.com/vikasmantra_publicschool/"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={InstaLogo}
                            alt="Instagram"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=61577256500472"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={FbLogo}
                            alt="Facebook"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="http://www.youtube.com/@vikasmantrapublicschool"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={YtLogo}
                            alt="YouTube"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/vikas-mantra-public-school/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bcp2CcnmFQCG8whcGAXfijQ%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={LinkedInLogo}
                            alt="LinkedIn"
                            width={32}
                            height={32}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : isChengalpattu ? (
                <>
                  <div className="row py-3 align-items-center"></div>
                  <div className="row align-items-end">
                    <div className={"col-md-5"}>
                      <div className={styles.logoCol}>
                        <Image
                          src={VikasLogo}
                          alt="image"
                          className={styles.logo}
                          fill
                        />
                      </div>
                    </div>
                    <div className={`${styles.contactUs} col-md-5`}>
                      <h3>CONTACT US</h3>
                      <p> S.No:168,168/3,</p>
                      <p> Off Mahindra World City, </p>
                      <p> Anjur 603204, Chengalpattu</p>
                      <p>
                        Landline: <a href="tel:8148 143 834">8148 143 834</a>
                      </p>
                      <p>
                        Mobile: <a href="tel:+917092450450">7092 450 450</a>
                      </p>
                      <p> info@vikasmantra.org</p>

                      {/* <p>
                        <a href="mailto:info.mambakkam@vikasmantra.org ">
                          info.mambakkam@vikasmantra.org
                        </a>
                      </p> */}
                      <div className={`${styles.socialRow}`}>
                        <a
                          href="https://www.instagram.com/vikasmantra_public_school/"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={InstaLogo}
                            alt="Instagram"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/vikasmantrapublicschool"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={FbLogo}
                            alt="Facebook"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="http://www.youtube.com/@vikasmantrapublicschool"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={YtLogo}
                            alt="YouTube"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/vikas-mantra-public-school/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bcp2CcnmFQCG8whcGAXfijQ%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={LinkedInLogo}
                            alt="LinkedIn"
                            width={32}
                            height={32}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="row py-3 align-items-center">
                    <div className="col-2"></div>
                    <div className="col-md-10">
                      <h3>CONTACT US</h3>
                    </div>
                  </div>
                  <div className="row align-items-end">
                    <div className={"col-md-2"}>
                      <div className={styles.logoCol}>
                        <Image
                          src={VikasLogo}
                          alt="image"
                          fill
                          className={styles.logo}
                        />
                      </div>
                    </div>
                    <div className={`${styles.contactUs} col-md-5 pe-4`}>
                      <h5>Mambakkam</h5>

                      <p> Vandalur to Kelambakkam Road, </p>
                      <p> Mambakkam, Chennai,</p>
                      <p> Tamil Nadu 600127</p>
                      <p>
                        Landline: <a href="tel:+914427471689">044-2747-1689</a>
                      </p>
                      <p>
                        Mobile: <a href="tel:+917448450450">7448 450 450</a>
                      </p>

                      <p>
                        <a href="mailto:admissions.mambakkam@vikasmantra.org ">
                          admissions.mambakkam@vikasmantra.org
                        </a>
                      </p>
                      <p>
                        <a href="mailto: info.mambakkam@vikasmantra.org ">
                          info.mambakkam@vikasmantra.org
                        </a>
                      </p>

                      <div className={`${styles.socialRow}`}>
                        <a
                          href=" https://www.instagram.com/vikasmantra_publicschool/"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={InstaLogo}
                            alt="Instagram"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=61577256500472"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={FbLogo}
                            alt="Facebook"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="http://www.youtube.com/@vikasmantrapublicschool"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={YtLogo}
                            alt="YouTube"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/vikas-mantra-public-school/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bcp2CcnmFQCG8whcGAXfijQ%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={LinkedInLogo}
                            alt="LinkedIn"
                            width={32}
                            height={32}
                          />
                        </a>
                      </div>
                    </div>

                    <div
                      className={`${styles.contactUs} footer-col-bl col-md-5 ps-md-4`}>
                      <h5>Chengalpattu</h5>
                      <p> S.No:168,168/3,</p>
                      <p> Off Mahindra World City, </p>
                      <p> Anjur 603204, Chengalpattu</p>
                      <p>
                        Landline: <a href="tel:8148 143 834">8148 143 834</a>
                      </p>
                      <p>
                        Mobile: <a href="tel:+917092450450">7092 450 450</a>
                      </p>
                      <p> info@vikasmantra.org</p>
                      {/* <p>mathu</p> */}

                      {/* <p>
                        <a href="mailto:info.mambakkam@vikasmantra.org ">
                          info.mambakkam@vikasmantra.org
                        </a>
                      </p> */}
                      <div className={`${styles.socialRow}`}>
                        <a
                          href="https://www.instagram.com/vikasmantra_public_school/"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={InstaLogo}
                            alt="Instagram"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/vikasmantrapublicschool"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={FbLogo}
                            alt="Facebook"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="http://www.youtube.com/@vikasmantrapublicschool"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={YtLogo}
                            alt="YouTube"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/vikas-mantra-public-school/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bcp2CcnmFQCG8whcGAXfijQ%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer">
                          <Image
                            src={LinkedInLogo}
                            alt="LinkedIn"
                            width={32}
                            height={32}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="row align-items-center py-4">
                <div className="col-md-3">
                  <h3 className="mb-0">QUICK LINKS</h3>
                </div>
                <div className={"col-md-8 "}>
                  <div className={styles.quickLinksCol}>
                    <div className={styles.quickLink + " row d-none d-md-flex"}>
                      <div className="col-3 col-md-3">
                        <Link href="/about" legacyBehavior>
                          <a className="nav-link">About Us</a>
                        </Link>

                        <Link href="/campus/classrooms" legacyBehavior>
                          <a className="nav-link">Campus</a>
                        </Link>
                      </div>

                      <div className="col-3 col-md-3">
                        {/* <Link href="/enquiry-form" legacyBehavior>
                          <a className="nav-link">EnquiryForm</a>
                        </Link> */}
                        <Link href="/about/our-team" legacyBehavior>
                          <a className="nav-link">Faculty</a>
                        </Link>

                        <Link href="/events" legacyBehavior>
                          <a className="nav-link">Gallery</a>
                        </Link>
                      </div>

                      <div className="col-3 col-md-3">
                        <Link href="/careers" legacyBehavior>
                          <a className="nav-link">Careers</a>
                        </Link>

                        <Link href="/contact" legacyBehavior>
                          <a className="nav-link">Contact</a>
                        </Link>
                      </div>
                      <div className="col-3 col-md-3">
                        <Link href="/learning" legacyBehavior>
                          <a className="nav-link">Learning</a>
                        </Link>
                        <Link href="/admissions" legacyBehavior>
                          <a className="nav-link">Admissions</a>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.quickLink + " row d-md-none"}>
                      <div className="col-6 col-md-4 col-lg-4 col-sm-4">
                        <Link href="/about" legacyBehavior>
                          <a className="nav-link">About Us</a>
                        </Link>

                        <Link href="/campus/classrooms" legacyBehavior>
                          <a className="nav-link">Campus</a>
                        </Link>

                        <Link href="/learning" legacyBehavior>
                          <a className="nav-link">Learning</a>
                        </Link>
                        <Link href="/enquiry-form" legacyBehavior>
                          <a className="nav-link">EnquiryForm</a>
                        </Link>
                        <Link href="/events" legacyBehavior>
                          <a className="nav-link">Gallery</a>
                        </Link>
                      </div>

                      <div className="col-6 col-md-4 col-lg-4 col-sm-4">
                        <Link href="/admissions" legacyBehavior>
                          <a className="nav-link">Admissions</a>
                        </Link>

                        <Link href="/about/our-team" legacyBehavior>
                          <a className="nav-link">Faculty</a>
                        </Link>

                        <Link href="/careers" legacyBehavior>
                          <a className="nav-link">Careers</a>
                        </Link>

                        <Link href="/contact" legacyBehavior>
                          <a className="nav-link">Contact</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`fixed-cta ${
              isMambakkam || isChengalpattu ? "btm" : ""
            }`}>
            {isMambakkam ? (
              <Link
                href="https://api.whatsapp.com/send?phone=7448450450"
                passHref>
                <a
                  className="whatsapp-cta"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="whatsappImg"
                    src="/assets/icons/whatsapp.png"
                    alt="whatsapp-icon"
                  />
                </a>
              </Link>
            ) : isChengalpattu ? (
              <Link
                href="https://api.whatsapp.com/send?phone=7092450450"
                passHref>
                <a
                  className="whatsapp-cta"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="whatsappImg"
                    src="/assets/icons/whatsapp.png"
                    alt="whatsapp-icon"
                  />
                </a>
              </Link>
            ) : (
              <Link
                href="https://api.whatsapp.com/send?phone=7092450450"
                passHref>
                <a
                  className="whatsapp-cta"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="whatsappImg"
                    src="/assets/icons/whatsapp.png"
                    alt="whatsapp-icon"
                  />
                </a>
              </Link>
            )}

            <Link href="/enquiry-form" legacyBehavior passHref>
              <a
                className="enquiry-cta"
                target="_blank"
                rel="noopener noreferrer">
                Enquire Now
              </a>
            </Link>
          </div>
        </div>

        <hr className={styles.hrLine} />
        <p className={"text-center py-3 m-0" + " " + styles.bottomText}>
          Vikas Mantra Public School © {currentYear} | All Rights Reserved |
          Coded by{" "}
          <Link href="https://benfy.co/">
            <a target="_blank" rel="noopener noreferrer">
              Benfy
            </a>
          </Link>
        </p>
      </div>
    </>
  );
};
