import "./about.css";
import faisal2 from "../../img/faisal2.jpg";
import { FaUserGraduate } from "react-icons/fa";
import { GiAchievement, GiClockwork } from "react-icons/gi";
import ModalExperience from "../modal/modalExperience/ModalExperience";
import { useState } from "react";
import ModalEducation from "../modal/modalEducation/ModalEducation";
import ModalAchievment from "../modal/modalAchievment/ModalAchievment";
import resume from "../../assets/Resume.pdf";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import Fade from "react-reveal/Fade";

const About = () => {
  const [openExp, setOpenExp] = useState(false);
  const [openEdu, setOpenEdu] = useState(false);
  const [openAch, setOpenAch] = useState(false);
  const handleClose = () => {
    setOpenExp(false);
    setOpenEdu(false);
    setOpenAch(false);
  };

  return (
    <div id="about">
      <ModalExperience openExp={openExp} handleClose={handleClose} />
      <ModalEducation openEdu={openEdu} handleClose={handleClose} />
      <ModalAchievment openAch={openAch} handleClose={handleClose} />
      <Fade>
        <div className="about">
          <small>Get to know</small>
          <h2>About Me</h2>
        </div>
      </Fade>
      <div className="a">
        <Fade left>
          <div className="a-left">
            <div className="a-bg"></div>
            <div className="a-card">
              <img src={faisal2} alt="" className="a-img" />
            </div>
          </div>
        </Fade>
        <div className="a-right">
          <div className="about-card">
            <Fade right>
              <div className="box-about" onClick={() => setOpenExp(true)}>
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
              <div className="box-about" onClick={() => setOpenEdu(true)}>
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
              <div className="box-about" onClick={() => setOpenAch(true)}>
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
          {/* <p className="a-sub">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p> */}
          <Fade right>
            <p className="a-desc">
              I am an ICT engineer at GMF Aeroasia. I have made several
              applications as a fullstack web developer and fullstack mobile
              developer for my company which is used by more than 5000 employees
              at GMF Aeroasia. I am currently continuing my studies at BINUS
              university with a computer science study program. I am a
              persistent self-learning person, because my curiosity is so strong
              to continue to grow and get new things.
            </p>
          </Fade>
          <span className="buttonResume">
            <Fade right>
              <a href={resume} target="blank" className="viewResume">
                <BsFileEarmarkPdf
                  style={{ marginRight: "10px", fontSize: "20px" }}
                />
                View Resume
              </a>
            </Fade>
            <Fade right delay={300}>
              <a href={resume} target="blank" className="viewResume">
                <AiOutlineMessage
                  style={{ marginRight: "10px", fontSize: "20px" }}
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
