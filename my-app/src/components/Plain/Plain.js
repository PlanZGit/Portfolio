import React from "react";
import "./Plain.css";

const Plain = ({ children }) => {
  return (
    <div className="Plain">
      <img
        alt="backgroundIMG"
        src="https://img.freepik.com/premium-photo/close-up-computer-rgb-gaming-keyboard-illuminated-by-colored-led_75775-619.jpg"
        className="backgroundIMG"></img>
      {children}
    </div>
  );
};

export default Plain;
