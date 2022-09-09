import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="arrowTop">
          <a href="#header" style={{ color: "white" }}>
            <MdKeyboardArrowUp />
          </a>
        </div>
        <div className="socialLink">
          <a
            href="https://wa.me/6281295516848"
            style={{ color: "white" }}
            target="_blank"
          >
            <BsWhatsapp className="socialIcons" />
          </a>
          <a
            href="https://www.linkedin.com/in/faisal-iqbal33/"
            style={{ color: "white" }}
            target="_blank"
          >
            <BsLinkedin className="socialIcons" />
          </a>
          <a
            href="https://github.com/faisalibal33"
            style={{ color: "white" }}
            target="_blank"
          >
            {" "}
            <BsGithub className="socialIcons" />
          </a>
        </div>
        <div className="copyright">
          <AiOutlineCopyright />
          2022 - Portofolio Faisal Iqbal with React.js
        </div>
      </div>
    </div>
  );
};

export default Footer;
