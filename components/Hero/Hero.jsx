import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import heroImg from "../../src/assets/hero_image.png";
import heroImageBack from "../../src/assets/hero_image_back.png";
import heart from "../../src/assets/heart.png";
import calories from "../../src/assets/calories.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const transition = { type: "spring", duration: 2 };
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="best-app">
          <motion.div
            initial={{ left: mobile ? "180px" : "350px" }}
            whileInView={{ left: "9px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The finest gym you could find in California</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              We have the best and proper equipment to help you to achive your
              body goals and to be healthy and fit for your daily life routine
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+123</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+456</span>
            <span>Membres Joined</span>
          </div>
          <div>
            <span>+45</span>
            <span>Fitness Programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn-discover">
          <Link style={{ textDecoration: "none" }} to="/discover">
            Discover Course
          </Link>
        </button>

        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={{ ...transition }}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>BPM</span>
        </motion.div>
        <img src={heroImg} className="hero-image" />
        <img src={heroImageBack} className="hero-image-background" />

        <div className="calories">
          <img src={calories} alt="" />
          <div className="calories-spans">
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
