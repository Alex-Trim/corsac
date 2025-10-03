"use client";
import React from "react";
import { AnimatedLink } from "../animated-link";
import styles from "./navbar.module.css";

const navItems = [
  {
    title: "О нас",
    href: "/about-us",
  },
  {
    title: "LMS ВО",
    href: "/lms-wo",
  },
  {
    title: "LMS ДПО",
    href: "/lms-dpo",
  },
  {
    title: "LMS Экзамены",
    href: "/lms-esam",
  },
];

export const Navbar = ({ closeMenu }) => {
  return (
    <nav className={styles.navbar}>
      <ul
        className={`list-reset ${styles.navbar__list}`}
        style={{ marginBottom: "10vh" }}
      >
        {navItems.map((data, index) => {
          return (
            <li className={styles.navbar__item} key={index}>
              <AnimatedLink
                data={{ ...data, index }}
                closeMenu={closeMenu}
              ></AnimatedLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
