import React from "react";
import styles from "./style.module.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { useState, useRef } from "react";
import { Nav, Tab } from "react-bootstrap";

function Career() {
  const [activeKey, setActiveKey] = useState("tab1");
  const namecheck = useRef();
  const pageTitle = "Career";

  //form-data-clear-after-submit

  const getInitialState = () => {
    const value = "CHEMISTRY";
    return value;
  };

  const [jobOpening, setJobOpening] = useState(getInitialState);
  const [campusValue, setCampusValue] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  let errmsg = "Invalid name";

  const ValidateEmail = () => {
    var lblError = document.getElementById("lblError");

    lblError.innerHTML = "";

    var nameExpr = /[^A-Za-z0-9]+/;

    if (!nameExpr.test(namecheck)) {
      lblError.innerHTML = errmsg;
    }
  };

  const [methodOfCommunication, setCommunication] = useState("email");

  //form-sheet-integration

  const formRef = useRef(null);
  const scriptUrlChengalpattu =
    "https://script.google.com/macros/s/AKfycbwSQ-HDhi9718SFb6L0Yxeqv0rvytpsnRxCb9q7NdXVvi6BsaVUbKxLRJ2CsEtZ8WJx/exec";
  // above is matheen

  const scriptUrlMambakkam =
    "https://script.google.com/macros/s/AKfycbyFKnIOsJIlv47Xx0TYV2jbJqQrOGZLW5LRLQPmgu0S0NONJeYuZplefMAU4SiKiYo/exec";

  // "https://script.google.com/macros/s/AKfycbw3cVmLmrjniePfI9yHuKwUil6I7y8mSoDK7GLbD5_QL4JQz9wfpXVXKnYJtRJWJiPF4g/exec";
  // above is original
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    ValidateEmail();
    e.preventDefault();
    setLoading(true);

    let scriptUrl = scriptUrlChengalpattu;
    if (campusValue === "Chengalpattu") {
      scriptUrl = scriptUrlChengalpattu;
    } else if (campusValue === "Mambakkam") {
      scriptUrl = scriptUrlMambakkam;
    }
    setCampusValue("");
    setName("");
    setAddress("");
    setNumber("");
    setJobOpening("");
    setMail("");

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        alert("SUCCESSFULLY SUBMITTED");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Breadcrumb pageName={pageTitle} />

      <section className={"pt60" + " " + "pb60"}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="AnimeStarts">
                <h2 className="AnimeElement">Careers</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"whitebg" + " " + "pt60" + " " + "pb60"}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="AnimeStarts">
                <h2 className="ulineRed AnimeElement">WE ARE HIRING! </h2>
              </div>
              <div className="AnimeStarts">
                <p className="pt-4 AnimeElement">
                  At the VIKAS MANTRA PUBLIC SCHOOL the teachers are handpicked
                  through an extensive and exhaustive process. Our selection of
                  the right candidate not only depends on the credentials, but
                  also their student handling abilities.
                </p>
              </div>
              <div className="AnimeStarts">
                <p className="AnimeElement">
                  We are committed to building great careers for our students.
                  This mission inspires us to recruit competent and committed
                  faculty.
                </p>
              </div>
              <div className="AnimeStarts">
                <p className="AnimeElement">
                  Remuneration & perks will be the best in the Industry and be
                  commensurate with qualification and experience.
                </p>
              </div>
              <Tab.Container
                activeKey={activeKey}
                onSelect={(e) => setActiveKey(e)}>
                <Nav variant="pills" className={styles.customPills}>
                  <Nav.Item>
                    <Nav.Link eventKey="tab1">Chengalpattu </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab2">Mambakkam</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="tab1">
                    <div className="AnimeStarts">
                      <p className={styles.textBold + " AnimeElement"}>
                        Vikas Mantra Public School - Mahindra City is looking
                        for qualified, dedicated and learner centric EDUCATORS
                        to join our team in the following positions :
                      </p>
                    </div>

                    <div className={styles.tableContainer}>
                      <Table
                        bordered
                        className={"mt-4" + " " + styles.tableborder}>
                        <tbody className="AnimeStarts">
                          <tr>
                            <th className="AnimeElement fw-bold">POSITION</th>
                            {/* <th className='AnimeElement fw-bold'>REQUIREMENTS</th> */}
                            <style jsx>
                              {`
                                th {
                                  background-color: #aa182c;
                                  color: #fff;
                                }
                              `}
                            </style>
                          </tr>

                          <tr>
                            <td className="AnimeElement">PGT- ENGLISH</td>
                            {/* <td className='AnimeElement'>
                      ART</td> */}
                            {/* <td className='AnimeElement'>PG B.ed with 3-5years Experience</td> */}
                          </tr>
                          <tr>
                            <td className="AnimeElement">
                              PSYCHOLOGIST- STUDENT COUNSELOR
                            </td>
                          </tr>
                          <tr>
                            <td className="AnimeElement">TGT- CHEMISTRY</td>
                          </tr>
                          <tr>
                            <td className="AnimeElement">
                              NTT- KG COORDINATOR
                            </td>
                          </tr>
                          <tr>
                            <td className="AnimeElement">PET/YOGA TEACHER</td>
                          </tr>

                          {/* 
                    <tr><td>PRT & TGT- HINDI</td></tr>
                    <tr><td>TGT – ENGLISH</td></tr>
                    <tr><td>PRT – ENGLISH</td></tr>
                    <tr><td> PRT- HOME ROOM TEACHER</td></tr>
                    <tr><td>TGT - SOCIAL SCIENCE</td></tr>
                    <tr>
                      <td>PGT - CHEMISTRY</td>
                    </tr>
                    <tr><td>PGT - PHYSICS</td></tr>
                    <tr><td>PGT - BIOLOGY</td></tr>
                    <tr><td>SPECIAL EDUCATOR</td></tr>
                    <tr><td>LAB ATTENDANT <span className={styles.add_color}>(BIOLOGY, CHEMISTRY,PHYSICS)</span></td></tr>
                    */}
                        </tbody>
                      </Table>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab2">
                    <div className="AnimeStarts">
                      <p className={styles.textBold + " AnimeElement"}>
                        Vikas Mantra Public School - Mambakkam is looking for
                        qualified, dedicated and learner centric EDUCATORS to
                        join our team in the following positions :
                      </p>
                    </div>

                    <div className={styles.tableContainer}>
                      <Table
                        bordered
                        className={"mt-4" + " " + styles.tableborder}>
                        <tbody className="AnimeStarts">
                          <tr>
                            <th className="AnimeElement fw-bold">POSITION</th>
                            {/* <th className='AnimeElement fw-bold'>REQUIREMENTS</th> */}
                            <style jsx>
                              {`
                                th {
                                  background-color: #aa182c;
                                  color: #fff;
                                }
                              `}
                            </style>
                          </tr>

                          <tr>
                            <td className="AnimeElement">PGT- ENGLISH</td>
                            {/* <td className='AnimeElement'>
                      ART</td> */}
                            {/* <td className='AnimeElement'>PG B.ed with 3-5years Experience</td> */}
                          </tr>
                          <tr>
                            <td className="AnimeElement">
                              PSYCHOLOGIST- STUDENT COUNSELOR
                            </td>
                          </tr>
                          <tr>
                            <td className="AnimeElement">TGT- CHEMISTRY</td>
                          </tr>
                          <tr>
                            <td className="AnimeElement">
                              NTT- KG COORDINATOR
                            </td>
                          </tr>
                          <tr>
                            <td className="AnimeElement">PET/YOGA TEACHER</td>
                          </tr>

                          {/* 
                    <tr><td>PRT & TGT- HINDI</td></tr>
                    <tr><td>TGT – ENGLISH</td></tr>
                    <tr><td>PRT – ENGLISH</td></tr>
                    <tr><td> PRT- HOME ROOM TEACHER</td></tr>
                    <tr><td>TGT - SOCIAL SCIENCE</td></tr>
                    <tr>
                      <td>PGT - CHEMISTRY</td>
                    </tr>
                    <tr><td>PGT - PHYSICS</td></tr>
                    <tr><td>PGT - BIOLOGY</td></tr>
                    <tr><td>SPECIAL EDUCATOR</td></tr>
                    <tr><td>LAB ATTENDANT <span className={styles.add_color}>(BIOLOGY, CHEMISTRY,PHYSICS)</span></td></tr>
                    */}
                        </tbody>
                      </Table>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
              <div className="AnimeStarts">
                <p className="AnimeElement">
                  Salary will not be a limiting factor for the right candidate.{" "}
                </p>

                <p className="AnimeElement">
                  Apply with your resume and a passport size photo through our
                  website or Email hr@vikasmantra.org
                </p>

                {/* <p className="AnimeElement">
                  For more details, Call :
                  <a className={styles.tel} href="tel:+917092450450"> +91 7092450450</a>,
                  <a className={styles.tel} href="tel:+917330098765">+91 7330098765</a>
                </p> */}
              </div>
            </div>

            <div className="col-md-6">
              <div
                className={
                  "imgUp imgBgColor pastelLightPink AnimeStarts " +
                  " " +
                  styles.careerImg
                }>
                <img
                  src="/assets/banners/we-are-hiring.png"
                  alt="image"
                  className="img-fluid AnimeElement"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          "greybg VectorSpiralBlue position-relative" +
          " " +
          "pt60" +
          " " +
          "pb60" +
          " " +
          styles.careerBg
        }>
        <div className="container">
          <Form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
            <div className={"row"}>
              <div className={"col-md-10" + " " + styles.formCenter}>
                <div className={styles.enquiryForm}>
                  <div className={"row gx-0 gx-md-5" + " " + styles.form}>
                    <div className="col-md-12">
                      <div className="AnimeStarts">
                        <h5 className="mb-5 AnimeElement">Candidate </h5>
                      </div>
                    </div>

                    <div className="col-md-12 col-lg-4 col-sm-12">
                      <div className="mb-5 AnimeStarts">
                        <label className="AnimeElement">
                          Name of the Candidate{" "}
                        </label>
                        <Form.Control
                          className={styles.formText + " AnimeElement"}
                          type="text"
                          name="Name of the Candidate"
                          required
                          onChange={(event) => setName(event.target.value)}
                          value={name}
                          ref={namecheck}
                          onBlur={ValidateEmail}
                        />
                        <span id="lblError" />
                      </div>

                      <div className="mb-5 AnimeStarts">
                        <label className="AnimeElement">Mailing address</label>

                        <Form.Control
                          className={
                            styles.formText + " " + "mb-5 AnimeElement "
                          }
                          type="text"
                          name="Address"
                          required
                          onChange={(event) => setAddress(event.target.value)}
                          value={address}
                        />

                        <Form.Control
                          className={
                            styles.formText + " " + "mb-5 AnimeElement"
                          }
                          type="text"
                          name="Address"
                        />

                        <Form.Control
                          className={
                            styles.formText + " " + "mb-5 AnimeElement"
                          }
                          type="text"
                          name="Address"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-lg-8 col-sm-12">
                      <div className={styles.formPb}>
                        <div className="mb-md-5 AnimeStarts">
                          <label className="AnimeElement">Job Opening</label>

                          <Form.Select
                            aria-label="Default select example"
                            name="Job Opening"
                            value={jobOpening}
                            onChange={(event) =>
                              setJobOpening(event.target.value)
                            }
                            className={
                              styles.formText + " AnimeElement form-select "
                            }>
                            <option value="PGT ENGLISH">PGT- ENGLISH</option>
                            <option value="PSYCHOLOGIST- STUDENT COUNSELOR">
                              PSYCHOLOGIST- STUDENT COUNSELOR
                            </option>
                            <option value="TGT CHEMISTRY">
                              TGT- CHEMISTRY
                            </option>
                            <option value="NTT KG COORDINATOR">
                              NTT- KG COORDINATOR
                            </option>
                            <option value="PET/YOGA TEACHER">
                              PET/YOGA TEACHER
                            </option>
                            <option value="PHYICS">
                              {" "}
                              PHYSICS/BIOLOGY - BSC
                            </option>
                            <option value="CHEMISTRY">CHEMISTRY </option>
                            <option value="BIOLOGY">PGT MATHEMATICS</option>
                            <option value="COMPUTER SCIENCE">
                              PGT CHEMISTRY
                            </option>
                            <option value="STUDENT COUNSELLOR">
                              STUDENT COUNSELLOR
                            </option>
                            <option value="ACCOUNTANT">ACCOUNTANT </option>
                          </Form.Select>
                        </div>
                        <div className={styles.campusInput}>
                          <Form.Select
                            aria-label="Default select example"
                            name="Campus"
                            value={campusValue}
                            onChange={(event) => setCampusValue(event.target.value)}
                            className={
                              styles.formText + " AnimeElement form-select "
                            }>
                            <option value="" disabled hidden>
                              {" "}
                              Campus
                            </option>
                            <option value="Chengalpattu">Chengalpattu</option>
                            <option value="Mambakkam">Mambakkam</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="mb-3 AnimeStarts">
                        <h5 className="mb-4 AnimeElement">
                          Method of Communication
                        </h5>

                        <div className="form-check AnimeStarts">
                          <input
                            className="form-check-input coupon_question AnimeElement"
                            type="radio"
                            name="checking-radio"
                            checked={methodOfCommunication == "email"}
                            onChange={() => setCommunication("email")}
                          />

                          <label
                            className="form-check-label AnimeElement"
                            htmlFor="flexRadioDefault2">
                            Email
                          </label>
                        </div>
                        <div className="form-check AnimeStarts">
                          <input
                            className="form-check-input coupon_question AnimeElement"
                            type="radio"
                            name="checking-radio"
                            checked={methodOfCommunication == "phone"}
                            onChange={() => setCommunication("phone")}
                          />

                          <label
                            className="form-check-label AnimeElement"
                            htmlFor="flexRadioDefault1">
                            Phone
                          </label>
                        </div>
                      </div>
                      {methodOfCommunication == "email" && (
                        <div className="mb-3 mail-check">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label AnimeElement">
                            Email
                          </label>

                          <input
                            type="email"
                            className={
                              "form-control form-width AnimeElement " +
                              " " +
                              styles.formText
                            }
                            id="txtEmail"
                            name="Mail Id"
                            required
                            onChange={(event) => setMail(event.target.value)}
                            value={mail}
                          />
                        </div>
                      )}
                      {methodOfCommunication == "phone" && (
                        <div className="mb-3 phone-check">
                          <label
                            htmlFor="exampleInputPassword1 AnimeElement "
                            className="form-label">
                            Phone
                          </label>
                          <input
                            type="number"
                            className={
                              "form-control form-width AnimeElement " +
                              " " +
                              styles.formText
                            }
                            required
                            name="Number"
                            onChange={(event) => setNumber(event.target.value)}
                            value={number}
                          />
                        </div>
                      )}

                      <div></div>
                    </div>

                    <a href="#">
                      <input
                        className={"brownBtn " + styles.submitBtn}
                        type="submit"
                        value={loading ? " Loading..." : " Submit "}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}

export default Career;
