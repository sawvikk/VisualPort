import React from "react";
import styles from "../styles/HomepageHero.module.css";
import MagnifyingGlassCursor from "./MagnifyingGlassCursor";
import DynamicCursor from "./DynamicCursor";

const HomepageHero = () => {
  return (
    <div>
      <div className={styles.Outer_homepage}>
        <div className={styles.Homepage}>
          <div className={styles.Home_page_name}>
            <span id="Letter_S">S</span>
            <span id="Letter_a">a</span>
            <span id="Letter_w">w</span>
            <span id="Letter_v">v</span>
            <span id="Letter_i">i</span>
            <span id="Letter_k">k</span>
            <span id="Letter_Space1"> </span>
            <span id="Letter_K">K</span>
            <span id="Letter_a2">a</span>
            <span id="Letter_r">r</span>
            <span id="Letter_Space2"> </span>
            <span id="Letter_D">D</span>
            <span id="Letter_i2">i</span>
            <span id="Letter_p">p</span>
            <span id="Letter_t">t</span>
            <span id="Letter_o">o</span>
          </div>
          <div id={styles.personal_description}>The <span className="text-secondary-content-bold"><b>Visual Developer</b></span> creating seamless, detailed user experiences<br /></div>
          {/* <MagnifyingGlassCursor></MagnifyingGlassCursor> */}
          <DynamicCursor></DynamicCursor>
        </div>
      </div>
      <div className={styles.Grp_Button}>
        <a href="#Projects"><button>Works</button></a>
        <a href="#Skills"><button>Skills</button></a>
        {/* <a href="https://dev.to/sakib3201" target="_blank"><button>Blogs</button></a> */}
        <a href="/files/SawvikCVVisualDeveloper.pdf" target="_blank" rel="noopener noreferrer"><button>Resume</button></a>
      </div>
    </div>
  );
};

export default HomepageHero;
