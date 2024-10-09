import React from "react";
import "./Reasons.css";
import image1 from "../../src/assets/image1.png";
import image2 from "../../src/assets/image2.png";
import image3 from "../../src/assets/image3.png";
import image4 from "../../src/assets/image4.png";
import nb from "../../src/assets/nb.png";
import adidas from "../../src/assets/adidas.png";
import nike from "../../src/assets/nike.png";
import tick from "../../src/assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons" id="whyus">
      <div className="left-r">
        <img className="reasons-img-1" src={image1} alt="" />
        <img className="reasons-img-2" src={image2} alt="" />
        <img className="reasons-img-3" src={image3} alt="" />
        <img className="reasons-img-4" src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> Us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>Over 140+ expert coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN FASTER AND SMAERTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--orange)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={nike} alt="" />
          <img src={adidas} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
