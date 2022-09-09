import "./about.css";
import faisal2 from "../../img/faisal2.jpg";
import { FaUserGraduate } from "react-icons/fa";
import { GiAchievement, GiClockwork } from "react-icons/gi";
import ModalExperience from "../modal/modalExperience/ModalExperience";
import { useContext, useState } from "react";
import ModalEducation from "../modal/modalEducation/ModalEducation";
import ModalAchievment from "../modal/modalAchievment/ModalAchievment";
import resume from "../../assets/Resume.pdf";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../context";

const About = () => {
  const [openExp, setOpenExp] = useState(false);
  const [openEdu, setOpenEdu] = useState(false);
  const [openAch, setOpenAch] = useState(false);
  const handleClose = () => {
    setOpenExp(false);
    setOpenEdu(false);
    setOpenAch(false);
  };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="about">
      <ModalExperience openExp={openExp} handleClose={handleClose} />
      <ModalEducation openEdu={openEdu} handleClose={handleClose} />
      <ModalAchievment openAch={openAch} handleClose={handleClose} />
      <Fade>
        <div className="about">
          <small>Get to know</small>
          <h2
            style={{
              borderBottom: "2px solid rgba(96, 119, 95, 0.671)",
              borderRadius: "10px",
              paddingRight: "20px",
              paddingLeft: "20px",
              paddingBottom: "5px",
            }}
          >
            About Me
          </h2>
        </div>
      </Fade>
      <div className="a">
        <Fade left>
          <div className="a-left">
            <div
              className="a-card"
              style={{
                boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
              }}
            >
              <img src={faisal2} alt="" className="a-img" />
            </div>
            <div
              className="left-bg"
              style={{
                boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
              }}
            >
              <div className="a-bg"></div>
            </div>
          </div>
        </Fade>
        <div className="a-right">
          <div className="about-card">
            <Fade right>
              <div
                className="box-about"
                onClick={() => setOpenExp(true)}
                style={{
                  boxShadow:
                    darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
                }}
              >
                <div>
                  <GiClockwork className="box-icon" />
                </div>
                <div>
                  <span className="box-title">Experiences</span>
                </div>
                <div>
                  <small className="box-desc">3+ Years</small>
                </div>
                <div>
                  <small className="box-desc">Working</small>
                </div>
              </div>
            </Fade>
            <Fade right delay={300}>
              <div
                className="box-about"
                onClick={() => setOpenEdu(true)}
                style={{
                  boxShadow:
                    darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
                }}
              >
                <div>
                  <FaUserGraduate className="box-icon" />
                </div>
                <div>
                  <span className="box-title">Education</span>
                </div>
                <div>
                  <small className="box-desc">Bachelor degree</small>
                </div>
                <div>
                  <small className="box-desc">Computer Science</small>
                </div>
              </div>
            </Fade>
            <Fade right delay={600}>
              <div
                className="box-about"
                onClick={() => setOpenAch(true)}
                style={{
                  boxShadow:
                    darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
                }}
              >
                <div>
                  <GiAchievement className="box-icon" />
                </div>
                <div>
                  <span className="box-title">Achievement</span>
                </div>
                <div>
                  <small className="box-desc">Top #1</small>
                </div>
                <div>
                  <small className="box-desc">Exception Innovation</small>
                </div>
              </div>
            </Fade>
          </div>
          <Fade right>
            <p className="a-desc">
              I am an ICT engineer at GMF Aeroasia. I have made several
              applications as a fullstack web developer and fullstack mobile
              developer for my company which is used by more than 5000 employees
              at GMF Aeroasia. I am currently continuing my studies at BINUS
              university with a computer science study program. I am a
              persistent self-learning person with strong curiosity.
            </p>
          </Fade>
          <span className="buttonResume">
            <Fade right>
              <a
                href={resume}
                target="_blank"
                className="viewResume"
                rel="noreferrer"
                style={{
                  boxShadow:
                    darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
                }}
              >
                <BsFileEarmarkPdf
                  style={{
                    marginRight: "10px",
                    fontSize: "20px",
                    transition: "none",
                  }}
                />
                View Resume
              </a>
            </Fade>
            <Fade right delay={300}>
              <a
                href="#contact"
                className="viewResume"
                style={{
                  boxShadow:
                    darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
                }}
              >
                <AiOutlineMessage
                  style={{
                    marginRight: "10px",
                    fontSize: "20px",
                    transition: "none",
                  }}
                />
                Call me
              </a>
            </Fade>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
