import React from "react";
import "./Testimonials.css";
import { useState } from "react";
import { testimonialsData } from "../../src/data/testimonialsData";
import leftArrow from "../../src/assets/leftArrow.png";
import rightArrow from "../../src/assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [profile, setProfile] = useState(0);
  const tLength = testimonialsData.length;
  const transition = { type: "spring", duration: 2 };

  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span className="span-1">Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={profile}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[profile].review}
        </motion.span>
        <span>
          <span style={{ color: "orange" }}>
            {testimonialsData[profile].name}
          </span>{" "}
          -<span> {testimonialsData[profile].status}</span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition }}
        ></motion.div>
        <motion.img
          key={profile}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[profile].image}
          alt=""
        />
        <div className="arrows">
          <img
            onClick={() => {
              profile === 0
                ? setProfile(tLength - 1)
                : setProfile((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              profile === tLength - 1
                ? setProfile(0)
                : setProfile((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
