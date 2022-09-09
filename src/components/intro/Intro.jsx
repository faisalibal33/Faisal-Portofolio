import "./intro.css";
import Me from "../../img/me.png";
import Social from "./Social";
import Fade from "react-reveal/Fade";
import Nav from "../nav/Nav";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="i" id="header">
      <Nav />
      <Fade left>
        <div className="i-right">
          <div
            className="right-img"
            style={{
              boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
            }}
          >
            <img src={Me} alt="" className="i-img" />
          </div>
          <div
            className="right-imgBg"
            style={{
              boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
            }}
          >
            <div className="i-bg"></div>
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Faisal Iqbal</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">React.js</div>
                <div className="i-title-item">React Native</div>
                <div className="i-title-item">Express.js</div>
                <div className="i-title-item">Node.js</div>
                <div className="i-title-item">MongoDB</div>
              </div>
            </div>
          </div>
        </div>
        <Social />
      </Fade>
    </div>
  );
};

export default Intro;
