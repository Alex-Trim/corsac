"use client";
import React from "react";
import { AnimatedLink } from "../animated-link";
import styles from "./navbar.module.css";

const navItems = [
  {
    title: "О нас",
    href: "/",
  },
  {
    title: "LMS ВО",
    href: "/work",
  },
  {
    title: "LMS ДПО",
    href: "/about",
  },
  {
    title: "LMS Экзамены",
    href: "/contact",
  },
  {
    title: "LMS MOOC",
    href: "/contact",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={`list-reset ${styles.navbar__list}`}>
        {navItems.map((data, index) => {
          return (
            <li className={styles.navbar__item} key={index}>
              <AnimatedLink data={{ ...data, index }}></AnimatedLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
