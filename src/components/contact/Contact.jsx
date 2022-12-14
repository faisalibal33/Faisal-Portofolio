import "./contact.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rcmev9s",
      "template_50zdiuv",
      formRef.current,
      "PMh5gdsylcmjoRX0e"
    );

    e.target.reset();
    setDone(true);
  };

  return (
    <div className="c" id="contact">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Come discuss with me</h1>
          <div className="c-info">
            <div
              className="box-info"
              style={{
                boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
              }}
            >
              <div className="info-icon">
                <AiOutlineMail />
              </div>
              <p className="info-title">Email</p>
              <p className="info-contact">faisaliqbal030397@gmail.com</p>
              <a
                href="mailto:faisaliqbal030397@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="sendMessage"
                style={{ textDecoration: "none" }}
              >
                Send a message
              </a>
            </div>
            <div
              className="box-info"
              style={{
                boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
              }}
            >
              <div className="info-icon">
                <BsWhatsapp />
              </div>
              <p className="info-title">Whatsapp</p>
              <p className="info-contact">+6281295516848</p>
              <a
                href="https://wa.me/6281295516848"
                rel="noreferrer"
                target="_blank"
                className="sendMessage"
                style={{ textDecoration: "none" }}
              >
                Send a message
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Want to know me better? </b> Send me a message and i will reply
            to your message soon.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="name"
              className="mobInput"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="email"
              name="email"
              placeholder="Email"
              required
              className="mobInput"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              className="mobInput"
            />
            <button
              style={{
                boxShadow: darkMode && "rgba(255, 255, 255, 0.35) 0px 5px 15px",
              }}
            >
              Submit
            </button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
