import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import VikasLogo from "../../public/assets/VikasLogo.png";
import styles from "./style.module.css";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import PopupImageOld from "../../public/assets/Popups/Vikas-Social-Ad-2.png";
// import PopupImageNew from '../../public/assets/Popups/popup-creative.png'
import PopupImageNew from "../../public/assets/Popups/Admission-Open-Popup.png";
import InstaLogo from "../../public/assets/icons/InstaLogo.png";
import FbLogo from "../../public/assets/icons/FbLogo.png";
import YtLogo from "../../public/assets/icons/YtLogo.png";
import LinkedInLogo from "../../public/assets/icons/LinkedInLogo.png";
import { useRouter } from "next/router";

export const Footer = () => {
  const { asPath } = useRouter();

  const isMambakkam = asPath.startsWith("/mambakkam-site");
  const isChengalpattu = asPath.startsWith("/chengalpattu-site");

  //popup-integration

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const [dropdownValue, setDropdownValue] = useState("");

  //form-sheet-integration

  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbzx3dMf1Pp-SqClOxBO0UnERO_cqNBB6kNuLV5y6q84At15I5NwelXIpxuWiB44A2rY/exec";
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setName("");
    setEmail("");
    setNumber("");
    setDropdownValue("");

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        alert("Our admission officer will contact you shortly");
        setLoading(false);
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
        <div className="container">
          <div className="row ">
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
                      onChange={(event) => setDropdownValue(event.target.value)}
                      value={dropdownValue}>
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
                      className={styles.sendBtn + " btn btn-light mt-4"}
                    />
                  </div>
                </form>

                <p className="mt-4 mb-0">
                  Our admission officer will contact you shortly
                </p>
              </div>
            </div>

            <div className=" offset-lg-1 col-lg-7 col-md-12">
              <div className="row align-items-center">
                <div className={"col-md-4 "}>
                  <div className={styles.logoCol}>
                    <Image
                      src={VikasLogo}
                      alt="image"
                      className={styles.logo}
                    />
                  </div>
                </div>

                <div className={"col-md-8 "}>
                  <div className={styles.aboutCol}>
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

              <div className="row">
                <div className={" col-md-6"}>
                  <div className={styles.contactUs}>
                    <h3>CONTACT US</h3>
                    {isMambakkam ? (
                      <>
                        <p>Vikas Mantra Public School </p>
                        <p> Vandalur to Kelambakkam Road, </p>
                        <p> Mambakkam, Chennai,</p>
                        <p>Tamil Nadu 600127</p>
                        <p>
                          Landline:{" "}
                          <a href="tel:+914427471689">044-2747-1689</a>
                        </p>
                        <p>
                          Mobile: <a href="tel:+917448450450">7448 450 450</a>
                        </p>

                        <p>
                          <a
                            href="mailto:admissions.mambakkam@vikasmantra.org "
                            target="_blank">
                            admissions.mambakkam@vikasmantra.org
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
                      </>
                    ) : isChengalpattu ? (
                      <>
                        <p> S.No:168,168/3, Off Mahindra World City, </p>
                        <p> Anjur 603204, Chengalpattu</p>
                        <p> info@vikasmantra.org</p>

                        <p>
                          <a
                            href="mailto:info.mambakkam@vikasmantra.org "
                            target="_blank">
                            info.mambakkam@vikasmantra.org
                          </a>
                        </p>
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
                      </>
                    ) : (
                      <>
                        <p>Vikas Mantra Public School </p>
                        <p> Vandalur to Kelambakkam Road, </p>
                        <p> Mambakkam, Chennai,</p>
                        <p>Tamil Nadu 600127</p>
                        <p>
                          Landline:{" "}
                          <a href="tel:+914427471689">044-2747-1689</a>
                        </p>
                        <p>
                          Mobile: <a href="tel:+917448450450">7448 450 450</a>
                        </p>

                        <p>
                          <a
                            href="mailto:admissions.mambakkam@vikasmantra.org "
                            target="_blank">
                            admissions.mambakkam@vikasmantra.org
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
                        <br />
                        <p> S.No:168,168/3, Off Mahindra World City, </p>
                        <p> Anjur 603204, Chengalpattu</p>
                        <p> info@vikasmantra.org</p>

                        <p>
                          <a
                            href="mailto:info.mambakkam@vikasmantra.org "
                            target="_blank">
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
                      </>
                    )}
                  </div>
                </div>

                <div className={"col-md-6 "}>
                  <div className={styles.quickLinksCol}>
                    <h3>QUICK LINKS</h3>
                    <div className={styles.quickLink + " row d-none d-md-flex"}>
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
                      </div>

                      <div className="col-6 col-md-4 col-lg-4 col-sm-4">
                        <Link href="/enquiry-form" legacyBehavior>
                          <a className="nav-link">EnquiryForm</a>
                        </Link>

                        <Link href="/events" legacyBehavior>
                          <a className="nav-link">Gallery</a>
                        </Link>

                        <Link href="/admissions" legacyBehavior>
                          <a className="nav-link">Admissions</a>
                        </Link>
                      </div>

                      <div className="col-6 col-md-4 col-lg-4 col-sm-4">
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

          <div className="row watsapp-icon">
            <div className="col-sm-12">
              {/* <Link href="/campaign" legacyBehavior>
                <a
                  className="fixed-app callBtn"
                  target="_blank"
                  rel="noopener noreferrer">
                  Admissions Enquiry
                </a>
              </Link> */}

              <Link href="https://api.whatsapp.com/send?phone=7330098765">
                <a
                  className="whatsappDiv"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="whatsappImg"
                    src="/assets/icons/whatsapp.png"
                    alt="whatsapp-icon"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <hr className={styles.hrLine} />
        <p className={"text-center py-3 m-0" + " " + styles.bottomText}>
          Vikas Mantra Public School © 2023 | All Rights Reserved | Coded by{" "}
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
