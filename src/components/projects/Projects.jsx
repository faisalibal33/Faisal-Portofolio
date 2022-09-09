import sponline from "../../img/sponline.png";
import eer from "../../img/eer.png";
import mobileEer from "../../img/mobileEer.png";
// import home from "../../img/home.png";
// import request from "../../img/request.png";
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
import { ThemeContext } from "../../context";
import { useContext } from "react";

function Projects() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="projects" id="project">
      <Fade>
        <div
          className="about projectMob"
          style={{
            position: "sticky",
            top: "-35px",
            zIndex: "1",
            background: darkMode === true ? "#222" : "white",
          }}
        >
          <small>My recent work</small>
          <h2
            style={{
              borderBottom: "2px solid rgba(96, 119, 95, 0.671)",
              borderRadius: "10px",
              paddingRight: "20px",
              paddingLeft: "20px",
              paddingBottom: "5px",
            }}
          >
            Projects
          </h2>
        </div>
      </Fade>
      <div className="projectShow">
        <Fade left>
          <div className="p-left">
            <div className="p-box">
              <h2 className="p-title">GMF SP document Tracking (2022)</h2>
              <p className="p-desc">
                GMF SP Online is a WEB Apps-based application that functions as
                a database of proof of delivery of documents/packages between
                units at GMF. This application is built with React.js as
                frontend, Express.js Node.js as backend server, and MongoDB as
                database
              </p>
              <span>
                <a
                  href="https://github.com/faisalibal33/GMFSPOnline"
                  target="_blank"
                  className="viewResume s-code"
                  rel="noreferrer"
                  style={{
                    boxShadow:
                      darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
                  }}
                >
                  Source Code
                </a>
              </span>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="p-right">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
              <div
                className="p-img"
                style={{
                  boxShadow:
                    darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
                }}
              >
                <img src={sponline} alt="sponline" />
              </div>
            </Tilt>
          </div>
        </Fade>
      </div>
      <div className="projectShow">
        <Fade left>
          <div className="p-left">
            <div className="p-box">
              <h2 className="p-title">Excellent Equipment Request (2022)</h2>
              <p className="p-desc">
                {/* Excellent Equipment Request is based on WebApps which functions
                as admin monitoring that displays statistics and percentages of
                the equipment request process in GMF. This application is built
                with Express.js Node.js as backend server, MongoDB as database,
                and React.js as frontend */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                excepturi et nihil explicabo reprehenderit! Provident a culpa
                magnam quae libero quibusdam. Harum sed vitae corrupti doloribus
                dignissimos perferendis sequi impedit!
              </p>
              <span>
                <a
                  href="https://github.com/faisalibal33/GMFSPOnline"
                  target="_blank"
                  className="viewResume"
                  rel="noreferrer"
                  style={{
                    boxShadow:
                      darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
                  }}
                >
                  Source Code
                </a>
              </span>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="p-right">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
              <div
                className="p-img"
                style={{
                  boxShadow:
                    darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
                }}
              >
                <img src={eer} alt="Excellent Equipment Request" />
              </div>
            </Tilt>
          </div>
        </Fade>
      </div>
      <div className="projectShow">
        <Fade left>
          <div className="p-left">
            <div className="p-box">
              <h3 className="p-title">GSE Request Mobile Apps (2022)</h3>
              <p className="p-desc">
                {/* GSE Request Mobile Apps is a mobile application that functions
                to make requests and complete an equipment request flexibly.
                This application is built with React native so this application
                can be run on IOS and Android. MongoDB as database, Express.js
                Node.js as backend server. */}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                eaque qui soluta aspernatur, dicta quod natus placeat atque
                ipsam autem, fuga laboriosam eius repudiandae repellendus cumque
                impedit totam molestias accusamus!
              </p>
              <span>
                <a
                  href="https://github.com/faisalibal33/GMFSPOnline"
                  target="_blank"
                  className="viewResume s-code"
                  rel="noreferrer"
                  style={{
                    boxShadow:
                      darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
                  }}
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
              {/* <div className="mobileImg">
                <img src={home} alt="sponline" />
              </div>
              <div className="mobileImg">
                <img src={request} alt="sponline" />
              </div> */}
            </Tilt>
          </div>
        </Fade>
      </div>
      <div className="otherProject">
        <Fade right>
          <div
            className="other-box"
            style={{
              boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
            }}
          >
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
          <div
            className="other-box"
            style={{
              boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
            }}
          >
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
          <div
            className="other-box"
            style={{
              boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
            }}
          >
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
          <div
            className="other-box"
            style={{
              boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
            }}
          >
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
          <div
            className="other-box"
            style={{
              boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
            }}
          >
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
          <div
            className="other-box"
            style={{
              boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
            }}
          >
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
