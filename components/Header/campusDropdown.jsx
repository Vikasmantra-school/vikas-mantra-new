import React, { useState } from "react";
import { useCampus } from "../../hooks/useCampus";
import { Button } from "react-bootstrap";
import styles from "./campusDropdown.module.css";
import Link from "next/link";

const CampusDropdown = () => {
  const [campusDropdownAria, setCampusDropdownAria] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const { campus } = useCampus();
  const campusLabel =
    campus === "mambakkam"
      ? "Mambakkam"
      : campus === "chengalpattu"
      ? "Chengalpattu"
      : "Campus";
  return (
    <div>
      <Button className={styles.drpDownBtn}>
        <li className="nav-item dropdown m-0">
          <a
            className={` d-flex align-items-center gap-2 text-white nav-link dropdown-toggle m-0 ${styles.customDropdownToggle}`}
            href="#"
            id="campusDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded={campusDropdownAria}>
            {campusLabel}
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
            className={`dropdown-menu ${dropDownMenu ? "show" : ""}`}
            aria-labelledby="campusDropdown">
            {campus === "mambakkam" && (
              <li>
                <Link href="/chengalpattu-site">
                  <a className="dropdown-item py-1 px-2">Chengalpattu</a>
                </Link>
              </li>
            )}
            {campus === "chengalpattu" && (
              <li>
                <Link href="/mambakkam-site">
                  <a className="dropdown-item py-1 px-2">Mambakkam</a>
                </Link>
              </li>
            )}

            {!campus && (
              <>
                <li>
                  <Link href="/mambakkam-site">
                    <a className="dropdown-item py-1 px-2">Mambakkam</a>
                  </Link>
                </li>
                <li>
                  <Link href="/chengalpattu-site">
                    <a className="dropdown-item py-1 px-2">Chengalpattu</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </li>
      </Button>
    </div>
  );
};

export default CampusDropdown;
