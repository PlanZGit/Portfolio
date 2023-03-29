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
              alt="movieRating"
              src="https://raw.githubusercontent.com/PlanZGit/MovieReview/main/Preview.png"></img>
            <span className="movie-tool-tip">Movie Rating</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
