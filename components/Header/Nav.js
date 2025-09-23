import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import styles from "./style.module.css";
import Link from "next/link";
import MobileNav from "../Header/MobileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { mambakkamMenu } from "../../data/menu";
import { chengalpattuMenu } from "../../data/menu";
import { act } from "react";
import { useCampus } from "../../hooks/useCampus";
import CampusDropdown from "./campusDropdown";
import CustomCaret from "../svg/CustomCaret";

const Nav = () => {
  const { asPath } = useRouter();
  const dropdownSub = useRef("");

  var pageName = asPath.replace("/", "");

  const { campus, isMambakkam, isChengalpattu } = useCampus();

  const [selectedCampus, setSelectedCampus] = useState("Select campus");

  useEffect(() => {
    if (campus === "mambakkam") {
      setSelectedCampus("Mambakkam");
    } else if (campus === "chengalpattu") {
      setSelectedCampus("Chengalpattu");
    } else {
      setSelectedCampus("Select Campus");
    }
  }, [campus]);

  let subMenu = null;
  if (isMambakkam) {
    subMenu = {
      bg: "#45458A",
      color: "#fff",
      headText: "Mambakkam",
      afflNo: "1930634",
    };
  } else if (isChengalpattu) {
    subMenu = {
      bg: "#FFB800",
      color: "#1D1D1D",
      headText: "Chengalpattu",
      afflNo: "1931307",
    };
  }

  function hamburgerMenu(e) {
    let menu = document.getElementById("mobMenu");
    let hamburgerMenu = document.getElementById("hamburger");
    menu.classList.toggle("mob-menu-hdden");
    hamburgerMenu.classList.toggle("is-active");

    if (hamburgerMenu.classList.contains("is-active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  function showDropdownSub() {
    dropdownSub.current.classList.remove("d-none");
  }

  function hideDropdownSub() {
    dropdownSub.current.classList.add("d-none");
  }

  return (
    <>
      <header
        className={
          "homeheader stickyHeader" +
          " " +
          pageName +
          ` ${pageName === "" ? "home" : "position-relative"}`
        }>
        <nav
          className={styles.navTransparent + " navbar-expand-lg py-2 py-md-0"}>
          <div className="container">
            <div className="row">
              <div className="col-5 col-lg-2 d-flex align-items-center">
                <Link
                  // href={
                  //   isChengalpattu
                  //     ? " /chengalpattu-site"
                  //     : isMambakkam
                  //     ? "/mambakkam-site"
                  //     : "/"
                  // }
                  href="/"
                  legacyBehavior>
                  <a className={styles.mainLogo + " " + "navbar-brand"}>
                    <img src="/assets/common-logo.png" alt="Vikas Mantra" />
                    {/* {pageName === "" ? (
                      <picture>
                        <source
                          media="(max-width:660px)"
                          srcSet="/assets/vmps-color.png"
                        />
                        <img src="/assets/vmps-white-logo.png" alt="image" />
                      </picture>
                    ) : ( 
                    <img src="/assets/vmps-color.png" alt="Vikas Mantra" />
                     )} */}
                  </a>
                </Link>
              </div>

              <div className="d-none d-md-flex col-7 col-lg-8 d-flex align-items-center justify-content-center">
                <nav
                  id="mainMenu"
                  className={
                    styles.navTransparent + " " + "navbar-expand-lg py-2"
                  }>
                  <div className="collapse navbar-collapse desktop-menu" id="">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                      <li
                        className={
                          pageName === "" ? "active nav-item" : "nav-item"
                        }>
                        <Link href="/" legacyBehavior>
                          <a className="nav-link" aria-current="page">
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link href="/about" legacyBehavior>
                          <a
                            className="nav-link dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            About
                            <CustomCaret color="black" />
                          </a>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link href="/about" legacyBehavior>
                              <a className="dropdown-item">
                                About Vikas Mantra
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/vision-and-philosophy"
                              legacyBehavior>
                              <a className="dropdown-item">
                                Our Vision & Philosophy
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/message-from-chairman"
                              legacyBehavior>
                              <a className="dropdown-item">
                                Chairman’s Message
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/message-from-advisor"
                              legacyBehavior>
                              {/* <a className="dropdown-item">Our Advisor </a> */}
                              <a className="dropdown-item">
                                Advisor&apos;s Message{" "}
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={
                          pageName === "admissions"
                            ? "active nav-item"
                            : "nav-item"
                        }>
                        <Link legacyBehavior href="/admissions">
                          <a className="nav-link">Admissions</a>
                        </Link>
                      </li>

                      <li className="nav-item dropdown">
                        <Link href="/learning" legacyBehavior>
                          <a
                            className="nav-link dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Learning
                            <CustomCaret color="black" />
                          </a>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link href="/learning" legacyBehavior>
                              <a className="dropdown-item">
                                Why VIKAS MANTRA PUBLIC SCHOOL
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/learning/curriculum" legacyBehavior>
                              <a className="dropdown-item">Curriculum</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/learning/pre-primary-years"
                              legacyBehavior>
                              <a className="dropdown-item">Pre-Primary Years</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/learning/curriculum-framework"
                              legacyBehavior>
                              <a className="dropdown-item">
                                Curriculum Framework
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        className={
                          pageName === "enquiry-form"
                            ? "active nav-item"
                            : "nav-item"
                        }>
                        <Link
                          legacyBehavior
                          href="https://www.parentsalarmapp.com/">
                          <a
                            className="nav-link"
                            target="_blank"
                            rel="noopener noreferrer">
                            VMPS Login
                          </a>
                        </Link>
                      </li>

                      <li
                        className={
                          pageName === "contact"
                            ? "active nav-item"
                            : "nav-item"
                        }>
                        <Link legacyBehavior href="/contact">
                          <a className="nav-link">Contact Us</a>
                        </Link>
                      </li>
                      <li
                        className={
                          pageName === "careers"
                            ? "active nav-item"
                            : "nav-item"
                        }>
                        <Link legacyBehavior href="/careers">
                          <a className="nav-link">Careers</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="col-7 col-lg-2 d-flex align-items-center justify-content-end">
                <ul className="navbar-nav mb-lg-0 justify-content-end align-items-center w-100">
                  {/* <div className={styles.announcementPatch}>
                    Admission Open 2025 - 2026
                  </div>
                  <div>
                    <button className={styles.callBtn}>
                      {isMambakkam ? (
                        <Link href="tel:+9174484508450" legacyBehavior>
                          <a>
                            <FontAwesomeIcon
                              icon={faPhone}
                              className={styles.callIcon}
                            />
                            +91 744845 08450
                          </a>
                        </Link>
                      ) : (
                        

                        <Link href="tel:+91-7092450450" legacyBehavior>
                          <a>
                            <FontAwesomeIcon
                              icon={faPhone}
                              className={styles.callIcon}
                            />
                            +91 70924 50450
                          </a>
                        </Link>
                      )}
                    </button>
                  </div> */}

                  <div className="d-flex w-100 justify-content-between justify-content-lg-end align-items-center">
                    <CampusDropdown />

                    <div
                      onClick={(e) => hamburgerMenu(e)}
                      className="hamburger"
                      id="hamburger">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </ul>
              </div>
              <MobileNav />
            </div>
          </div>
        </nav>

        {subMenu && (
          <nav
            style={{
              backgroundColor: subMenu.bg,
              color: subMenu.color,
              zIndex: "1",
            }}
            className={styles.navTransparent + " " + "navbar-expand-lg py-2"}>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 d-flex align-items-center">
                  <div className={styles.submenuHead}>
                    <h3
                      style={{
                        color: subMenu.color,
                      }}
                      className="m-0">
                      {subMenu.headText}
                    </h3>
                    <small
                      style={{
                        color: subMenu.color,
                      }}
                      className="m-0 d-none d-md-block">
                      CBSE Affiliation No:
                      {subMenu.afflNo}
                    </small>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className=" h-100 collapse navbar-collapse desktop-menu justify-content-end"
                    id="">
                    {isMambakkam && (
                      <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end gap-5 mambakkam-menu">
                        <li
                          className={
                            pageName === "" ? "active nav-item" : "nav-item"
                          }>
                          <Link href="/mambakkam-site" legacyBehavior>
                            <a
                              className="nav-link text-white"
                              aria-current="page">
                              Our Campus
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item dropdown">
                          <Link href="#" legacyBehavior>
                            <a
                              className="nav-link dropdown-toggle text-white"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              About Us
                              <CustomCaret color="white" />
                            </a>
                          </Link>

                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                href="/mambakkam-site/about/message-from-principal"
                                legacyBehavior>
                                <a className="dropdown-item">
                                  Principal&apos;s Message
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/mambakkam-site/about/blog"
                                legacyBehavior>
                                <a className="dropdown-item">Blog</a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown">
                          <Link href="/mambakkam-site/campus" legacyBehavior>
                            <a
                              className="nav-link dropdown-toggle text-white"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Life of Campus
                              <CustomCaret color="white" />
                            </a>
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                href="/mambakkam-site/campus/classrooms"
                                legacyBehavior>
                                <a className="dropdown-item">Classrooms</a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/mambakkam-site/campus/laboratory"
                                legacyBehavior>
                                <a className="dropdown-item">Laboratories</a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/mambakkam-site/campus/speciality-room"
                                legacyBehavior>
                                <a className="dropdown-item">
                                  Speciality Rooms
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/mambakkam-site/campus/technology"
                                legacyBehavior>
                                <a className="dropdown-item">Technology</a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/mambakkam-site/campus/security"
                                legacyBehavior>
                                <a className="dropdown-item">Security</a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/mambakkam-site/campus/healthcare"
                                legacyBehavior>
                                <a className="dropdown-item">Healthcare</a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/mambakkam-site/campus/transportation"
                                legacyBehavior>
                                <a className="dropdown-item">Transportation</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        {/*     
                        <li className="nav-item dropdown">
                          <Link href="/mambakkam-site/learning" legacyBehavior>
                            <a
                              className="nav-link dropdown-toggle text-white"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Learning
                            </a>
                          </Link>

                          <ul className="dropdown-menu">
                            <li>
                              <Link href="/mambakkam-site/learning" legacyBehavior>
                                <a className="dropdown-item">
                                  Why VIKAS MANTRA PUBLIC SCHOOL
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/mambakkam-site/learning/curriculum" legacyBehavior>
                                <a className="dropdown-item">Curriculum</a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/mambakkam-site/learning/pre-primary-years"
                                legacyBehavior>
                                <a className="dropdown-item">
                                  Pre-Primary Years
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/mambakkam-site/learning/curriculum-framework"
                                legacyBehavior>
                                <a className="dropdown-item">
                                  Curriculum Framework
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                legacyBehavior
                                href="/mambakkam-site/learning/online-classes">
                                <a className="dropdown-item">Online Classes</a>
                              </Link>
                            </li>

                            <li
                              className="dropdownSub "
                              onMouseOver={showDropdownSub}
                              onMouseOut={hideDropdownSub}>
                              <Link legacyBehavior href="#">
                                <a className="dropdown-item dropdown-toggle">
                                  Newsletter
                                </a>
                              </Link>

                              <ul className="sub-menu d-none" ref={dropdownSub}>
                                <li>
                                  <Link
                                    href="/pdf/newsletter19-20-vol1.pdf"
                                    legacyBehavior>
                                    <a
                                      className="dropdown-item"
                                      target="_blank">
                                      2019 - 2020 : Vol 1
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/pdf/newsletter19-20-vol2.pdf"
                                    legacyBehavior>
                                    <a
                                      className="dropdown-item"
                                      target="_blank">
                                      2019 - 2020 : Vol 2
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/pdf/newsletter20-21-vol1.pdf"
                                    legacyBehavior>
                                    <a
                                      className="dropdown-item"
                                      target="_blank">
                                      2020 - 2021 : Vol 1
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/pdf/newsletter20-21-vol2.pdf"
                                    legacyBehavior>
                                    <a
                                      className="dropdown-item"
                                      target="_blank">
                                      2020 - 2021 : Vol 2
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/pdf/newsletter21-22-vol1.pdf"
                                    legacyBehavior>
                                    <a
                                      className="dropdown-item"
                                      target="_blank">
                                      2021 - 2022 : Vol 1
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/pdf/newsletter21-22-vol2.pdf"
                                    legacyBehavior>
                                    <a
                                      className="dropdown-item"
                                      target="_blank">
                                      2021 - 2022 : Vol 2
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/pdf/newsletter22-23-vol-1.pdf"
                                    legacyBehavior>
                                    <a
                                      className="dropdown-item"
                                      target="_blank">
                                      2022 - 2023 : Vol 1
                                    </a>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/pdf/newsletter22-23-vol-2.pdf"
                                    legacyBehavior>
                                    <a
                                      className="dropdown-item"
                                      target="_blank">
                                      2022 - 2023 : Vol 2
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li> */}

                        <li
                          className={
                            pageName === "enquiry-form"
                              ? "active nav-item"
                              : "nav-item"
                          }>
                          <Link legacyBehavior href="/mambakkam-site/events">
                            <a className="nav-link text-white">Gallery</a>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* <MobileNav selectedCampus={selectedCampus} /> */}
                </div>

                <div className="col-lg-3 d-flex align-items-center justify-content-end">
                  <div
                    className={`${styles.announcementPatch} d-none d-md-block`}>
                    Admission Open 2025 - 2026
                  </div>
                  <div className="subHamburger">menu</div>
                </div>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Nav;
