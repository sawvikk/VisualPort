"use client";
import React, { useState, useEffect } from "react";
import style from "../styles/LegacyNavbarTwo.module.css";
import Link from "next/link";

const LegacyNavbarTwo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const links = document.querySelectorAll(`.${style.Main_menu_link} a`);
      links.forEach((link) => {
        const sectionId = link.getAttribute("href");
        const section = document.querySelector(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(sectionId);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${style.total_navbar} sticky top-0 z-50 shadow-md`}>
      <nav className={style.Main_menu}>
        <button
          className="lg:hidden px-4 py-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul
          className={`${style.Main_menu_list} ${
            isMenuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <li
            className={`${style.Main_menu_link} ${
              activeLink === "/" ? style.active : ""
            }`}
          >
            <Link href="/"> Home</Link>
          </li>
          <li
            className={`${style.Main_menu_link} ${
              activeLink === "/#contact" ? style.active : ""
            }`}
          >
            <a href="#contact">Contact</a>
          </li>
          <li
            className={`${style.Main_menu_link} ${
              activeLink === "/projects" ? style.active : ""
            }`}
          >
            <Link href="/projects"> Projects </Link>
          </li>
          <li
            className={`${style.Main_menu_link} ${
              activeLink === "/about" ? style.active : ""
            }`}
          >
            <Link href="/about"> About Me </Link>
          </li>
        </ul>
      </nav>

      
    </div>
  );
};

export default LegacyNavbarTwo;
