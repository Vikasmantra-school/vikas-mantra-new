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

const Nav = () => {
  const { asPath } = useRouter();
  const dropdownSub = useRef("");
  const isMambakkam = asPath.startsWith("/mambakkam-site");
  const isChengalpattu = asPath.startsWith("/chengalpattu-site");
  var pageName = asPath.replace("/", "");

  const [selectedCampus, setSelectedCampus] = useState(
    isMambakkam
      ? "Mambakkam"
      : isChengalpattu
      ? "Chengalpattu"
      : "Select Campus"
  );

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

  //  let activeMenu = [];
  //   if (isMambakkam) {
  //     activeMenu = mambakkamMenu;
  //   } else if (isChengalpattu) {
  //     activeMenu = chengalpattuMenu;
  //   }

  // const renderMenu = (items, level = 0) => (
  //   <ul
  //     className={` justify-content-end gap-5
  //       ${level === 0 ? "navbar-nav mb-2 mb-lg-0 w-100" : "dropdown-menu "} `}>
  //     {items.map((item, index) => (
  //       <li
  //         key={index}
  //         className={item.children ? "nav-item dropdown" : "nav-item"}>
  //         <Link href={`/mambakkam-site/${item.href}` || "#"} legacyBehavior>
  //           <a
  //             className={
  //               item.children
  //                 ? level === 0
  //                   ? "nav-link dropdown-toggle text-white"
  //                   : "dropdown-item dropdown-toggle"
  //                 : level === 0
  //                 ? "nav-link text-white"
  //                 : "dropdown-item"
  //             }
  //             role={item.children ? "button" : undefined}
  //             data-bs-toggle={item.children ? "dropdown" : undefined}
  //             aria-expanded="false"
  //             target={item.target || "_self"}>
  //             {item.title}
  //           </a>
  //         </Link>

  //         {item.children && renderMenu(item.children, level + 1)}
  //       </li>
  //     ))}
  //   </ul>
  // );
  function hamburgerMenu(e) {
    let menu = document.getElementById("mobMenu");
    let hamburgerMenu = document.getElementById("hamburger");
    menu.classList.toggle("mob-menu-hdden");
    hamburgerMenu.classList.toggle("is-active");
  }

  const handleCampusSelect = (label) => {
    setSelectedCampus(label);
  };
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
          "homeheader " +
          " " +
          pageName +
          ` ${pageName === "" ? "home" : "position-relative"}`
        }>
        <nav className={styles.navTransparent + " navbar-expand-lg py-2"}>
          <div className="container">
            <div className="row">
              <div className="col-5 col-lg-3 d-flex align-items-center">
                <Link href="/" legacyBehavior>
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

              <div className="col-7 col-lg-9">
                <ul className="m-hide navbar-nav ms-auto mb-2 mb-lg-0 call-btn justify-content-end align-items-center">
                  <div className={styles.announcementPatch}>
                    Admission Open 2025 - 2026
                  </div>
                  <div>
                    <button className={styles.callBtn}>
                      { isMambakkam ? ( 
                        <Link href="tel:+9174484508450" legacyBehavior>
                        <a>
                          <FontAwesomeIcon
                            icon={faPhone}
                            className={styles.callIcon}
                          />
                          +91 744845 08450
                        </a>
                      </Link>
                      ): (
                        
                      <Link href="tel:+91-7092450450" legacyBehavior>
                        <a>
                          <FontAwesomeIcon
                            icon={faPhone}
                            className={styles.callIcon}
                          />
                          +91 70924 50450
                        </a>
                      </Link>)
                      }
                    </button>
                  </div>

                  <div>
                    <Button className={styles.drpDownBtn}>
                      <li className="nav-item dropdown m-0 p-0">
                        <a
                          className={` d-flex align-items-center gap-2 text-white nav-link dropdown-toggle m-0 p-0 ${styles.customDropdownToggle}`}
                          href="#"
                          id="campusDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                          campus
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M11.1538 13.3047L14.7752 9.6834H7.53246L11.1538 13.3047ZM11.1636 21.3462C9.71919 21.3462 8.35881 21.0729 7.08246 20.5264C5.80612 19.9798 4.689 19.2278 3.73112 18.2703C2.77323 17.3128 2.02083 16.1966 1.4739 14.9216C0.927174 13.6468 0.653809 12.2846 0.653809 10.8349C0.653809 9.38533 0.927078 8.02715 1.47362 6.76042C2.02015 5.49369 2.77217 4.38138 3.72967 3.4235C4.68717 2.46561 5.80342 1.71321 7.07842 1.16629C8.35323 0.619557 9.71544 0.346191 11.1651 0.346191C12.6147 0.346191 13.9728 0.61946 15.2396 1.166C16.5063 1.71254 17.6186 2.46456 18.5765 3.42206C19.5344 4.37956 20.2868 5.4935 20.8337 6.76388C21.3804 8.03446 21.6538 9.39196 21.6538 10.8364C21.6538 12.2808 21.3805 13.6412 20.834 14.9175C20.2875 16.1939 19.5354 17.311 18.5779 18.2689C17.6204 19.2268 16.5065 19.9792 15.2361 20.5261C13.9655 21.0728 12.608 21.3462 11.1636 21.3462ZM11.1538 19.8462C13.6538 19.8462 15.7788 18.9712 17.5288 17.2212C19.2788 15.4712 20.1538 13.3462 20.1538 10.8462C20.1538 8.34619 19.2788 6.22119 17.5288 4.47119C15.7788 2.72119 13.6538 1.84619 11.1538 1.84619C8.65381 1.84619 6.52881 2.72119 4.77881 4.47119C3.02881 6.22119 2.15381 8.34619 2.15381 10.8462C2.15381 13.3462 3.02881 15.4712 4.77881 17.2212C6.52881 18.9712 8.65381 19.8462 11.1538 19.8462Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="campusDropdown">
                          <li>
                            <Link
                              href="/mambakkam-site"
                              onClick={() => handleCampusSelect("Mambakkam")}>
                              <a className="dropdown-item py-1 px-2">
                                Mambakkam
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/chengalpattu-site"
                              onClick={() =>
                                handleCampusSelect("Chengalpattu")
                              }>
                              <a className="dropdown-item py-1 px-2">
                                Chengalpattu
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </Button>

                    <button className={styles.drpDownValue}>
                      {subMenu?.headText || "Select Campus"}
                    </button>
                  </div>
                </ul>
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
                                Advisor's Message{" "}
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
                        <Link legacyBehavior href="https://www.parentsalarmapp.com/" >
                          <a className="nav-link" target="_blank" rel="noopener noreferrer">VMPS Login</a>
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
                <div className="d-lg-none d-flex align-items-center justify-content-around">
                  <div className="d-flex flex-column">
                    <Button className={styles.drpDownBtn}>
                      <li className="nav-item dropdown m-0 p-0 list-unstyled">
                        <a
                          className={` d-flex align-items-center gap-2 text-white nav-link dropdown-toggle m-0 p-0 ${styles.customDropdownToggle}`}
                          href="#"
                          id="campusDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                         { isMambakkam ? ("Mambakkam"):("Campus")}
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M11.1538 13.3047L14.7752 9.6834H7.53246L11.1538 13.3047ZM11.1636 21.3462C9.71919 21.3462 8.35881 21.0729 7.08246 20.5264C5.80612 19.9798 4.689 19.2278 3.73112 18.2703C2.77323 17.3128 2.02083 16.1966 1.4739 14.9216C0.927174 13.6468 0.653809 12.2846 0.653809 10.8349C0.653809 9.38533 0.927078 8.02715 1.47362 6.76042C2.02015 5.49369 2.77217 4.38138 3.72967 3.4235C4.68717 2.46561 5.80342 1.71321 7.07842 1.16629C8.35323 0.619557 9.71544 0.346191 11.1651 0.346191C12.6147 0.346191 13.9728 0.61946 15.2396 1.166C16.5063 1.71254 17.6186 2.46456 18.5765 3.42206C19.5344 4.37956 20.2868 5.4935 20.8337 6.76388C21.3804 8.03446 21.6538 9.39196 21.6538 10.8364C21.6538 12.2808 21.3805 13.6412 20.834 14.9175C20.2875 16.1939 19.5354 17.311 18.5779 18.2689C17.6204 19.2268 16.5065 19.9792 15.2361 20.5261C13.9655 21.0728 12.608 21.3462 11.1636 21.3462ZM11.1538 19.8462C13.6538 19.8462 15.7788 18.9712 17.5288 17.2212C19.2788 15.4712 20.1538 13.3462 20.1538 10.8462C20.1538 8.34619 19.2788 6.22119 17.5288 4.47119C15.7788 2.72119 13.6538 1.84619 11.1538 1.84619C8.65381 1.84619 6.52881 2.72119 4.77881 4.47119C3.02881 6.22119 2.15381 8.34619 2.15381 10.8462C2.15381 13.3462 3.02881 15.4712 4.77881 17.2212C6.52881 18.9712 8.65381 19.8462 11.1538 19.8462Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="campusDropdown">
                          <li>
                            <Link
                              href="/mambakkam-site"
                              onClick={() => handleCampusSelect("Mambakkam")}>
                              <a className="dropdown-item py-1 px-2">
                                Mambakkam
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/chengalpattu-site"
                              onClick={() =>
                                handleCampusSelect("Chengalpattu")
                              }>
                              <a className="dropdown-item py-1 px-2">
                                Chengalpattu
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </Button>

                    {/* <button className={styles.drpDownValue}>
                      {subMenu?.headText || "Select Campus"}
                    </button> */}
                  </div>
                  <div
                    onClick={(e) => hamburgerMenu(e)}
                    className="hamburger"
                    id="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>

              <MobileNav subMenu={subMenu}  selectedCampus={selectedCampus} />
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
                    {/* <small
                      style={{
                        color: subMenu.color,
                      }}
                      className="m-0">
                      CBSE Affiliation No:
                      {subMenu.afflNo}
                    </small> */}
                  </div>
                </div>
                <div className="col-lg-9">
                  <div
                    className=" h-100 collapse navbar-collapse desktop-menu justify-content-end"
                    id="">
                    {isMambakkam && (
                      <ul className="navbar-nav mb-2 mb-lg-0 justify-content-end gap-5" >
                        <li
                          className={
                            pageName === "" ? "active nav-item" : "nav-item"
                          }>
                          <Link href="/mambakkam-site" legacyBehavior>
                            <a
                              className="nav-link text-white"
                              aria-current="page">
                              Home
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
                            </a>
                          </Link>

                          <ul className="dropdown-menu">
                            <li>
                              <Link href="/mambakkam-site/about/message-from-principal" legacyBehavior>
                                <a className="dropdown-item">
                                  Principal's Message
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
                            </a>
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link href="/mambakkam-site/campus/classrooms" legacyBehavior>
                                <a className="dropdown-item">Classrooms</a>
                              </Link>
                            </li>

                      

                            <li>
                              <Link href="/mambakkam-site/campus/laboratory" legacyBehavior>
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
                              <Link href="/mambakkam-site/campus/technology" legacyBehavior>
                                <a className="dropdown-item">Technology</a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/mambakkam-site/campus/security" legacyBehavior>
                                <a className="dropdown-item">Security</a>
                              </Link>
                            </li>

                            <li>
                              <Link href="/mambakkam-site/campus/healthcare" legacyBehavior>
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
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Nav;
