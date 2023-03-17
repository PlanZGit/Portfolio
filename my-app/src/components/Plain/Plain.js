import React from "react";
import "./Plain.css";
const Plain = ({ children }) => {
  return (
    <div className="Plain">
      <div className="container">{children}</div>
    </div>
  );
};

export default Plain;
