import React from "react";
import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-primary text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>
          Copyright by Sawvik Kar Dipto&copy;, 2024 - All rights reserved
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href="https://www.linkedin.com/in/sawvik-kar-dipto-43321a2ba/" target="_blank" rel="noopener noreferrer"
      className="hover:text-black"><SiGithub size={30} /></a>
      <a href="https://github.com/sawvikk" target="_blank" rel="noopener noreferrer"
      className="hover:text-blue-500"><SiLinkedin size={30} /></a>
        <a href="https://www.facebook.com/sawvik.kar.5/" className="hover:text-red-500"><SiYoutube size={30} /></a>
      </nav>
    </footer>
  );
};

export default Footer;
