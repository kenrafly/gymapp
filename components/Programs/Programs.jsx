import React from "react";
import programsData from "../../src/data/programsData";
import "./Programs.css";
import rightArrow from "../../src/assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore</span>
        <span>Our</span>
        <span className="stroke-text">Program </span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            <img src={program.image} alt="" />
            <span className="category-heading">{program.heading}</span>
            <span>{program.details}</span>{" "}
            <div className="join-now">
              <span>Join Now</span>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
