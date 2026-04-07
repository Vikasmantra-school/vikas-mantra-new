"use client";
import styles from "./style.module.css";
import Form from "react-bootstrap/Form";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { useState, useRef } from "react";
import VmpsLogin from "../../components/home/vmpslogin";
import { useRouter } from "next/router";

import Select from "react-select";

const classOptions = [
  "LKG",
  "UKG",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
].map((cls) => ({ value: cls, label: cls }));

const campusOptions = [
  { value: "Mambakkam", label: "Mambakkam" },
  { value: "Chengalpattu", label: "Chengalpattu" },
];
const groupOptions = [
  {
    value: "Group-1",
    label:
      "Group 1- Science: Physics, Chemistry, Mathematics/Psychology, Biology + AI",
  },
  {
    value: "Group-2",
    label:
      "Group 2- Computer Science: Physics, Chemistry, Mathematics, Computer Science + AI",
  },
  {
    value: "Group-3",
    label:
      "Group 3 - Commerce: Accountancy, Commerce, Economics, Maths/IP/Psychology + AI",
  },
];

const EnquiryForm = () => {
  const pageTitle = "Enquiry Form";

  const router = useRouter();
  // React-Select states
  const [classOption, setClassOption] = useState(null);
  const [campusOption, setCampusOption] = useState(null);
  const [groupOption, setGroupOption] = useState(null);

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [lastClass, setLastClass] = useState("");
  const [currentSchool, setCurrentSchool] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherEmail, setFatherEmail] = useState("");
  const [fatherNumber, setFatherNumber] = useState("");
  const [admissionCommunication, setAdmissionCommunication] = useState("");

  const [campusValue, setCampusValue] = useState("");
  const [standard, setStandard] = useState("");
  const [group, setGroup] = useState("");

  //form-sheet-integration
  const formRef = useRef(null);
  const scriptUrlChengalpattu =
    "https://script.google.com/macros/s/AKfycbxTmGsy9dKetRzE4P9M7WCr2H9b6UEzSQSMiYp1vzIrm8fKsZcO5KmZdrT3ydI4CCgZ/exec";
  // above is admissions@vikasmantra.org

  // "https://script.google.com/macros/s/AKfycbyVhNnoCfhBoJ1CCHftf23kN8E_ltUnH-aifTnzT0_0D8KOy4tWx0_EIoGCC9oDAMSiIA/exec";
  // above is matheen

  const scriptUrlMambakkam =
    // "https://script.google.com/macros/s/AKfycbwa06PaU7zhvjhvroNN43k5rMtlrHtCxY46Mad79jjc74OU0q-Ce7VlkS2OnZYKi0kzcA/exec";
    // above test
    "https://script.google.com/macros/s/AKfycby_uRrxbR6OmaARPxn4F2ofLjk3PwZHhBYE0B2ECJVfvjIRNcaggH_CxMh-y_GrO5TY/exec";
  // above is admissions.mambakkam@vikasmantra.org

  // "https://script.google.com/macros/s/AKfycbx03T_Gd3qn7GKJ99OrxmuXC4JkQ-hNbfJBpC3iuukhSvwI90YyscbgN4ZCrnRK72JRRQ/exec";
  // above is original
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!standard) {
      alert("Please select the class");
      return;
    }

    if (!campusValue) {
      alert("Please select the campus");
      return;
    }

    if (standard === "11th" && !group) {
      alert("Please select the group");
      return;
    }
    setLoading(true);

    let scriptUrl = scriptUrlChengalpattu;
    if (campusValue === "Chengalpattu") {
      scriptUrl = scriptUrlChengalpattu;
    } else if (campusValue === "Mambakkam") {
      scriptUrl = scriptUrlMambakkam;
    }

    //form-data-clear-after-submit

    setName("");
    setDob("");
    setLastClass("");
    setCurrentSchool("");
    setFatherEmail("");
    setFatherName("");
    setFatherNumber("");
    setAdmissionCommunication("");

    setClassOption(null);
    setCampusOption(null);
    setGroupOption(null);

    setStandard("");
    setCampusValue("");
    setGroup("");

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        // alert("Thank You :) Our admission officer will contact you shortly");
        if (campusValue == "Chengalpattu") {
          router.push("/chengalpattu-site/thankyou");
        } else if (campusValue == "Mambakkam") {
          router.push("/mambakkam-site/thankyou");
        } else {
          alert("Our admission officer will contact you shortly");
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <style>{`

    body {
    background: #F5F5F5;
    }

    `}</style>

      <Breadcrumb pageName={pageTitle} />

      <section className={"pt60 pb60 " + " " + " " + styles.eqBg}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="AnimeStarts">
                <h2 className="AnimeElement">Admissions Enquiry Form</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={" position-relative pb80" + " " + styles.formTop}>
        <div className="container">
          <div className="row">
            <div
              className={
                "col-xl-10 col-lg-11 col-md-12 col-sm-12 mt-xs-5" +
                " " +
                styles.formCenter
              }>
              <div className={styles.enquiryForm}>
                <Form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                  <div className={"row" + " " + styles.form}>
                    <div className="col-md-5">
                      <div className="AnimeStarts">
                        <h5 className="mb-5 AnimeElement">Child Information</h5>
                      </div>

                      <Form.Group
                        className="mb-5 AnimeStarts"
                        controlId="formBasicEmail">
                        <Form.Label className="AnimeElement">
                          Name of the Child
                        </Form.Label>
                        <Form.Control
                          required
                          name="Name"
                          className={styles.formText}
                          type="text"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-5 AnimeStarts">
                        <Form.Label className="AnimeElement">
                          Student Date of Birth
                        </Form.Label>
                        <Form.Control
                          required
                          name="DOB"
                          className={styles.formText}
                          type="date"
                          value={dob}
                          onChange={(event) => setDob(event.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-5 AnimeStarts">
                        <Form.Label className="AnimeElement">
                          Last Class Studied
                        </Form.Label>
                        <Form.Control
                          required
                          name="Last Class Studied"
                          className={styles.formText}
                          type="text"
                          value={lastClass}
                          onChange={(event) => setLastClass(event.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-5 AnimeStarts">
                        <Form.Label className="AnimeElement">
                          Name of the Current school
                        </Form.Label>
                        <Form.Control
                          required
                          name="Name Of The Current School"
                          className={styles.formText}
                          type="text"
                          value={currentSchool}
                          onChange={(event) =>
                            setCurrentSchool(event.target.value)
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-5 AnimeStarts">
                        <Form.Label className="AnimeElement">
                          Admission seeking for
                        </Form.Label>
                        <Select
                          options={classOptions}
                          value={classOption}
                          onChange={(selected) => {
                            setClassOption(selected);
                            setStandard(selected?.value || "");
                            setGroup("");
                            setGroupOption(null);
                          }}
                          placeholder="-- Select Class --"
                          classNamePrefix="rs"
                          className={styles.reactSelect}
                        />
                        <input
                          type="hidden"
                          name="Admission Seeking For"
                          value={standard}
                        />
                      </Form.Group>

                      {standard === "11th" && (
                        <Form.Group className="mb-5 AnimeStarts">
                          <Form.Label>Select Group</Form.Label>

                          <Select
                            options={groupOptions}
                            value={groupOption}
                            onChange={(selected) => {
                              setGroupOption(selected);
                              setGroup(selected?.value || "");
                            }}
                            placeholder="-- Select Group --"
                            isSearchable={false}
                            classNamePrefix="rs"
                            className={styles.reactSelect}
                          />

                          <input
                            type="hidden"
                            name="11th Group"
                            value={group}
                          />
                        </Form.Group>
                      )}
                    </div>

                    <div className="col-md-5 offset-md-1">
                      <div className={styles.formPb}>
                        <div className="AnimeStarts">
                          <h5 className="mb-5 AnimeElement">
                            Parent Information
                          </h5>
                        </div>

                        <Form.Group className="mb-5 AnimeStarts">
                          <Form.Label className="AnimeElement">
                            Name (Father / Mother)
                          </Form.Label>
                          <Form.Control
                            required
                            name="Father Name"
                            className={styles.formText}
                            type="text"
                            value={fatherName}
                            onChange={(event) =>
                              setFatherName(event.target.value)
                            }
                          />
                        </Form.Group>

                        <div className="mb-5">
                          <div className="row">
                            <Form.Group className="col-md-6 mb-5 AnimeStarts">
                              <Form.Label className="AnimeElement">
                                Phone Number
                              </Form.Label>
                              <Form.Control
                                required
                                name="Father Number"
                                className={styles.formText}
                                type="number"
                                value={fatherNumber}
                                onChange={(event) =>
                                  setFatherNumber(event.target.value)
                                }
                              />
                            </Form.Group>

                            <Form.Group className="col-md-6 mb-5 AnimeStarts">
                              <Form.Label className="AnimeElement">
                                Email
                              </Form.Label>
                              <Form.Control
                                required
                                name="Father Email"
                                className={styles.formText}
                                type="email"
                                value={fatherEmail}
                                onChange={(event) =>
                                  setFatherEmail(event.target.value)
                                }
                              />
                            </Form.Group>
                            <Form.Group className="mb-5 AnimeStarts">
                              <Form.Label className="mb-2 AnimeElement">
                                Location and Pincode
                              </Form.Label>
                              <Form.Control
                                required
                                name="Admission Of Communication"
                                className={styles.formText}
                                type="text"
                                value={admissionCommunication}
                                onChange={(event) =>
                                  setAdmissionCommunication(event.target.value)
                                }
                              />
                            </Form.Group>
                            <div className="col">
                              <Form.Group className="mb-5 AnimeStarts">
                                <Form.Label className=" AnimeElement">
                                  Campus
                                </Form.Label>
                                <Select
                                  options={campusOptions}
                                  value={campusOption}
                                  onChange={(selected) => {
                                    setCampusOption(selected);
                                    setCampusValue(selected?.value || "");
                                  }}
                                  placeholder="-- Select Campus --"
                                  classNamePrefix="rs"
                                  className={styles.reactSelect}
                                />
                                <input
                                  type="hidden"
                                  name="campus"
                                  value={campusValue}
                                />
                              </Form.Group>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-11">
                      <button
                        type="submit"
                        className={"brownBtn " + styles.submitBtn}
                        disabled={loading}>
                        {loading ? "Loading..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.loginBanner}>
          <VmpsLogin />
        </div>
      </section>
    </>
  );
};

export default EnquiryForm;
