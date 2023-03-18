import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="section" id="AboutMe">
      <img
        alt="backgroundIMG"
        src="https://img.freepik.com/premium-photo/close-up-computer-rgb-gaming-keyboard-illuminated-by-colored-led_75775-619.jpg"
        className="backgroundIMG"></img>
      <div className="about-me">
        <div className="AboutMe-contact">
          <div className="contact">
            <div className="Name">
              <h1>Fname Lname</h1>
              <h3>Front End Developer</h3>
            </div>
            <div className="contact-detail">
              <div className="blank"></div>
              <div>
                <p>
                  <strong>EMAIL : xxxx@xxxxxx.com </strong>
                </p>
                <p>
                  <strong>LINKIN : xxxxxxxxxxxxxxxxxxxx.com</strong>
                </p>
                <p>
                  <strong>GITHUB : xxxxxxxxx.com</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="my-picture">
            <img alt="IMG" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
