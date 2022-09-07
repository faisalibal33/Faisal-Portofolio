import React from "react";
import "./contactMe.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rcmev9s",
      "template_50zdiuv",
      form.current,
      "PMh5gdsylcmjoRX0e"
    );

    e.target.reset();
  };

  return (
    <div id="contactMe" className="contactMe">
      <div>
        <h2>Contact me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>faisaliqbal030397@gmail.com</h5>
            <a
              href="mailto:faisaliqbal030397@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a messages
            </a>
          </article>
          <article className="contact_option">
            <BsMessenger className="contact_option_icon" />
            <h4>Messenger</h4>
            <h5>Faisal Iqbal</h5>
            <a href="https://m.me/swaeipers" target="_blank" rel="noreferrer">
              Send a messages
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>Whatsapp</h4>
            <h5>+62859106712867</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+62859106712867"
              rel="noreferrer"
              target="_blank"
            >
              Send a messages
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
