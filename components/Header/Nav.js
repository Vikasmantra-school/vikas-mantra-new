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

  const isActive = (path) =>
    pageName === path ? "active nav-item" : "nav-item";

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
      headText: "Vikas Mantra, Mambakkam",
      afflNo: "1930634",
      enquiryBg: "#FFB800",
      enquiryTxt: "#1D1D1D",
      mob: 7448450450,
    };
  } else if (isChengalpattu) {
    subMenu = {
      bg: "#FFB800",
      color: "#1D1D1D",
      headText: "Vikas Mantra, Chengalpattu",
      afflNo: "1931307",
      enquiryBg: "#45458A",
      enquiryTxt: "#FFFFFF",
      mob: 7092450450,
    };
  }

  const showSubmenu = !!subMenu;
  const mainHeaderRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const [showCommonHeader, setShowCommonHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // header heigh measuring
  useEffect(() => {
    const updateHeight = () => {
      if (mainHeaderRef.current) {
        setHeaderHeight(mainHeaderRef.current.offsetHeight);
      }
    };
    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (!showSubmenu) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setShowCommonHeader(true);
      } else if (currentScrollY < lastScrollY) {
        setShowCommonHeader(true); // scroll up → show main header
      } else {
        setShowCommonHeader(false); // scroll down → hide main header
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSubmenu, lastScrollY]);

  function hamburgerMenu(e) {
    let menu = document.getElementById("mobMenu");
    let hamburgerMenu = document.getElementById("hamburger");
    let subMenu = document.getElementById("mobSubMenu");
    let subHamburger = document.querySelector(".mobSubHamburger");

    if (!subMenu.classList.contains("mob-menu-hdden")) {
      subMenu.classList.add("mob-menu-hdden");
      subHamburger.classList.remove("is-active");
    }

    menu.classList.toggle("mob-menu-hdden");
    hamburgerMenu.classList.toggle("is-active");

    if (hamburgerMenu.classList.contains("is-active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  function subHamburgerMenu(e) {
    let menu = document.getElementById("mobSubMenu");
    let hamburgerMenu = document.querySelector(".mobSubHamburger");
    let mainMenu = document.getElementById("mobMenu");
    let mainHamburger = document.getElementById("hamburger");

    if (!mainMenu.classList.contains("mob-menu-hdden")) {
      mainMenu.classList.add("mob-menu-hdden");
      mainHamburger.classList.remove("is-active");
    }

    menu.classList.toggle("mob-menu-hdden");
    hamburgerMenu.classList.toggle("is-active");

    if (hamburgerMenu.classList.contains("is-active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <>
      <header
        ref={mainHeaderRef}
        className={"sticky"}
        style={{
          // transform: showCommonHeader
          //   ? "translateY(0)"
          //   : `translateY(-${headerHeight}px)`,
          // transition: "transform 0.15s ease",

          top: showCommonHeader ? 0 : `-${headerHeight}px`,
          transition: "top 150ms ease",
          zIndex: 51,
          boxShadow : isMambakkam ? 'none' : isChengalpattu ? 'none' : "0px 4px 8.5px rgba(0, 0, 0, 0.16)"
        }}>
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

              <div className="d-none d-lg-flex col-7 col-lg-8 d-flex align-items-center justify-content-center">
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
                          <a className="nav-link home-btn" aria-current="page">
                            Home
                          </a>
                        </Link>
                      </li>
                      <li
                        className={
                          pageName.startsWith("about")
                            ? "active nav-item dropdown"
                            : "nav-item dropdown"
                        }>
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
                                Chairman's Message
                              </a>
                            </Link>
                          </li>
                          {/* <li>
                            <Link
                              href="/about/message-from-advisor"
                              legacyBehavior>
                              <a className="dropdown-item">Our Advisor </a>
                              <a className="dropdown-item">
                                Advisor&apos;s Message{" "}
                              </a>
                            </Link>
                          </li> */}
                        </ul>
                      </li>
                      <li
                        className={
                          pageName.startsWith("admissions") ||
                          pageName.startsWith("enquiry-form")
                            ? "active nav-item dropdown"
                            : "nav-item dropdown"
                        }>
                        <Link legacyBehavior href="/admissions">
                          <a
                            className="nav-link dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Admissions
                            <CustomCaret color="black" />
                          </a>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              href="/admissions#v-pills-home"
                              legacyBehavior>
                              <a className="dropdown-item">
                                Admission Overview
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/admissions#admission-timeline"
                              legacyBehavior>
                              <a className="dropdown-item">
                                Admission Timeline
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/admissions#v-pills-messages"
                              legacyBehavior>
                              <a className="dropdown-item">
                                Admission Procedure
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/enquiry-form" legacyBehavior>
                              <a className="dropdown-item">Enquiry Form</a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        className={
                          pageName.startsWith("learning")
                            ? "active nav-item dropdown"
                            : " nav-item dropdown"
                        }>
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
                          pageName === "enquiry-form-x"
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
                          pageName.startsWith("contact")
                            ? "active nav-item dropdown"
                            : " nav-item dropdown"
                        }>
                        <Link legacyBehavior href="/contact">
                          <a
                            className="nav-link dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Contact
                            <CustomCaret color="black" />
                          </a>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link href="/contact" legacyBehavior>
                              <a className="dropdown-item">Contact Us</a>
                            </Link>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="tel:+917448450450">
                              +91 7448450450
                            </a>
                          </li>
                        </ul>
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
                    Admission Open 2026 - 2027
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
                      {/* <span className="line"></span> */}
                      <span className="line"></span>
                    </div>
                  </div>
                </ul>
              </div>
              <MobileNav />
            </div>
          </div>
        </nav>
      </header>
      {subMenu && (
        <header
          className={"submenu-header sticky"}
          style={{
            top: showCommonHeader ? `${headerHeight}px` : "0",
            transition: "top 0.1s ease",
          }}>
          <nav
            style={{
              backgroundColor: subMenu.bg,
              color: subMenu.color,
              zIndex: "1",
            }}
            className={styles.navTransparent + " " + "navbar-expand-lg py-2"}>
            <div className="container">
              <div className="row">
                <div className=" col-6 col-lg-3 d-flex align-items-center">
                  <div className={styles.submenuHead}>
                    <h3
                      style={{
                        color: subMenu.color,
                      }}
                      className="m-0">
                      {subMenu.headText}
                    </h3>
                    {/* <small
                      style={{
                        color: subMenu.color,
                      }}
                      className="m-0 d-none d-lg-block"
                    >
                      CBSE Affiliation No:
                      {subMenu.afflNo}
                    </small> */}
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                  <div
                    className=" h-100 collapse navbar-collapse desktop-menu justify-content-center"
                    id="">
                    {isMambakkam ? (
                      <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end gap-3 mambakkam-menu">
                        <li className={isActive("mambakkam-site")}>
                          <Link href="/mambakkam-site" legacyBehavior>
                            <a className="nav-link text-white">Our Campus</a>
                          </Link>
                        </li>

                        <li
                          className={`nav-item dropdown ${
                            pageName.startsWith("mambakkam-site/about")
                              ? "active"
                              : ""
                          }`}>
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
                            <li>
                              <Link
                                href="/mambakkam-site/mandatory-public-disclosures"
                                legacyBehavior>
                                <a className="dropdown-item">
                                  Mandatory Public Disclosures
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li
                          className={`nav-item dropdown ${
                            pageName.startsWith("mambakkam-site/campus")
                              ? "active"
                              : ""
                          }`}>
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

                        <li className={isActive("mambakkam-site/events")}>
                          <Link href="/mambakkam-site/events" legacyBehavior>
                            <a className="nav-link text-white">Gallery</a>
                          </Link>
                        </li>
                      </ul>
                    ) : isChengalpattu ? (
                      <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end gap-3 chengalpattu-menu">
                        <li className={isActive("chengalpattu-site")}>
                          <Link href="/chengalpattu-site" legacyBehavior>
                            <a className="nav-link">Our Campus</a>
                          </Link>
                        </li>

                        <li
                          className={`nav-item dropdown ${
                            pageName.startsWith("chengalpattu-site/about")
                              ? "active"
                              : ""
                          }`}>
                          <Link href="#" legacyBehavior>
                            <a
                              className="nav-link dropdown-toggle"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              About Us
                              <CustomCaret color="black" />
                            </a>
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                href="/chengalpattu-site/about/message-from-principal"
                                legacyBehavior>
                                <a className="dropdown-item">
                                  Principal&apos;s Message
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/chengalpattu-site/about/blog"
                                legacyBehavior>
                                <a className="dropdown-item">Blog</a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        {/* <li
                          className={`nav-item dropdown ${
                            pageName.startsWith("chengalpattu-site/campus")
                              ? "active"
                              : ""
                          }`}>
                          <Link href="/chengalpattu-site/campus" legacyBehavior>
                            <a
                              className="nav-link dropdown-toggle"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Life of Campus
                              <CustomCaret color="black" />
                            </a>
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                href="/chengalpattu-site/campus/classrooms"
                                legacyBehavior>
                                <a className="dropdown-item">Classrooms</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/chengalpattu-site/campus/laboratory"
                                legacyBehavior>
                                <a className="dropdown-item">Laboratories</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/chengalpattu-site/campus/speciality-room"
                                legacyBehavior>
                                <a className="dropdown-item">
                                  Speciality Rooms
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/chengalpattu-site/campus/technology"
                                legacyBehavior>
                                <a className="dropdown-item">Technology</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/chengalpattu-site/campus/security"
                                legacyBehavior>
                                <a className="dropdown-item">Security</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/chengalpattu-site/campus/healthcare"
                                legacyBehavior>
                                <a className="dropdown-item">Healthcare</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/chengalpattu-site/campus/transportation"
                                legacyBehavior>
                                <a className="dropdown-item">Transportation</a>
                              </Link>
                            </li>
                          </ul>
                        </li> */}

                        <li
                          className={`nav-item dropdown ${
                            pageName.startsWith("chengalpattu-site/campus")
                              ? "active"
                              : ""
                          }`}>
                          <Link href="#" legacyBehavior>
                            <a
                              className="nav-link dropdown-toggle"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Campus
                              <CustomCaret color="black" />
                            </a>
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                href="/chengalpattu-site/campus/classrooms"
                                legacyBehavior>
                                <a className="dropdown-item">Classrooms</a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/chengalpattu-site/campus/facilities-and-Infrastructure"
                                legacyBehavior>
                                <a className="dropdown-item">
                                  Facilities and Infrastructure
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/chengalpattu-site/campus/laboratory"
                                legacyBehavior>
                                <a className="dropdown-item">Laboratories</a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/chengalpattu-site/campus/speciality-room"
                                legacyBehavior>
                                <a className="dropdown-item">
                                  Speciality Rooms
                                </a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/chengalpattu-site/campus/library"
                                legacyBehavior>
                                <a className="dropdown-item">Library</a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/chengalpattu-site/campus/technology"
                                legacyBehavior>
                                <a className="dropdown-item">Technology</a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/chengalpattu-site/campus/security"
                                legacyBehavior>
                                <a className="dropdown-item">Security</a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/chengalpattu-site/campus/healthcare"
                                legacyBehavior>
                                <a className="dropdown-item">Healthcare</a>
                              </Link>
                            </li>

                            <li>
                              <Link
                                href="/chengalpattu-site/campus/transportation"
                                legacyBehavior>
                                <a className="dropdown-item">Transportation</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        {/* <li
                          className={isActive(
                            "chengalpattu-site/enquiry-form"
                          )}>
                          <Link
                            href="/chengalpattu-site/enquiry-form"
                            legacyBehavior>
                            <a className="nav-link">Enquiry Form</a>
                          </Link>
                        </li> */}
                        {/* <li className={isActive("chengalpattu-site/mandatory-public-disclosures")}>
                          <Link href="/chengalpattu-site/mandatory-public-disclosures" legacyBehavior>
                            <a className="nav-link">Mandatory Public Disclosures</a>
                          </Link>
                        </li> */}
                        <li className={isActive("chengalpattu-site/events")}>
                          <Link href="/chengalpattu-site/events" legacyBehavior>
                            <a className="nav-link ">Events</a>
                          </Link>
                        </li>
                      </ul>
                    ) : null}
                  </div>

                  {/* <MobileNav selectedCampus={selectedCampus} /> */}
                </div>

                <div className="col-6 col-lg-3 d-flex align-items-center justify-content-end">
                  <Link href={`tel:+91${subMenu.mob}`}>
                    <a
                      className={`${styles.announcementPatch} d-none d-lg-block`}
                      style={{
                        backgroundColor: subMenu.enquiryBg,
                        color: subMenu.enquiryTxt,
                      }}>
                      +91{subMenu.mob}
                      {/* Admission Open 2026 - 2027 */}
                    </a>
                  </Link>
                  <div
                    onClick={(e) => subHamburgerMenu(e)}
                    className="d-flex d-lg-none mobSubHamburger flex-column justify-content-center align-items-center">
                    <div className="dots">
                      <span
                        style={{ backgroundColor: subMenu.enquiryBg }}></span>
                      <span
                        style={{ backgroundColor: subMenu.enquiryBg }}></span>
                      <span
                        style={{ backgroundColor: subMenu.enquiryBg }}></span>
                    </div>
                    <p style={{ color: subMenu.enquiryBg }}>MENU</p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Nav;
