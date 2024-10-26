import { div } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";
import "./Exercises.css";

const Exercises = ({ exercises, bodyPart }) => {
  return (
    <div className="exercises">
      {exercises.map((exercise) => {
        return (
          <Link
            className="exercise"
            key={exercise.id}
            to={`/discover/${exercise.id}`}
          >
            <h3>{exercise.name}</h3>
            <img src={exercise.gifUrl} alt="" />
          </Link>
        );
      })}
    </div>
  );
};

export default Exercises;
