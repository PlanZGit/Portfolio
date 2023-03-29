import React from "react";
import "./AboutMe.css";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const AboutMe = () => {
  return (
    <section className="section" id="AboutMe">
      <img
        alt="backgroundIMG"
        src="https://img.freepik.com/premium-photo/close-up-computer-rgb-gaming-keyboard-illuminated-by-colored-led_75775-619.jpg"
        className="backgroundIMG"></img>
      <div className="about-me">
        <div className="info">
          <div className="contact">
            <div className="title" id="title-AboutMe">
              <h1>Vang Xiong</h1>
              <p>
                Hello, Vang here. I am self taught, been learning to code since
                2018. I love cats, tech, fishing and coding. These are my
                projects, these are my skill sets, email me.
              </p>
            </div>
            <div className="contact-detail">
              <div className="blank"></div>
              <div>
                <a rel="noreferrer" href="mailto: vangx709@gmail.com">
                  <strong>EMAIL </strong>
                  <AiOutlineMail />
                </a>

                <a
                  rel="noreferrer"
                  href="https://github.com/PlanZGit"
                  target="_blank">
                  <strong>GITHUB </strong>
                  <AiFillGithub />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/vang-xiong-223918154/"
                  target="_blank">
                  <strong>LINKIN </strong>
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              className="my-picture"
              alt="IMG"
              src="https://media.licdn.com/dms/image/C5603AQFfTvvYPpIE_Q/profile-displayphoto-shrink_800_800/0/1662988201876?e=1685577600&v=beta&t=4gGz2qPGSLphVZ1IH9rVx5VhPuHYgDsXsXKhrC7Ixbk"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
