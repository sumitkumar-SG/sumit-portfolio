import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import { init } from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function submitDetails(event) {
    event.preventDefault();

    const details = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    try {
      const response = await axios.post("https://formspree.io/f/xayrpnlw", details);

      if (response.status === 200) {
        Swal.fire("Message Sent Successfully");
        clearFields();
      } else {
        throw new Error("Message sending failed");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    }
  }

  function clearFields() {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <>
      <div id="contact">
        <div className="contact__main__parent">
          <div className="contact__heading" data-aos="fade-up">
            <p>CONTACT ME</p>
            <h1>Ready for projects or a friendly chat? Let's connect!</h1>
          </div>
          <div className="contact__form" data-aos="fade-up">
            <form onSubmit={submitDetails} className="contact__left">
              <p>SEND ME MESSAGE</p>
              <input
                type="text"
                placeholder="Your Name"
                className="input__field"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input__field"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                className="input__field"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Your Message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input type="submit" value="Submit" />
            </form>

            <div className="contact__right">
              <p className="contact__info__p">CONTACT INFO</p>
              <div className="contact__right__box">
                <p>My offline Presence</p>
                <h1>Gobarsahi, Muzaffarpur Bihar- 842001</h1>
              </div>
              <div className="contact__right__box">
                <p>Email Me</p>
                <h1>sumkumar723@gmail.com</h1>
              </div>
              <div className="contact__right__box">
                <p>Call Me</p>
                <h1>Mobile: (+91)8292359259</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
