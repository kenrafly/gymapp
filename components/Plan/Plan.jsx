import React from "react";
import "./Plan.css";
import planData from "../../src/data/planData.js";
import tick from "../../src/assets/tick.png";

const Plan = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur1"></div>
      <div className="blur plans-blur2"></div>
      <div className="programs-header">
        <span className="stroke-text">Ready To Start</span>
        <span>Your Journey</span>
        <span className="stroke-text"> With us</span>
      </div>
      {/* programs detail
       */}
      <div className="plans">
        {planData.map((plan) => (
          <div className="plan">
            <img src={plan.icon} alt="" />
            <span className="plan-name">{plan.name}</span>
            <span className="plan-price">{plan.price}</span>

            <div className="features">
              {plan.features.map((feature) => (
                <div className="feature">
                  <img src={tick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <span className="see-more">See more features -{">"}</span>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
