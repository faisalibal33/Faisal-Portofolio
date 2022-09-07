import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Nav from "./components/nav/Nav";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import "./app.css";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contactMe/ContactMe";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
        // maxWidth: "1400px",
        // margin: "auto",
      }}
    >
      <Toggle />
      <Intro />
      <Nav />
      <About />
      <Projects />
      {/* <ContactMe /> */}
      <Contact />
    </div>
  );
};

export default App;
