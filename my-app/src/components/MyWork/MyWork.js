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
        <div className="project-flex-box">
          <a
            rel="noreferrer"
            href="https://planzgit.github.io/MovieRating"
            target="_blank">
            <img
              className="project-image"
              alt="projectA"
              src="https://raw.githubusercontent.com/PlanZGit/MovieReview/main/Preview.png"></img>
            <span className="tool-tip">Movie Rating</span>
          </a>
        </div>
        <div className="project-flex-box">
          <a
            rel="noreferrer"
            href="https://planzgit.github.io/ArtWebPage"
            target="_blank">
            <img
              className="project-image"
              alt="projectB"
              src="https://user-images.githubusercontent.com/115049910/212942546-83b71f21-7aa0-4747-b55f-59b4fd53c286.jpg"></img>
            <span className="tool-tip">Art Galleries</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
