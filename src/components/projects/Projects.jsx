import sponline from "../../img/sponline.png";
import eer from "../../img/eer.png";
import mobileEer from "../../img/mobileEer.png";
import faisalmovie from "../../img/faisalmovie.png";
import pendeteksiwajah from "../../img/pendeteksiwajah.png";
import marketplace from "../../img/marketplace.png";
import robotfaisal from "../../img/robotfaisal.png";
import tilt from "../../img/tilt.png";
import GSE from "../../img/GSE.png";
import Tilt from "react-parallax-tilt";
import "./projects.css";
import Fade from "react-reveal/Fade";
import { FaRegWindowMaximize } from "react-icons/fa";
import { AiOutlineCloseCircle, AiOutlineMinusCircle } from "react-icons/ai";

function Projects() {
  return (
    <div className="projects" id="project">
      <Fade>
        <div
          className="about"
          style={{
            position: "sticky",
            top: "-35px",
            zIndex: "1",
            background: "white",
          }}
        >
          <small>My recent work</small>
          <h2>Projects</h2>
        </div>
      </Fade>
      <div className="projectShow">
        <Fade left>
          <div className="p-left">
            <div className="p-box">
              <h2 className="p-title">GMF SP document Tracking (2022)</h2>
              <div className="p-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                dolorum dolore illum necessitatibus reprehenderit perferendis
                repellat temporibus eum neque fugit libero, dicta eligendi
                dolores nobis quod quas harum, labore facilis!
              </div>
              <span>
                <a
                  href="https://github.com/faisalibal33/GMFSPOnline"
                  target="blank"
                  className="viewResume s-code"
                >
                  Source Code
                </a>
              </span>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="p-right">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} className="p-img">
              <img src={sponline} alt="sponline" />
            </Tilt>
          </div>
        </Fade>
      </div>
      <div className="projectShow">
        <Fade left>
          <div className="p-left">
            <div className="p-box">
              <h2 className="p-title">Excellent Equipment Request (2022)</h2>
              <div className="p-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                dolorum dolore illum necessitatibus reprehenderit perferendis
                repellat temporibus eum neque fugit libero, dicta eligendi
                dolores nobis quod quas harum, labore facilis!
              </div>
              <span>
                <a
                  href="https://github.com/faisalibal33/GMFSPOnline"
                  target="blank"
                  className="viewResume s-code"
                >
                  Source Code
                </a>
              </span>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="p-right">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} className="p-img">
              <img src={eer} alt="Excellent Equipment Request" />
            </Tilt>
          </div>
        </Fade>
      </div>
      <div className="projectShow">
        <Fade left>
          <div className="p-left">
            <div className="p-box">
              <h3 className="p-title">GSE Request Mobile Apps (2022)</h3>
              <div className="p-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                dolorum dolore illum necessitatibus reprehenderit perferendis
                repellat temporibus eum neque fugit libero, dicta eligendi
                dolores nobis quod quas harum, labore facilis!
              </div>
              <span>
                <a
                  href="https://github.com/faisalibal33/GMFSPOnline"
                  target="blank"
                  className="viewResume s-code"
                >
                  Source Code
                </a>
              </span>
            </div>
          </div>
        </Fade>
        <Fade right delay={200}>
          <div className="p-right">
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              className="p-img"
              style={{ width: "30%", borderRadius: "40px" }}
            >
              <img src={mobileEer} alt="sponline" />
            </Tilt>
          </div>
        </Fade>
      </div>
      <div className="otherProject">
        <Fade right>
          <div className="other-box">
            <div className="other-top">
              <div className="other-title">Ground Support Equipment (2022)</div>
              <div className="other-icon">
                <AiOutlineMinusCircle />
                <FaRegWindowMaximize />
                <AiOutlineCloseCircle style={{ marginRight: "10px" }} />
              </div>
            </div>
            <div className="other-imgBox">
              <img src={GSE} alt="Gas" className="other-img" />
            </div>
          </div>
        </Fade>
        <Fade right delay={300}>
          <div className="other-box">
            <div className="other-top">
              <div className="other-title">Amazon Clone (2022)</div>
              <div className="other-icon">
                <AiOutlineMinusCircle />
                <FaRegWindowMaximize />
                <AiOutlineCloseCircle style={{ marginRight: "10px" }} />
              </div>
            </div>
            <div className="other-imgBox">
              <img src={marketplace} alt="Gas" className="other-img" />
            </div>
          </div>
        </Fade>
        <Fade right delay={600}>
          <div className="other-box">
            <div className="other-top">
              <div className="other-title">Easy Search Movie (2021)</div>
              <div className="other-icon">
                <AiOutlineMinusCircle />
                <FaRegWindowMaximize />
                <AiOutlineCloseCircle style={{ marginRight: "10px" }} />
              </div>
            </div>
            <div className="other-imgBox">
              <img src={faisalmovie} alt="Gas" className="other-img" />
            </div>
          </div>
        </Fade>
        <Fade left delay={600}>
          <div className="other-box">
            <div className="other-top">
              <div className="other-title">Face Detection Test (2021)</div>
              <div className="other-icon">
                <AiOutlineMinusCircle />
                <FaRegWindowMaximize />
                <AiOutlineCloseCircle style={{ marginRight: "10px" }} />
              </div>
            </div>
            <div className="other-imgBox">
              <img src={pendeteksiwajah} alt="Gas" className="other-img" />
            </div>
          </div>
        </Fade>
        <Fade left delay={300}>
          <div className="other-box">
            <div className="other-top">
              <div className="other-title">Robots Family (2020)</div>
              <div className="other-icon">
                <AiOutlineMinusCircle />
                <FaRegWindowMaximize />
                <AiOutlineCloseCircle style={{ marginRight: "10px" }} />
              </div>
            </div>
            <div className="other-imgBox">
              <img src={robotfaisal} alt="Gas" className="other-img" />
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="other-box">
            <div className="other-top">
              <div className="other-title">CSS Tilt Open Source (2020)</div>
              <div className="other-icon">
                <AiOutlineMinusCircle />
                <FaRegWindowMaximize />
                <AiOutlineCloseCircle style={{ marginRight: "10px" }} />
              </div>
            </div>
            <div className="other-imgBox">
              <img src={tilt} alt="Gas" className="other-img" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
