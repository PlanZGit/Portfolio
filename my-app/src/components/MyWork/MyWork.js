import React from "react";
import "./MyWork.css";

const MyWork = () => {
  return (
    <section className="section" id="MyWork">
      <div className="work-title" id="title-MyWork">
        <h1>My Work</h1>
      </div>
      <img
        alt="backgroundIMG"
        src="https://img.freepik.com/premium-photo/close-up-computer-rgb-gaming-keyboard-illuminated-by-colored-led_75775-619.jpg"
        className="work-bg"></img>

      <div className="container-flex-box">
        <div className="project-flex-box">ProjectX</div>
        <div className="project-flex-box">ProjectY</div>
        <div className="project-flex-box">ProjectZ</div>
      </div>
    </section>
  );
};

export default MyWork;
