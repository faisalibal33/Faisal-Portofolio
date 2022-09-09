import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import { ThemeContext } from "./context";
import "./app.css";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "#aaaaaa",
      }}
    >
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
