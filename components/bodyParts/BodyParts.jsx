import React from "react";
import Icon from "../../src/icons/gym.png";
import "./BodyParts.css";

const BodyParts = ({ item, isClicked, onClick }) => {
  return (
    <>
      <div
        className={`body-parts ${isClicked ? "clicked" : ""}`}
        onClick={() => {
          onClick();
          window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        }}
      >
        <img src={Icon} alt="" />
        <p> {item}</p>
      </div>
    </>
  );
};

export default BodyParts;
