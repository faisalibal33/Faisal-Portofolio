import { Tooltip } from "@mui/material";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Social = () => {
  return (
    <div className="header_social">
      <Tooltip title="My Linkedin" placement="left-start">
        <a
          href="https://www.linkedin.com/in/faisal-iqbal33/"
          target="blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </Tooltip>
      <Tooltip title="My Github" placement="left-start">
        <a
          href="https://github.com/faisalibal33"
          rel="noreferrer"
          target="blank"
        >
          <BsGithub />
        </a>
      </Tooltip>
    </div>
  );
};

export default Social;
