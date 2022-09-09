import React, { useContext } from "react";
import "./nav.css";
import { FiHome, FiUser } from "react-icons/fi";
import { BsBook, BsSun, BsFillMoonFill } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { ThemeContext } from "../../context";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
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
      <Tooltip
        title={darkMode == true ? "Dark" : "Light"}
        placement="top"
        arrow
      >
        <p href="" onClick={handleClick}>
          {darkMode == true ? <BsFillMoonFill /> : <BsSun />}
        </p>
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
  );
};

export default Nav;
