import React from "react";
import "./nav.css";
import { FiHome, FiUser } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "react-reveal/Fade";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <Fade bottom>
      <nav>
        <Tooltip title="Me" placement="top" arrow>
          <a
            href="#header"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <FiHome />
          </a>
        </Tooltip>
        <Tooltip title="About me" placement="top" arrow>
          <a
            href="#about"
            onClick={() => setActiveNav("about")}
            className={activeNav === "about" ? "active" : ""}
          >
            <FiUser />
          </a>
        </Tooltip>
        <Tooltip title="Experience" placement="top" arrow>
          <a
            href="#project"
            onClick={() => setActiveNav("experience")}
            className={activeNav === "experience" ? "active" : ""}
          >
            <BsBook />
          </a>
        </Tooltip>
        <Tooltip title="Skills" placement="top" arrow>
          <a
            href="#services"
            onClick={() => setActiveNav("services")}
            className={activeNav === "services" ? "active" : ""}
          >
            <MdHomeRepairService />
          </a>
        </Tooltip>
        <Tooltip title="Contact me" placement="top" arrow>
          <a
            href="#contact"
            onClick={() => setActiveNav("contact")}
            className={activeNav === "contact" ? "active" : ""}
          >
            <BiMessageSquareDetail />
          </a>
        </Tooltip>
      </nav>
    </Fade>
  );
};

export default Nav;
