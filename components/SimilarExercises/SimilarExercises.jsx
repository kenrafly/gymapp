import React from "react";
import "./SimilarExercises.css";
import { Link } from "react-router-dom";

const SimilarExercises = ({ equipmentExercise }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Similar Exercises</h1>{" "}
      <div className="similar-exercises">
        {equipmentExercise?.map((exercise) => (
          <div>
            <img src={exercise.gifUrl} alt="" />
            <Link key={exercise.id} to={`/discover/${exercise.id}`}>
              <h1>{exercise.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarExercises;
