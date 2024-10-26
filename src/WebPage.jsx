import React from "react";
import Hero from "../components/Hero/Hero";
import "./App.css";
import Programs from "../components/Programs/Programs";
import Reasons from "../components/Reasons/Reasons";
import Plan from "../components/Plan/Plan";
import Testimonials from "../components/Testimonials/Testimonials";
import Join from "../components/Join/Join";
import Footer from "../components/Footer/Footer";

const WebPage = () => {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plan />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
};

export default WebPage;
