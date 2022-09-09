import { Tooltip } from "@mui/material";
import { useContext } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ThemeContext } from "../../context";

const Social = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="header_social">
      <Tooltip title="My Linkedin" placement="left-start">
        <a
          href="https://www.linkedin.com/in/faisal-iqbal33/"
          target="blank"
          rel="noreferrer"
        >
          <BsLinkedin style={{ color: darkMode && "#aaaaaa" }} />
        </a>
      </Tooltip>
      <Tooltip title="My Github" placement="left-start">
        <a
          href="https://github.com/faisalibal33"
          rel="noreferrer"
          target="blank"
        >
          <BsGithub style={{ color: darkMode && "#aaaaaa" }} />
        </a>
      </Tooltip>
    </div>
  );
};

export default Social;
