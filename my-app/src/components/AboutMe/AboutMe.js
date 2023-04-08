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
                Hello there. I am a self taught front end developer since 2022.
                I love cats, technology, fishing, and coding. These are my
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

        <div className="main-tools">
          <div className="bg-circle">
            <span className="tool-tip">HTML</span>
            <img
              alt="HTML"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"></img>
          </div>
          <div className="bg-circle">
            <span className="tool-tip">CSS</span>

            <img
              alt="CSS"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"></img>
          </div>
          <div className="bg-circle">
            <span className="tool-tip">JavaScript</span>

            <img
              alt="JavaScript"
              src="https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg"></img>
          </div>
          <div className="bg-circle">
            <span className="tool-tip">React</span>

            <img
              alt="HTML"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
