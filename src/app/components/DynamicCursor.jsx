"use client";
import React, { useRef, useEffect } from "react";
import styles from "../styles/HomepageHero.module.css";

const DynamicCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (cursorRef.current) {
      const handleMouseMove = (e) => {
        cursorRef.current.style.left = `${e.pageX}px`;
        cursorRef.current.style.top = `${e.pageY}px`;
      };

      const handleMouseEnter = () => {
        cursorRef.current.style.opacity = "1";
      };

      const handleMouseLeave = () => {
        cursorRef.current.style.opacity = "0";
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseenter", handleMouseEnter);
      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseenter", handleMouseEnter);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [cursorRef]);

  return (<>
    <div ref={cursorRef} id={styles.cursor}></div>
    <style jsx global>{`
      body {
        cursor: none;
      }
    `}</style>
  </>);
};

export default DynamicCursor;
